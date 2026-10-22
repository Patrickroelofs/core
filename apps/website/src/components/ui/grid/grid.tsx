import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

/** `bento`: 12-column grid from `md` up (one column below). `flex`: wrapping row whose items share the space. Gap is a fluid space token. */
const gridStyles = cva('min-w-0', {
  variants: {
    layout: {
      bento: 'grid md:grid-cols-[repeat(12,minmax(0,1fr))]',
      flex: 'flex flex-wrap',
    },
    gap: {
      xs: 'gap-fluid-xs',
      s: 'gap-fluid-s',
      's-m': 'gap-fluid-s-m',
      m: 'gap-fluid-m',
      'm-l': 'gap-fluid-m-l',
      l: 'gap-fluid-l',
      xl: 'gap-fluid-xl',
    },
  },
  defaultVariants: { layout: 'bento', gap: 'm' },
})

/** Spans apply from `md` up and only in a `bento` grid; in a `flex` grid items grow from a 16rem basis. */
const itemStyles = cva('min-w-0 flex-[1_1_16rem]', {
  variants: {
    span: {
      1: 'md:col-span-1',
      2: 'md:col-span-2',
      3: 'md:col-span-3',
      4: 'md:col-span-4',
      5: 'md:col-span-5',
      6: 'md:col-span-6',
      7: 'md:col-span-7',
      8: 'md:col-span-8',
      9: 'md:col-span-9',
      10: 'md:col-span-10',
      11: 'md:col-span-11',
      12: 'md:col-span-12',
    },
    rowSpan: {
      1: 'md:row-span-1',
      2: 'md:row-span-2',
      3: 'md:row-span-3',
    },
  },
})

export type GridVariants = NonNullable<VariantProps<typeof gridStyles>>
export type ItemVariants = NonNullable<VariantProps<typeof itemStyles>>

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
