import { type ComponentProps, type CSSProperties, useEffect, useState } from 'react'
import { monogramStyles, ruleStyles, siteHeaderStyles } from './site-header.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SiteHeaderProps = Part<ComponentProps<'header'>>
export type SiteHeaderMonogramProps = Part<ComponentProps<'a'>> & { name: string; href: string }

/** Sticky top bar; collapses its monogram once the page scrolls. Compose `Monogram`, `Rule` and a nav (e.g. `NavigationMenu`). */
function Root(props: SiteHeaderProps) {
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    const update = () => setCollapsed(window.scrollY > 8)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <header className={siteHeaderStyles} data-collapsed={collapsed ? '' : undefined} {...props} />
}

/** Full name that folds to initials ("P.R.") when the header collapses; hover or focus slots it open again. The link is labelled with `name`. */
function Monogram({ name, href, ...props }: SiteHeaderMonogramProps) {
  return (
    <a className={monogramStyles} data-monogram="" href={href} aria-label={name} {...props}>
      {name.split(' ').map((word, i) => (
        <span key={word} data-word="" aria-hidden="true" style={{ '--chars': word.length, '--i': i } as CSSProperties}>
          <span data-reel="">
            <span>
              {word[0]}
              <span data-dot="">.</span>
            </span>
            <span>{word}</span>
          </span>
        </span>
      ))}
    </a>
  )
}

/** Hairline that fills the space between monogram and nav. Decorative. */
function Rule(props: Part<ComponentProps<'span'>>) {
  return <span className={ruleStyles} data-rule="" aria-hidden="true" {...props} />
}

export const SiteHeader = Object.assign(Root, { Monogram, Rule })
