type Entry = { visible: boolean; loaded: boolean; layers: () => HTMLElement[]; done: () => void }

const maxWait = 800
const duration = 700
const stagger = 150
const entries = new Map<Element, Entry>()
let observer: IntersectionObserver | undefined
let frame = 0
let timer: ReturnType<typeof setTimeout> | undefined

const easeSoft = (t: number) => 1 - (1 - Math.min(1, Math.max(0, t))) ** 3
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** One edge per layer sweeps up across every image in the batch, as if they shared a single curtain. */
function sweep(batch: [Element, Entry][]) {
  const finish = () => {
    for (const [, entry] of batch) entry.done()
  }
  if (reducedMotion()) return finish()

  const start = performance.now()
  const layerCount = Math.max(...batch.map(([, entry]) => entry.layers().length))
  const tick = (now: number) => {
    const rects = batch.map(([el]) => el.getBoundingClientRect())
    const top = Math.min(...rects.map((r) => r.top))
    const bottom = Math.max(...rects.map((r) => r.bottom))
    const elapsed = now - start
    batch.forEach(([, entry], n) => {
      const rect = rects[n]
      entry.layers().forEach((layer, i) => {
        const line = bottom - easeSoft((elapsed - i * stagger) / duration) * (bottom - top)
        const covered = Math.min(rect.height, Math.max(0, line - rect.top))
        layer.style.clipPath = `inset(0 0 ${rect.height - covered}px 0)`
      })
    })
    if (elapsed < duration + (layerCount - 1) * stagger) requestAnimationFrame(tick)
    else finish()
  }
  requestAnimationFrame(tick)
}

function flush() {
  clearTimeout(timer)
  timer = undefined
  const batch = [...entries].filter(([, entry]) => entry.visible && entry.loaded)
  for (const [el] of batch) {
    entries.delete(el)
    observer?.unobserve(el)
  }
  if (batch.length) sweep(batch)
}

function check() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const visible = [...entries.values()].filter((entry) => entry.visible)
    if (!visible.some((entry) => entry.loaded)) return
    if (visible.every((entry) => entry.loaded)) flush()
    else timer ??= setTimeout(flush, maxWait)
  })
}

/** Reveals images that come into view together in one sweep, once all of them have loaded or `maxWait` has passed. `layers` are lead first. */
export function watch(el: Element, loaded: boolean, layers: () => HTMLElement[], done: () => void) {
  observer ??= new IntersectionObserver(
    (list) => {
      for (const { target, isIntersecting } of list) {
        const entry = entries.get(target)
        if (entry && isIntersecting) entry.visible = true
      }
      check()
    },
    { threshold: 0.25 },
  )
  const entry: Entry = { visible: false, loaded, layers, done }
  entries.set(el, entry)
  observer.observe(el)
  return {
    loaded() {
      entry.loaded = true
      check()
    },
    stop() {
      entries.delete(el)
      observer?.unobserve(el)
    },
  }
}
