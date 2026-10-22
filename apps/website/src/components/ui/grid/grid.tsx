import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { type GridVariants, gridStyles, type ItemVariants, itemStyles } from './grid.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type GridProps = Part<useRender.ComponentProps<'div'>> & GridVariants

/** Root. A `<div>`; pass `render={<ul />}` with `Grid.Item render={<li />}` for a list. */
function Root({ render, layout, gap, ...props }: GridProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: mergeProps({ className: gridStyles({ layout, gap }) }, props),
  })
}

export type GridItemProps = Part<useRender.ComponentProps<'div'>> & ItemVariants

function Item({ render, span, rowSpan, ...props }: GridItemProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: mergeProps({ className: itemStyles({ span, rowSpan }) }, props),
  })
}

export const Grid = Object.assign(Root, { Item })
