import { type ComponentProps, type CSSProperties, useEffect, useRef, useState } from 'react'
import { monogramStyles, ruleStyles, siteHeaderStyles } from './site-header.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SiteHeaderProps = Part<ComponentProps<'header'>> & {
  hideOnScroll?: boolean
}
export type SiteHeaderMonogramProps = Part<ComponentProps<'a'>> & { name: string; href: string }

/** Sticky top bar; collapses its monogram once the page scrolls. Compose `Monogram`, `Rule` and a nav (e.g. `NavigationMenu`). */
function Root({ hideOnScroll = false, ...props }: SiteHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    let last = window.scrollY
    let travel = 0
    const update = () => {
      const y = window.scrollY
      const dy = y - last
      last = y
      setCollapsed(y > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(y / max, 1) : 0
      ref.current?.style.setProperty('--progress', String(progress))
      ref.current?.toggleAttribute('data-complete', max > 0 && progress > 0.995)
      if (!hideOnScroll || !ref.current) return setHidden(false)
      travel = Math.sign(dy) === Math.sign(travel) ? travel + dy : dy
      const busy =
        ref.current.matches(':hover, :focus-within') ||
        ref.current.querySelector('[data-popup-open], [data-panel-open]') !== null
      if (y <= ref.current.offsetHeight || travel < -24 || busy) setHidden(false)
      else if (travel > 24) setHidden(true)
    }
    const show = () => setHidden(false)
    update()
    window.addEventListener('scroll', update, { passive: true })
    ref.current?.addEventListener('focusin', show)
    const header = ref.current
    return () => {
      window.removeEventListener('scroll', update)
      header?.removeEventListener('focusin', show)
    }
  }, [hideOnScroll])
  useEffect(() => {
    const header = ref.current
    if (!header) return
    const ro = new ResizeObserver(() => setHeight(header.offsetHeight))
    ro.observe(header)
    return () => ro.disconnect()
  }, [])
  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--site-header-height', `${height}px`)
    root.setProperty('--site-header-offset', `${hidden ? 0 : height}px`)
    root.setProperty('--site-header-autohide', hideOnScroll ? '1' : '0')
  }, [height, hidden, hideOnScroll])
  useEffect(
    () => () => {
      for (const name of ['--site-header-height', '--site-header-offset', '--site-header-autohide'])
        document.documentElement.style.removeProperty(name)
    },
    [],
  )
  return (
    <header
      ref={ref}
      className={siteHeaderStyles}
      data-collapsed={collapsed ? '' : undefined}
      data-hidden={hidden ? '' : undefined}
      {...props}
    />
  )
}

/** Full name that folds to initials ("P.R.") when the header collapses; hover or focus slots it open again. The link is labelled with `name`. */
function Monogram({ name, href, ...props }: SiteHeaderMonogramProps) {
  return (
    <a className={monogramStyles} data-monogram="" href={href} aria-label={name} {...props}>
      {name.split(' ').map((word, i) => (
        <span key={word} data-word="" aria-hidden="true" style={{ '--chars': word.length, '--i': i } as CSSProperties}>
          <span data-reel="">
            <span>{word[0]}</span>
            <span>{word}</span>
          </span>
        </span>
      ))}
    </a>
  )
}

/** Hairline between monogram and nav that fills up with the page's scroll progress and ends in a thumbs up at 100%. Decorative. */
function Rule(props: Part<ComponentProps<'span'>>) {
  return (
    <span className={ruleStyles} data-rule="" aria-hidden="true" {...props}>
      <span data-thumb="">👍</span>
    </span>
  )
}

export const SiteHeader = Object.assign(Root, { Monogram, Rule })
