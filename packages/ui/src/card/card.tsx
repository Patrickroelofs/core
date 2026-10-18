import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { bodyStyles, type CardMediaVariants, cardStyles, mediaStyles } from './card.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type CardProps = Part<useRender.ComponentProps<'div'>>

/** Root surface. A `<div>` by default; pass `render={<a href="…" />}` to make it a lifting link card. */
function Root({ render, ...props }: CardProps) {
  return useRender({ render, defaultTagName: 'div', props: { className: cardStyles, ...props } })
}

export type CardMediaProps = Part<ComponentProps<'div'>> & CardMediaVariants

/** Image slot. Put an `<img>` inside, or text for the striped placeholder label. */
function Media({ ratio, tone, ...props }: CardMediaProps) {
  return <div className={mediaStyles({ ratio, tone })} {...props} />
}

function Body(props: Part<ComponentProps<'div'>>) {
  return <div className={bodyStyles} {...props} />
}

export const Card = Object.assign(Root, { Media, Body })
