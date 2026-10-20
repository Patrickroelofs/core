import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

/** Colour comes from `data-surface`, set by the component from `tone`. Link tiles flip to navy on hover. */
export const tileStyles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5',
    minWidth: '0',
    p: '7',
    borderRadius: 'card',
    fontFamily: 'body',
    textDecoration: 'none',
    transition: '[background-color .2s, color .2s]',
    '&:is(a[href]):hover[data-surface]': { bg: 'navy', color: 'snow' },
    _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
    _motionReduce: { transition: '[none]' },
  },
  variants: {
    justify: {
      start: { justifyContent: 'flex-start' },
      between: { justifyContent: 'space-between' },
    },
  },
  defaultVariants: { justify: 'between' },
})

export const labelStyles = css({ fontSize: 'step.-1', fontWeight: 'medium', lineHeight: 'snug', opacity: 0.7 })

export type TileVariants = NonNullable<RecipeVariantProps<typeof tileStyles>>
