import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { publicPages } from '../src/seo/pages'

// What a client without JavaScript gets: the prerendered files. `pnpm test` builds them first.
const publicDir = path.resolve(import.meta.dirname, '../.output/public')
const read = (file: string) => readFileSync(path.join(publicDir, file), 'utf8')
const htmlFile = (page: string) => (page === '/' ? 'index.html' : `${page.slice(1)}/index.html`)

/** Visible text of `<main>`, leaving out any `<header>`: the strictest way a crawler might count it. */
function mainText(html: string) {
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? ''
  return main
    .replace(/<(script|style|svg|header)\b[\s\S]*?<\/\1>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

describe.runIf(existsSync(publicDir))('prerendered pages', () => {
  it.each(publicPages)('%s has at least 500 characters of text in its HTML', (page) => {
    expect(mainText(read(htmlFile(page))).length).toBeGreaterThanOrEqual(500)
  })

  it.each(publicPages)('%s has one h1 and no skipped heading levels', (page) => {
    const levels = [...read(htmlFile(page)).matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]))
    expect(levels.filter((level) => level === 1)).toHaveLength(1)
    expect(levels[0]).toBe(1)
    levels.forEach((level, i) => {
      if (i > 0) expect(level - levels[i - 1]).toBeLessThanOrEqual(1)
    })
  })

  it.each(publicPages)('%s has a markdown copy', (page) => {
    expect(read(page === '/' ? 'index.md' : `${page.slice(1)}.md`)).toMatch(/^---\ntitle: /)
  })

  it('writes the search terms from the JSON-LD out on the homepage', () => {
    const html = read('index.html')
    const jsonLd = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? '{}')
    const person = jsonLd['@graph'].find((node: { '@type': string }) => node['@type'] === 'Person')
    const text = mainText(html).toLowerCase()
    expect(person.knowsAbout.length).toBeGreaterThan(0)
    for (const term of person.knowsAbout) expect(text).toContain(term.toLowerCase())
  })

  it('links the trust pages from every page', () => {
    for (const page of publicPages) {
      const html = read(htmlFile(page))
      expect(html).toContain('href="/contact"')
      expect(html).toContain('href="/privacy"')
    }
  })

  it('publishes the agent files', () => {
    expect(read('llms.txt')).toContain('**When to use this site**')
    expect(read('sitemap.xml')).toContain('/privacy</loc>')
    expect(read('robots.txt')).toContain('Sitemap: ')
    expect(read('llms-full.txt')).toContain('url: https://patrickroelofs.com/contact')
  })
})
