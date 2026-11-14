import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { createServer, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import { tmpdir } from 'node:os'
import path from 'node:path'
import type { PreviewServer } from 'vite'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { markdownNegotiation } from '../src/seo/markdown'

// the plugin in front of a stand-in for nitro's static server, on a small fake build output
const publicDir = mkdtempSync(path.join(tmpdir(), 'website-'))
mkdirSync(path.join(publicDir, 'about'))
mkdirSync(path.join(publicDir, 'assets'))
writeFileSync(path.join(publicDir, 'about/index.html'), '<main>about</main>')
writeFileSync(path.join(publicDir, 'about.md'), '# About\n')
writeFileSync(path.join(publicDir, 'assets/app.js'), '')
writeFileSync(path.join(publicDir, 'llms.txt'), '# Patrick Roelofs\n')
writeFileSync(path.join(publicDir, '404.html'), '<main>404 page</main>')

let server: Server
let origin = ''

beforeAll(async () => {
  type Handler = Parameters<PreviewServer['middlewares']['use']>[1]
  let handler: Handler | undefined
  const plugin = markdownNegotiation(publicDir)
  const configure = plugin.configurePreviewServer as (server: unknown) => void
  configure({ middlewares: { use: (fn: Handler) => (handler = fn) } })
  server = createServer((req, res) =>
    (handler as (...args: unknown[]) => void)(req, res, () => {
      res.setHeader('x-passed-on', '1')
      res.end('next')
    }),
  )
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve))
  origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
})
afterAll(() => server.close())

const get = (pathname: string, accept?: string, method = 'GET') =>
  fetch(origin + pathname, { method, headers: accept ? { Accept: accept } : {} })

describe('404 for agents', () => {
  it('answers an unknown path with a markdown 404 when markdown is asked for', async () => {
    const res = await get('/__probe-does-not-exist', 'text/markdown')
    expect(res.status).toBe(404)
    expect(res.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
    expect(res.headers.get('vary')).toBe('Accept')
    expect(res.headers.get('link')).toContain('</llms.txt>; rel="describedby"')
    const body = await res.text()
    expect(body.length).toBeGreaterThan(20)
    expect(body).toContain('/llms.txt)')
    expect(body).toContain('/sitemap.xml)')
    expect(body).toContain('`/__probe-does-not-exist`')
  })

  it('accepts a weighted Accept header and answers HEAD without a body', async () => {
    const res = await get('/nope', 'text/markdown;q=0.9, text/html;q=0.8', 'HEAD')
    expect(res.status).toBe(404)
    expect(res.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
    expect(Number(res.headers.get('content-length'))).toBeGreaterThan(20)
    expect(await res.text()).toBe('')
  })

  it('serves the designed 404 page to browsers, with a 404 status', async () => {
    const res = await get('/nope', 'text/html,application/xhtml+xml')
    expect(res.status).toBe(404)
    expect(res.headers.get('content-type')).toBe('text/html; charset=utf-8')
    expect(await res.text()).toContain('404 page')
  })

  it('does not escape the output directory', async () => {
    const res = await get('/..%2f..%2f..%2fetc%2fpasswd', 'text/markdown')
    expect(res.status).toBe(404)
    expect(await res.text()).toContain('# 404: page not found')
  })

  it('survives a malformed path', async () => {
    expect((await get('/%E0%A4%A', 'text/markdown')).status).toBe(404)
  })

  it('leaves other clients and other methods to the static server', async () => {
    expect((await get('/nope')).headers.get('x-passed-on')).toBe('1')
    expect((await get('/nope', 'text/markdown', 'POST')).headers.get('x-passed-on')).toBe('1')
  })
})

describe('published files', () => {
  it.each(['/assets/app.js', '/llms.txt', '/404.html'])('passes %s on, whatever is accepted', async (file) => {
    const res = await get(file, 'text/markdown')
    expect(res.status).toBe(200)
    expect(res.headers.get('x-passed-on')).toBe('1')
  })

  it('still negotiates markdown for a page', async () => {
    const markdown = await get('/about', 'text/markdown')
    expect(markdown.status).toBe(200)
    expect(markdown.headers.get('content-type')).toBe('text/markdown; charset=utf-8')
    expect(await markdown.text()).toBe('# About\n')
    const html = await get('/about/', 'text/html')
    expect(html.headers.get('x-passed-on')).toBe('1')
    expect(html.headers.get('link')).toContain('</about.md>; rel="alternate"; type="text/markdown"')
  })
})
