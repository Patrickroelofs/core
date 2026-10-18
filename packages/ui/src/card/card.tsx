import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { Tag, type TagProps } from '../tag/tag'
import {
  bodyStyles,
  type CardMediaVariants,
  cardStyles,
  descriptionStyles,
  mediaStyles,
  metaStyles,
  tagWrapStyles,
  titleStyles,
} from './card.styles'

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

export type CardTitleProps = Part<useRender.ComponentProps<'h3'>>

/** Heavy title; gets blacker when the card is hovered as a link. */
function Title({ render, ...props }: CardTitleProps) {
  return useRender({
    render,
    defaultTagName: 'h3',
    props: { className: titleStyles, 'data-part': 'title', ...props },
  })
}

/** Small top-right text, e.g. the year. */
function Meta(props: Part<ComponentProps<'span'>>) {
  return <span className={metaStyles} {...props} />
}

function Description(props: Part<ComponentProps<'p'>>) {
  return <p className={descriptionStyles} {...props} />
}

/** Role tag, right-aligned. Accepts all `Tag` props (`tone`, `appearance`); defaults to `size="sm"`, `tone="coral"`. */
function CardTag({ size = 'sm', tone = 'coral', ...props }: TagProps) {
  return (
    <span className={tagWrapStyles}>
      <Tag size={size} tone={tone} {...props} />
    </span>
  )
}

export const Card = Object.assign(Root, { Media, Body, Title, Meta, Description, Tag: CardTag })
