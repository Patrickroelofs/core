import type { ComponentProps, CSSProperties } from 'react'
import { monogramStyles, ruleStyles, siteHeaderStyles } from './site-header.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type SiteHeaderProps = Part<ComponentProps<'header'>>
export type SiteHeaderMonogramProps = Part<ComponentProps<'a'>> & { name: string; href: string }

/** Top bar. Compose `Monogram`, `Rule` and a nav (e.g. `NavigationMenu`). */
function Root(props: SiteHeaderProps) {
  return <header className={siteHeaderStyles} {...props} />
}

/** Name as initials ("P.R."); hover or focus slots each word over to the full name. The link is labelled with `name`. */
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
