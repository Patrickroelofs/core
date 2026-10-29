import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gzipSync } from 'node:zlib'

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.output/public')

const budget = {
  blockingCss: 15_000,
  initialJs: 170_000,
  modulePreloads: 10,
}

const gzipSize = (href) => gzipSync(readFileSync(path.join(publicDir, href))).length
const sum = (hrefs) => hrefs.reduce((total, href) => total + gzipSize(href), 0)
const hrefs = (html, rel) =>
  [...html.matchAll(new RegExp(`<link[^>]*rel="${rel}"[^>]*>`, 'g'))].map((tag) => tag[0].match(/href="([^"]+)"/)[1])

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const file = path.join(dir, name)
    if (statSync(file).isDirectory()) return name === 'assets' ? [] : pages(file)
    return name === 'index.html' ? [file] : []
  })
}

let failed = false
for (const file of pages(publicDir)) {
  const html = readFileSync(file, 'utf8')
  const preloads = hrefs(html, 'modulepreload')
  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((match) => match[1])
  const measured = {
    blockingCss: sum(hrefs(html, 'stylesheet')),
    initialJs: sum([...new Set([...preloads, ...scripts])]),
    modulePreloads: preloads.length,
  }
  const route = `/${path.relative(publicDir, path.dirname(file))}`
  for (const [key, limit] of Object.entries(budget)) {
    const over = measured[key] > limit
    failed ||= over
    console.log(`${over ? '✗' : '✓'} ${route} ${key}: ${measured[key]} / ${limit}`)
  }
}

if (failed) process.exit(1)
