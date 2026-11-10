import { createHash } from 'node:crypto'
import { existsSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

const year = 'public, max-age=31536000, immutable'
const month = 'public, max-age=2592000, stale-while-revalidate=86400'
const day = 'public, max-age=86400'

function cacheControl(pathname: string) {
  if (pathname.startsWith('/assets/')) return year
  if (pathname.startsWith('/og/')) return day
  if (/\.(avif|webp|jpe?g|png|svg|ico|woff2?)$/.test(pathname)) return month
  if (/\.(webmanifest|xml|txt)$/.test(pathname)) return day
  return 'public, max-age=0, must-revalidate'
}

function contentSecurityPolicy(html: string) {
  const hashes = [...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)]
    .map(([, body]) => `'sha256-${createHash('sha256').update(body).digest('base64')}'`)
    .join(' ')
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ')
}

/** What `vite preview` (the production server) adds on top of the static build: redirects, caching, security headers and the 404 page. */
export function previewServer(root: string): Plugin {
  const file = (pathname: string) =>
    [pathname, `${pathname}.html`, path.join(pathname, 'index.html')]
      .map((candidate) => path.join(root, candidate))
      .find((candidate) => candidate.startsWith(root) && existsSync(candidate) && statSync(candidate).isFile())

  return {
    name: 'preview-server',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const host = req.headers.host ?? ''
        if (host.startsWith('www.')) {
          res.writeHead(301, { Location: `https://${host.slice(4)}${req.url ?? '/'}` }).end()
          return
        }

        let pathname = '/'
        try {
          pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname)
        } catch {}
        const found = file(pathname)

        res.setHeader('Strict-Transport-Security', 'max-age=31536000')
        res.setHeader('X-Content-Type-Options', 'nosniff')
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
        res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()')
        res.setHeader('Cache-Control', found ? cacheControl(pathname) : 'no-store')

        const page = found?.endsWith('.html') ? found : found ? undefined : path.join(root, '404.html')
        if (page) res.setHeader('Content-Security-Policy', contentSecurityPolicy(readFileSync(page, 'utf8')))

        if (found?.endsWith('.webmanifest')) {
          res.writeHead(200, { 'Content-Type': 'application/manifest+json; charset=utf-8' }).end(readFileSync(found))
          return
        }
        if (!found && page && existsSync(page) && ['GET', 'HEAD'].includes(req.method ?? '')) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
          res.end(req.method === 'HEAD' ? undefined : readFileSync(page))
          return
        }
        next()
      })
    },
  }
}
