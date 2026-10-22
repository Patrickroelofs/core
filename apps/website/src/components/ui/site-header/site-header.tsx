import { cx } from 'class-variance-authority'
import { type ComponentProps, type CSSProperties, useEffect, useRef, useState } from 'react'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SiteHeaderProps = Part<ComponentProps<'header'>>
export type SiteHeaderMonogramProps = Part<ComponentProps<'a'>> & { name: string; href: string }

/** Sticky top bar; collapses its monogram once the page scrolls. Compose `Monogram`, `Rule` and a nav (e.g. `NavigationMenu`). */
function Root(props: SiteHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const update = () => {
      setCollapsed(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      ref.current?.style.setProperty('--progress', String(progress))
      ref.current?.toggleAttribute('data-complete', max > 0 && progress > 0.995)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    const header = ref.current
    if (!header) return
    const root = document.documentElement.style
    const ro = new ResizeObserver(() => root.setProperty('--site-header-height', `${header.offsetHeight}px`))
    ro.observe(header)
    return () => {
      ro.disconnect()
      root.removeProperty('--site-header-height')
    }
  }, [])
  return (
    <header
      ref={ref}
      className={cx(
        'group/header sticky top-0 z-30 flex flex-wrap items-center gap-6 py-5 font-body text-fg-default',
        'px-site',
        // the blurred backdrop is its own layer so the fade-out at the bottom doesn't fade the content
        'before:absolute before:-z-1 before:inset-x-0 before:top-0 before:-bottom-6',
        'before:bg-bg-canvas/60 before:backdrop-blur-[12px] before:pointer-events-none',
        'before:[mask-image:linear-gradient(to_bottom,#000_calc(100%_-_42px),transparent)]',
        'in-data-section-nav-docked:before:hidden',
      )}
      data-collapsed={collapsed ? '' : undefined}
      {...props}
    />
  )
}

/**
 * Full name that folds to initials ("P.R.") when the header collapses; hover or focus slots it open again. The link is labelled with `name`.
 * Slot mark: each word is a 1em window onto a two-row reel ("P." over "Patrick"). Open, the reel rolls up (overshooting) while the window widens to the word.
 */
function Monogram({ name, href, ...props }: SiteHeaderMonogramProps) {
  return (
    <a
      className={cx(
        'flex gap-[0.02em] [transition:gap_.6s_var(--ease-slow)] text-title leading-none tracking-tighter whitespace-nowrap text-inherit no-underline',
        'monogram-open:gap-[0.22em] motion-reduce:transition-none!',
        'focus-ring [--focus-offset:4px]',
      )}
      data-monogram=""
      href={href}
      aria-label={name}
      {...props}
    >
      {name.split(' ').map((word, i) => (
        <span
          key={word}
          aria-hidden="true"
          className={cx(
            'block h-[1em] overflow-hidden font-black first:font-light last:[--closed:0.96em]',
            'max-w-[var(--closed,0.73em)] monogram-open:max-w-[calc(var(--chars)*0.62em)]',
            '[transition:max-width_.6s_var(--ease-slow)_calc(var(--i)*80ms)] motion-reduce:transition-none!',
          )}
          style={{ '--chars': word.length, '--i': i } as CSSProperties}
        >
          <span
            className={cx(
              'flex flex-col monogram-open:[transform:translateY(-1em)]',
              '[transition:transform_.6s_var(--ease-overshoot)_calc(var(--i)*80ms)] motion-reduce:transition-none!',
            )}
          >
            {/* padding: negative letter-spacing makes the last glyph overhang its box, which `overflow: hidden` would clip */}
            <span className="h-[1em] pr-[0.06em]">{word[0]}</span>
            <span className="h-[1em] pr-[0.06em]">{word}</span>
          </span>
        </span>
      ))}
    </a>
  )
}

/** Hairline between monogram and nav that fills up with the page's scroll progress (`--progress`, 0 to 1) and ends in a thumbs up at 100%. Decorative. */
function Rule(props: Part<ComponentProps<'span'>>) {
  return (
    <span
      className={cx(
        'relative h-px flex-1 bg-border-default',
        'after:absolute after:inset-0 after:origin-left after:bg-fg-default after:[transform:scaleX(var(--progress,0))]',
      )}
      aria-hidden="true"
      {...props}
    >
      {/* `translate` centres the icon on the line's end so `transform` is free for the pop */}
      <span
        className={cx(
          'absolute top-1/2 right-0 z-1 grid text-[24px] leading-none [translate:50%_-50%]',
          '[transform:rotate(-60deg)_scale(0)] opacity-0 [transition:transform_.7s_var(--ease-spring),opacity_.2s_linear]',
          'group-data-complete/header:[transform:none] group-data-complete/header:opacity-100',
          'motion-reduce:transition-none',
        )}
      >
        👍
      </span>
    </span>
  )
}

export const SiteHeader = Object.assign(Root, { Monogram, Rule })
