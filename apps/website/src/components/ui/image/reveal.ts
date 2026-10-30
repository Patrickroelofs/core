type Entry = {
  el: Element
  visible: boolean
  loaded: boolean
  stopped: boolean
  /** Lead panel first. */
  layers: HTMLElement[]
  onDone: () => void
}

const maxWait = 800
const duration = 700
const stagger = 150

const waiting = new Map<Element, Entry>()
let observer: IntersectionObserver | undefined
let frame = 0
let timer: ReturnType<typeof setTimeout> | undefined

const easeSoft = (t: number) => 1 - (1 - Math.min(1, Math.max(0, t))) ** 3
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** One edge per layer sweeps up across every image in the batch, as if they shared a single curtain. */
function sweep(batch: Entry[]) {
  const live = () => batch.filter((entry) => !entry.stopped)
  const finish = () => {
    for (const entry of live()) entry.onDone()
  }
  if (reducedMotion()) return finish()

  const layerCount = Math.max(...batch.map((entry) => entry.layers.length))
  const end = duration + (layerCount - 1) * stagger
  const start = performance.now()

  const tick = (now: number) => {
    const current = live()
    if (!current.length) return
    const elapsed = now - start
    if (elapsed >= end) return finish()

    const rects = current.map((entry) => entry.el.getBoundingClientRect())
    const top = Math.min(...rects.map((rect) => rect.top))
    const bottom = Math.max(...rects.map((rect) => rect.bottom))
    const edges = current[0].layers.map(
      (_, i) => bottom - easeSoft((elapsed - i * stagger) / duration) * (bottom - top),
    )

    current.forEach((entry, n) => {
      const { top: y, height } = rects[n]
      entry.layers.forEach((layer, i) => {
        const covered = Math.min(height, Math.max(0, edges[i] - y))
        layer.style.transform = `translateY(${covered - height}px)`
      })
    })
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function flush() {
  clearTimeout(timer)
  timer = undefined
  const batch = [...waiting.values()].filter((entry) => entry.visible && entry.loaded)
  for (const entry of batch) {
    waiting.delete(entry.el)
    observer?.unobserve(entry.el)
  }
  if (batch.length) sweep(batch)
}

/** Next frame, so images that change state together land in one batch. */
function schedule() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const visible = [...waiting.values()].filter((entry) => entry.visible)
    if (!visible.some((entry) => entry.loaded)) return
    if (visible.every((entry) => entry.loaded)) flush()
    else timer ??= setTimeout(flush, maxWait)
  })
}

function onIntersect(list: IntersectionObserverEntry[]) {
  for (const { target, isIntersecting } of list) {
    const entry = waiting.get(target)
    if (entry && isIntersecting) entry.visible = true
  }
  schedule()
}

/** Reveals images that come into view together in one sweep, once all of them have loaded or `maxWait` has passed. */
export function watch(el: Element, options: Pick<Entry, 'loaded' | 'layers' | 'onDone'>) {
  observer ??= new IntersectionObserver(onIntersect, { threshold: 0.25 })
  const entry: Entry = { el, visible: false, stopped: false, ...options }
  waiting.set(el, entry)
  observer.observe(el)
  return {
    loaded() {
      entry.loaded = true
      schedule()
    },
    stop() {
      entry.stopped = true
      waiting.delete(el)
      observer?.unobserve(el)
    },
  }
}
