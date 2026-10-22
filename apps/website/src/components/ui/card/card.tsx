import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { bodyStyles, cardStyles, footerStyles, mediaStyles, type RevealVariants, revealStyles } from './card.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type CardProps = Part<useRender.ComponentProps<'div'>>

/** Root surface. A `<div>` by default; pass `render={<a href="…" />}` to make it a lifting link card. */
function Root({ render, ...props }: CardProps) {
  return useRender({ render, defaultTagName: 'div', props: { className: cardStyles, ...props } })
}

function Body(props: Part<ComponentProps<'div'>>) {
  return <div className={bodyStyles} {...props} />
}

/** Row for `Tag`s and a trailing `<time>` (e.g. `<Label render={<time dateTime="2024" />}>`). */
function Footer(props: Part<ComponentProps<'div'>>) {
  return <div className={footerStyles} {...props} />
}

/** Wraps the `Image` so a `Reveal` can sit on top of it. */
function Media(props: Part<ComponentProps<'div'>>) {
  return <div className={mediaStyles} {...props} />
}

export type CardRevealProps = Part<Omit<ComponentProps<'div'>, 'children'>> &
  RevealVariants & {
    /** CTA text, e.g. "View case study". */
    children: string
  }

/** Tone panel inside `Card.Media` that wipes up on hover/focus of a link card, with the CTA and a ↗. Decorative, hidden from assistive tech. */
function Reveal({ tone, children, ...props }: CardRevealProps) {
  return (
    <div className={revealStyles({ tone })} aria-hidden="true" {...props}>
      <span>{children}</span>
      <span>↗</span>
    </div>
  )
}

export const Card = Object.assign(Root, { Media, Reveal, Body, Footer })
