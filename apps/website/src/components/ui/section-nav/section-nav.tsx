import { useRender } from '@base-ui/react/use-render'
import { cx } from 'class-variance-authority'
import {
  type ComponentProps,
  createContext,
  type MouseEvent,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SectionNavProps = Part<ComponentProps<'nav'>> & {
  offset?: number
  onActiveChange?: (id: string | null) => void
}

export type SectionNavLinkProps = Omit<useRender.ComponentProps<'a'>, 'className'> & {
  href: `#${string}`
}

const Context = createContext<{ active: string | null; go: (e: MouseEvent, id: string) => void }>({
  active: null,
  go: () => {},
})

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const cssNumber = (name: string) =>
  Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0

function Root({
  offset = 40,
  onActiveChange,
  children,
  'aria-label': label = 'On this page',
  ...props
}: SectionNavProps) {
  const navRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string | null>(null)
  const activeRef = useRef<string | null>(null)
  const lock = useRef(false)
  const held = useRef<number | null>(null)
  const idle = useRef<ReturnType<typeof setTimeout>>(undefined)
  const onChange = useRef(onActiveChange)
  onChange.current = onActiveChange

  const select = (id: string | null) => {
    if (activeRef.current === id) return
    activeRef.current = id
    setActive(id)
    onChange.current?.(id)
  }

  const ids = () =>
    Array.from(trackRef.current?.querySelectorAll<HTMLAnchorElement>('a[data-section-link]') ?? [], (a) =>
      decodeURIComponent(a.hash.slice(1)),
    )

  const spy = () => {
    const nav = navRef.current
    if (lock.current || !nav) return
    if (held.current !== null && Math.abs(window.scrollY - held.current) < 4) return
    held.current = null
    const line = nav.getBoundingClientRect().bottom + offset
    const all = ids()
    let next: string | null = null
    for (const id of all) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) next = id
    }
    const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
    if (next && bottom) next = all[all.length - 1]
    select(next)
  }

  const dock = () => {
    const nav = navRef.current
    if (!nav) return
    const docked = nav.getBoundingClientRect().top <= cssNumber('--site-header-height') + 1
    nav.toggleAttribute('data-docked', docked)
    document.documentElement.toggleAttribute('data-section-nav-docked', docked)
  }

  const release = () => {
    held.current = window.scrollY
    lock.current = false
    spy()
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: spy reads refs and the latest offset
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      dock()
      if (lock.current) {
        clearTimeout(idle.current)
        idle.current = setTimeout(release, 140)
        return
      }
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        spy()
      })
    }
    const nav = navRef.current
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    nav?.addEventListener('transitionend', onScroll)
    dock()
    spy()
    return () => {
      document.documentElement.removeAttribute('data-section-nav-docked')
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      nav?.removeEventListener('transitionend', onScroll)
      cancelAnimationFrame(frame)
      clearTimeout(idle.current)
    }
  }, [offset])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const root = document.documentElement
    const ro = new ResizeObserver(() => root.style.setProperty('--section-nav-height', `${nav.offsetHeight}px`))
    ro.observe(nav)
    return () => {
      ro.disconnect()
      root.style.removeProperty('--section-nav-height')
    }
  }, [])

  const measure = () => {
    const track = trackRef.current
    if (!track) return null
    track.toggleAttribute('data-overflow-start', track.scrollLeft > 2)
    track.toggleAttribute('data-overflow-end', track.scrollLeft + track.clientWidth < track.scrollWidth - 2)
    const link = activeRef.current
      ? track.querySelector<HTMLElement>(`a[data-section-link][href="#${CSS.escape(activeRef.current)}"]`)
      : null
    if (!link) {
      if (track.dataset.indicator) track.dataset.indicator = 'hidden'
      return null
    }
    track.dataset.indicator = track.dataset.indicator === 'move' || track.dataset.indicator === 'snap' ? 'move' : 'snap'
    track.style.setProperty('--indicator-x', `${link.offsetLeft}px`)
    track.style.setProperty('--indicator-y', `${link.offsetTop}px`)
    track.style.setProperty('--indicator-width', `${link.offsetWidth}px`)
    track.style.setProperty('--indicator-height', `${link.offsetHeight}px`)
    return link
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-measure whenever the active link changes
  useLayoutEffect(() => {
    const track = trackRef.current
    const link = measure()
    if (track && link && track.scrollWidth > track.clientWidth) {
      track.scrollTo({
        left: link.offsetLeft - (track.clientWidth - link.offsetWidth) / 2,
        behavior: reducedMotion() ? 'auto' : 'smooth',
      })
    }
  }, [active])

  // biome-ignore lint/correctness/useExhaustiveDependencies: measure only touches refs
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const ro = new ResizeObserver(() => measure())
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  const go = (e: MouseEvent, id: string) => {
    if (!document.getElementById(id) || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)
      return
    lock.current = true
    held.current = null
    select(id)
    clearTimeout(idle.current)
    idle.current = setTimeout(release, 200)
  }

  return (
    <nav
      ref={navRef}
      className={cx(
        'sticky top-[var(--site-header-height,0px)] z-20 bg-bg-canvas/92 backdrop-blur-[8px]',
        'px-site py-3',
        '[transition:top_.45s_var(--ease-travel),background_.25s_ease,border-color_.25s_ease]',
        'before:absolute before:-z-1 before:inset-x-0 before:top-0 before:-bottom-12',
        'before:bg-bg-canvas/60 before:backdrop-blur-[12px] before:pointer-events-none before:opacity-0',
        'before:[mask-image:linear-gradient(to_bottom,#000_calc(100%_-_40px),transparent)]',
        'data-docked:bg-transparent data-docked:backdrop-filter-none data-docked:border-b-transparent',
        'data-docked:before:top-[calc(-1*var(--site-header-height,0px))] data-docked:before:opacity-100',
      )}
      data-section-nav=""
      aria-label={label}
      {...props}
    >
      <Context.Provider value={{ active, go }}>
        <div
          ref={trackRef}
          className={cx(
            'group/track relative flex gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            '[--fade-start:#000] [--fade-end:#000]',
            'data-overflow-start:[--fade-start:transparent] data-overflow-end:[--fade-end:transparent]',
            '[mask-image:linear-gradient(90deg,var(--fade-start),#000_32px,#000_calc(100%_-_32px),var(--fade-end))]',
          )}
          onScroll={() => measure()}
        >
          <span
            className={cx(
              'absolute top-0 left-0 h-[var(--indicator-height,0px)] w-[var(--indicator-width,0px)]',
              '[transform:translate(var(--indicator-x,0px),var(--indicator-y,0px))]',
              'bg-action-primary rounded-pill opacity-0 pointer-events-none transition-opacity duration-300',
              'group-data-[indicator=snap]/track:opacity-100 group-data-[indicator=move]/track:opacity-100',
              'group-data-[indicator=move]/track:[transition:transform_.45s_var(--ease-travel),width_.45s_var(--ease-travel),height_.45s_var(--ease-travel),opacity_.3s_ease]',
              ' ',
            )}
            aria-hidden="true"
          />
          {children}
        </div>
      </Context.Provider>
    </nav>
  )
}

function Link({ href, children, render, onClick, ...props }: SectionNavLinkProps) {
  const { active, go } = useContext(Context)
  const id = decodeURIComponent(href.slice(1))
  const on = active === id
  return useRender({
    render,
    defaultTagName: 'a',
    props: {
      className: cx(
        'relative inline-flex flex-none gap-1.5 px-3 py-1.5 rounded-pill text-sm font-medium leading-snug whitespace-nowrap',
        'transition-colors duration-[.35s] hover:text-accent-brand',
        'focus-ring',
        'data-active:text-action-on-primary',
      ),
      href,
      'data-section-link': '',
      'data-active': on ? '' : undefined,
      'aria-current': on ? 'location' : undefined,
      onClick: (e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e)
        go(e, id)
      },
      children: <>{children}</>,
      ...props,
    },
  })
}

export const SectionNav = Object.assign(Root, { Link })
