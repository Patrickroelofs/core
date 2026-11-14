import { describe, expect, it } from 'vitest'
import { agentFiles, notFoundMarkdown } from '../src/seo/agents'
import { type PagePath, person, publicPages, seo, siteUrl } from '../src/seo/pages'

type Node = Record<string, unknown> & { '@type': string }

function graph(path: PagePath) {
  const script = seo(path).meta.find((tag) => 'script:ld+json' in tag) as { 'script:ld+json': { '@graph': Node[] } }
  return script['script:ld+json']['@graph']
}
const title = (path: PagePath) => (seo(path).meta.find((tag) => 'title' in tag) as { title: string }).title

describe('page registry', () => {
  it('publishes the trust pages', () => {
    expect(publicPages).toEqual(expect.arrayContaining(['/about', '/contact', '/privacy']))
  })

  it('names the job in the homepage title only', () => {
    expect(title('/')).toBe('Patrick Roelofs - Frontend developer')
    expect(title('/about')).toBe('About - Patrick Roelofs')
  })
})

describe('JSON-LD', () => {
  const personNode = graph('/').find((node) => node['@type'] === 'Person') as Node

  it('describes the person', () => {
    expect(personNode.description).toBe(person.description)
    expect((personNode.description as string).length).toBeGreaterThan(50)
    expect(personNode.knowsAbout).toEqual(person.knowsAbout)
  })

  it('has a contact point and a postal address', () => {
    expect(personNode.contactPoint).toMatchObject({
      '@type': 'ContactPoint',
      contactType: 'personal',
      email: person.email,
      url: `${siteUrl}/contact`,
    })
    expect(personNode.address).toEqual({ '@type': 'PostalAddress', addressCountry: 'NL' })
  })

  it('types the about and contact pages', () => {
    const pageType = (path: PagePath) => graph(path).at(-1)?.['@type']
    expect(pageType('/about')).toBe('ProfilePage')
    expect(pageType('/contact')).toBe('ContactPage')
    expect(pageType('/privacy')).toBe('WebPage')
  })

  it('is on every public page', () => {
    for (const path of publicPages) expect(graph(path).map((node) => node['@type'])).toContain('Person')
  })
})

describe('llms.txt', () => {
  const llms = agentFiles['/llms.txt'].body()
  const lines = llms.split('\n')

  it('follows the llms.txt layout: one H1, a summary quote, then H2 file lists', () => {
    expect(lines[0]).toBe('# Patrick Roelofs')
    expect(lines[2]).toMatch(/^> /)
    expect(lines.filter((line) => /^# /.test(line))).toHaveLength(1)
    expect(lines.filter((line) => /^#{3,} /.test(line))).toHaveLength(0)
    // every item under an H2 is a markdown link, optionally followed by ": notes"
    const lists = llms.slice(llms.indexOf('\n## '))
    for (const line of lists.split('\n').filter((l) => l && !l.startsWith('## '))) {
      expect(line).toMatch(/^- \[[^\]]+\]\([^)]+\)(: .+)?$/)
    }
  })

  it('tells agents when and how to use the site, above the file lists', () => {
    const guidance = llms.slice(0, llms.indexOf('\n## '))
    expect(guidance).toContain('**When to use this site**')
    expect(guidance).toContain('**When not to use this site**')
    expect(guidance).toContain('**How to use it**')
    expect(guidance).toContain('Accept: text/markdown')
    expect(guidance).toContain(person.email)
  })

  it('lists every public page as markdown', () => {
    for (const path of publicPages) expect(llms).toContain(`${siteUrl}${path === '/' ? '/index' : path}.md`)
  })
})

describe('sitemap.xml', () => {
  it('lists every public page', () => {
    const sitemap = agentFiles['/sitemap.xml'].body()
    for (const path of publicPages) expect(sitemap).toContain(`<loc>${siteUrl}${path}</loc>`)
  })
})

describe('markdown 404', () => {
  const body = notFoundMarkdown('/nope')

  it('explains the error and links to the sitemap and llms.txt', () => {
    expect(body).toMatch(/^# 404: page not found\n/)
    expect(body).toContain('There is no page at `/nope`')
    expect(body).toContain(`(${siteUrl}/llms.txt)`)
    expect(body).toContain(`(${siteUrl}/sitemap.xml)`)
  })

  it('does not let the path break out of the code span', () => {
    expect(notFoundMarkdown('/a`](http://evil.example)<b>')).toContain('`/ahttp//evil.exampleb`')
  })
})
