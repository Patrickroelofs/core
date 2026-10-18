import { cva, type RecipeVariantProps } from '../../styled-system/css'

/** `bento`: 12-column grid from `md` up (one column below). `flex`: wrapping row whose items share the space. Gap is a fluid space token. */
export const gridStyles = cva({
  base: { minWidth: '0' },
  variants: {
    layout: {
      bento: {
        display: 'grid',
        gridTemplateColumns: '[minmax(0, 1fr)]',
        md: { gridTemplateColumns: '[repeat(12, minmax(0, 1fr))]' },
      },
      flex: { display: 'flex', flexWrap: 'wrap' },
    },
    gap: {
      xs: { gap: 'fluid.xs' },
      s: { gap: 'fluid.s' },
      's-m': { gap: 'fluid.s-m' },
      m: { gap: 'fluid.m' },
      'm-l': { gap: 'fluid.m-l' },
      l: { gap: 'fluid.l' },
      xl: { gap: 'fluid.xl' },
    },
  },
  defaultVariants: { layout: 'bento', gap: 'm' },
})

/** Spans apply from `md` up and only in a `bento` grid; in a `flex` grid items grow from a 16rem basis. */
export const itemStyles = cva({
  base: { minWidth: '0', flex: '[1 1 16rem]' },
  variants: {
    span: {
      1: { md: { gridColumn: 'span 1' } },
      2: { md: { gridColumn: 'span 2' } },
      3: { md: { gridColumn: 'span 3' } },
      4: { md: { gridColumn: 'span 4' } },
      5: { md: { gridColumn: 'span 5' } },
      6: { md: { gridColumn: 'span 6' } },
      7: { md: { gridColumn: 'span 7' } },
      8: { md: { gridColumn: 'span 8' } },
      9: { md: { gridColumn: 'span 9' } },
      10: { md: { gridColumn: 'span 10' } },
      11: { md: { gridColumn: 'span 11' } },
      12: { md: { gridColumn: 'span 12' } },
    },
    rowSpan: {
      1: { md: { gridRow: 'span 1' } },
      2: { md: { gridRow: 'span 2' } },
      3: { md: { gridRow: 'span 3' } },
    },
  },
})

export type GridVariants = NonNullable<RecipeVariantProps<typeof gridStyles>>
export type ItemVariants = NonNullable<RecipeVariantProps<typeof itemStyles>>
