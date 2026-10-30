type Entry = { visible: boolean; loaded: boolean; reveal: () => void }

const maxWait = 800
const entries = new Map<Element, Entry>()
let observer: IntersectionObserver | undefined
let frame = 0
let timer: ReturnType<typeof setTimeout> | undefined

function flush() {
  clearTimeout(timer)
  timer = undefined
  for (const [el, entry] of entries) {
    if (!entry.visible || !entry.loaded) continue
    entries.delete(el)
    observer?.unobserve(el)
    entry.reveal()
  }
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

/** Reveals images that come into view together at the same moment, once all of them have loaded or `maxWait` has passed. */
export function watch(el: Element, loaded: boolean, reveal: () => void) {
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
  const entry: Entry = { visible: false, loaded, reveal }
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
