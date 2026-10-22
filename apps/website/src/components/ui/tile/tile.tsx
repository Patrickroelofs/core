import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

/** Colour comes from `data-surface`, set by the component from `tone`. Link tiles flip to navy on hover. */
const tileStyles = cva(
  [
    'flex flex-col gap-5 min-w-0 p-7 transition-[background-color,color]',
    'link:hover:data-surface:bg-navy link:hover:data-surface:text-snow',
    'focus-ring',
  ],
  {
    variants: {
      justify: {
        start: 'justify-start',
        between: 'justify-between',
      },
      // speech bubble: square-ish bottom-left corner as the tail
      shape: {
        card: 'rounded-card',
        bubble: 'rounded-[28px_28px_28px_6px]',
      },
    },
    defaultVariants: { justify: 'between', shape: 'card' },
  },
)

export type TileVariants = NonNullable<VariantProps<typeof tileStyles>>

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type TileTone = 'snow' | 'plum' | 'azure' | 'coral' | 'navy'

export type TileProps = Part<useRender.ComponentProps<'div'>> & TileVariants & { tone?: TileTone }

/** Rounded coloured panel. A `<div>` by default; pass `render={<a href="…" />}` for a link tile that flips to navy on hover. */
function Root({ tone = 'navy', justify, shape, render, ...props }: TileProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: mergeProps({ className: tileStyles({ justify, shape }), 'data-surface': tone }, props),
  })
}

/** Small caption at the top of the tile. */
function Label(props: Part<ComponentProps<'span'>>) {
  return <span className="text-step-n1 font-medium leading-snug opacity-70" {...props} />
}

export const Tile = Object.assign(Root, { Label })
