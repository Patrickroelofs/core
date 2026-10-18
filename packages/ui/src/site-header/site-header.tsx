import type { ComponentProps } from 'react'
import { monogramStyles, ruleStyles, siteHeaderStyles } from './site-header.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SiteHeaderProps = Part<ComponentProps<'header'>>
export type SiteHeaderMonogramProps = Part<ComponentProps<'a'>> & { name: string; href: string }

/** Top bar. Compose `Monogram`, `Rule` and a nav (e.g. `NavigationMenu`). */
function Root(props: SiteHeaderProps) {
  return <header className={siteHeaderStyles} {...props} />
}

/** Name as initials ("P.R."); hover or focus unfolds it to the full name. The link is labelled with `name`. */
function Monogram({ name, href, ...props }: SiteHeaderMonogramProps) {
  return (
    <a className={monogramStyles} data-monogram="" href={href} aria-label={name} {...props}>
      {name.split(' ').map((word) => (
        <span key={word} data-word="" aria-hidden="true">
          <span>{word[0]}</span>
          <span data-rest="">
            <span>{word.slice(1)}</span>
          </span>
          <span data-dot="">
            <span>.</span>
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
