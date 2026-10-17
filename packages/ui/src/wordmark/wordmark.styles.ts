import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

export const wordmarkStyles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    m: '0',
    fontFamily: 'body',
    lineHeight: '[0.86]',
    letterSpacing: 'tighter',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    '&[data-mode="follow"]': { cursor: 'crosshair' },
    '&[data-mode="staircase"] [data-part="letter"]:hover': { fontWeight: '[var(--wordmark-flip)]' },
  },
  variants: {
    size: {
      sm: { fontSize: 'step.5' },
      md: { fontSize: 'step.6' },
      lg: { fontSize: 'wordmark' },
    },
    tone: {
      default: { color: 'fg.default' },
      inverse: { color: 'fg.inverse' },
    },
  },
  defaultVariants: { size: 'lg', tone: 'default' },
})

export const lineStyles = css({ display: 'flex' })

export const letterStyles = css({
  fontWeight: '[var(--wordmark-follow, var(--wordmark-rest))]',
  transition: `[font-weight .35s ${ease}]`,
  _motionReduce: { transition: '[none]' },
})

export const accentStyles = css({ color: 'accent.brand', fontWeight: 'black' })

export type WordmarkVariants = NonNullable<RecipeVariantProps<typeof wordmarkStyles>>
