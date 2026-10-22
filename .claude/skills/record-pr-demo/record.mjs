#!/usr/bin/env node
// Records a Playwright scenario against the running website and converts it to an H.264 MP4.
// Usage: node record.mjs --scenario /tmp/demo.mjs [--label name] [--base-url http://localhost:5173] [--viewport 1280x720]
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdtemp, readdir, readFile, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { parseArgs } from 'node:util'

const MAX_BYTES = 10 * 1024 * 1024 // ponytail: GitHub's free-plan video limit, shorten the demo instead of raising it

const { values } = parseArgs({
  options: {
    scenario: { type: 'string' },
    label: { type: 'string', default: 'demo' },
    'base-url': { type: 'string', default: 'http://localhost:5173' },
    viewport: { type: 'string', default: '1280x720' },
  },
})
if (!values.scenario) throw new Error('--scenario is required')

const [width, height] = values.viewport.split('x').map(Number)
const baseURL = values['base-url'].replace(/\/$/, '')
const output = `/tmp/core-pr-demo-${values.label.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.mp4`

const scenario = await import(pathToFileURL(path.resolve(values.scenario)).href)
if (typeof scenario.default !== 'function') throw new Error('Scenario must default-export a function')

const { chromium, expect } = await import('@playwright/test')
const dir = await mkdtemp(path.join(tmpdir(), 'core-pr-demo-'))
const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width, height },
  colorScheme: scenario.colorScheme ?? 'light',
  recordVideo: { dir, size: { width, height } },
})

// Visible cursor + click ring (headless Chromium draws no pointer).
await context.addInitScript(() => {
  addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div')
    cursor.innerHTML = `<svg width="18" height="23" viewBox="0 0 28 36"><path d="M2 2.2V27l6.7-6.4 5.1 12.7 5-2-5.2-12.2H23L2 2.2Z" fill="#111827" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/></svg>`
    cursor.style.cssText =
      'position:fixed;top:0;left:0;pointer-events:none;z-index:2147483647;opacity:0;transition:opacity .12s'
    document.documentElement.append(cursor)
    document.addEventListener(
      'mousemove',
      (e) => {
        cursor.style.opacity = '1'
        cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
      },
      true,
    )
    document.addEventListener(
      'mousedown',
      (e) => {
        const ring = document.createElement('span')
        ring.style.cssText = `position:fixed;left:${e.clientX - 14}px;top:${e.clientY - 14}px;width:28px;height:28px;box-sizing:border-box;border:2px solid #0d99ff;border-radius:50%;pointer-events:none;z-index:2147483646`
        document.documentElement.append(ring)
        ring
          .animate(
            [
              { opacity: 0.9, transform: 'scale(.55)' },
              { opacity: 0, transform: 'scale(1.4)' },
            ],
            420,
          )
          .finished.then(() => ring.remove())
      },
      true,
    )
  })
})

const page = await context.newPage()
const t0 = Date.now()
let readyAt
const pause = (ms = 700) => page.waitForTimeout(ms)
const center = async (locator) => {
  const box = await locator.boundingBox()
  if (!box) throw new Error('Target has no bounding box')
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 }
}
const moveCursor = async (locator) => {
  const { x, y } = await center(locator)
  await page.mouse.move(x, y, { steps: 20 })
  await pause(300)
}
const click = async (locator) => {
  await moveCursor(locator)
  await locator.click()
  await pause(300)
}
// Eased scroll to a locator (centred) or an absolute y; scrollIntoView jumps, which looks jarring in a video.
const scroll = async (target, ms = 900) => {
  const run = (y) =>
    page.evaluate(
      ([to, ms]) =>
        new Promise((resolve) => {
          const from = scrollY
          const start = performance.now()
          const step = (now) => {
            const t = Math.min(1, (now - start) / ms)
            scrollTo(0, from + (to - from) * (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2))
            t < 1 ? requestAnimationFrame(step) : resolve()
          }
          requestAnimationFrame(step)
        }),
      [y, ms],
    )
  const y =
    typeof target === 'number'
      ? target
      : await target.evaluate((el) => {
          const r = el.getBoundingClientRect()
          return r.top + scrollY - (innerHeight - r.height) / 2
        })
  await run(y)
  await pause(300)
}
const ready = async () => {
  if (readyAt) throw new Error('ready() must be called exactly once')
  await pause(1200)
  readyAt = (Date.now() - t0) / 1000 - 1.2 // video starts 1.2s before the first interaction
}

try {
  await scenario.default({ baseURL, page, expect, click, moveCursor, scroll, pause, ready })
  if (!readyAt) throw new Error('Scenario never called ready()')
  await pause(900)
} finally {
  await context.close() // flushes the video
  await browser.close()
}

const webm = path.join(
  dir,
  (await readdir(dir)).find((f) => f.endsWith('.webm')),
)
const ff = spawnSync(
  'ffmpeg',
  [
    '-y',
    '-ss',
    String(Math.max(0, readyAt)),
    '-i',
    webm,
    '-an',
    '-c:v',
    'libx264',
    '-crf',
    '23',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    output,
  ],
  { encoding: 'utf8' },
)
if (ff.status !== 0) throw new Error(`ffmpeg failed: ${ff.stderr}`)

const { size } = await stat(output)
if (size > MAX_BYTES)
  throw new Error(`${output} is ${(size / 1048576).toFixed(1)} MB, over the 10 MB budget. Shorten the demo.`)
const sha = createHash('sha256')
  .update(await readFile(output))
  .digest('hex')
console.log(`${output}\n${(size / 1024).toFixed(0)} KB\nsha256 ${sha}`)
