import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { labelStyles, type TileVariants, tileStyles } from './tile.styles'

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
  return <span className={labelStyles} {...props} />
}

export const Tile = Object.assign(Root, { Label })
