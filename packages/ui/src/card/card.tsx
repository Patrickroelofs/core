import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { bodyStyles, cardStyles, footerStyles } from './card.styles'

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

export const Card = Object.assign(Root, { Body, Footer })
