// Build-time only (imported from vite.config.ts): a markdown copy of every prerendered page,
// and the preview-server middleware that serves it to agents sending `Accept: text/markdown`.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import TurndownService from 'turndown'
import type { Plugin } from 'vite'
import { markdownPath, type Page, type PagePath, pages, pageUrl, publicPages, siteName, siteUrl } from './pages'

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' })
turndown.remove(
  (node) => node.getAttribute('aria-hidden') === 'true' || ['SCRIPT', 'STYLE', 'svg'].includes(node.nodeName),
)
// a card that is one big link: keep its content readable and put the link underneath
turndown.addRule('block-link', {
  filter: (node) => node.nodeName === 'A' && !!node.querySelector('h1, h2, h3, h4, img, p'),
  replacement: (content, node) => {
    const heading = (node as Element).querySelector('h1, h2, h3, h4')?.textContent?.trim()
    return `\n\n${content.trim()}\n\n[${heading ?? 'Open'} →](${(node as Element).getAttribute('href')})\n\n`
  },
})

export function htmlToMarkdown(html: string, pagePath: PagePath) {
  const page: Page = pages[pagePath]
  const main = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? ''
  const body = turndown
    // inline siblings are spaced by CSS, not by whitespace
    .turndown(main.replace(/<\/(span|label|a|time)>(?=<(span|label|a|time)\b)/g, '</$1> '))
    .replace(/\]\(\//g, `](${siteUrl}/`)
    .replace(/\n{3,}/g, '\n\n')
  const front = [
    '---',
    `title: ${JSON.stringify(pagePath === '/' ? siteName : `${page.title} - ${siteName}`)}`,
    ...(page.description ? [`description: ${JSON.stringify(page.description)}`] : []),
    `url: ${pageUrl(pagePath)}`,
    '---',
  ]
  return `${front.join('\n')}\n\n${body}\n`
}

/** Nitro hooks: write `<page>.md` next to each prerendered page, and `llms-full.txt` with all of them. */
export function markdownHooks() {
  const documents = new Map<PagePath, string>()
  let publicDir = ''
  return {
    'prerender:generate': (
      route: { route: string; contents?: string },
      nitro: { options: { output: { publicDir: string } } },
    ) => {
      publicDir = nitro.options.output.publicDir
      const pagePath = publicPages.find((p) => p === route.route)
      if (pagePath && route.contents) documents.set(pagePath, htmlToMarkdown(route.contents, pagePath))
    },
    'prerender:done': () => {
      const write = (file: string, contents: string) => {
        mkdirSync(path.dirname(path.join(publicDir, file)), { recursive: true })
        writeFileSync(path.join(publicDir, file), contents)
      }
      const ordered = publicPages.flatMap((p) => (documents.has(p) ? [[p, documents.get(p) as string] as const] : []))
      for (const [pagePath, markdown] of ordered) write(markdownPath(pagePath), markdown)
      write('llms-full.txt', ordered.map(([, markdown]) => markdown).join('\n'))
    },
  }
}

const discoveryLinks = ['</sitemap.xml>; rel="sitemap"', '</llms.txt>; rel="describedby"; type="text/plain"']

/** `vite preview` is the production server: content negotiation and `Link` headers live here. */
export function markdownNegotiation(publicDir: string): Plugin {
  return {
    name: 'markdown-negotiation',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const pathname = (req.url ?? '/').split('?')[0].replace(/(.)\/$/, '$1')
        const sendMarkdown = (pagePath: PagePath) => {
          const markdown = readFileSync(path.join(publicDir, markdownPath(pagePath)))
          res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
          res.setHeader('Content-Length', markdown.byteLength)
          res.setHeader('Link', [...discoveryLinks, `<${pagePath}>; rel="canonical"`])
          // a rough estimate: about four characters per token
          res.setHeader('x-markdown-tokens', Math.ceil(markdown.byteLength / 4))
          res.end(req.method === 'HEAD' ? undefined : markdown)
        }
        const direct = publicPages.find((p) => markdownPath(p) === pathname)
        const pagePath = direct ?? publicPages.find((p) => p === pathname)
        if (!pagePath || !existsSync(path.join(publicDir, markdownPath(pagePath)))) return next()
        if (direct) return sendMarkdown(direct)
        res.setHeader('Vary', 'Accept')
        if (/\btext\/markdown\b/.test(req.headers.accept ?? '')) return sendMarkdown(pagePath)
        res.setHeader('Link', [...discoveryLinks, `<${markdownPath(pagePath)}>; rel="alternate"; type="text/markdown"`])
        next()
      })
    },
  }
}
