import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const active = ':is(:hover, :focus-visible)'

/** `split`: doors side by side from `md` (stacked below). Doors keep their size; the active one's background grows over its neighbour. */
export const footerStyles = cva({
  base: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '0',
    overflow: 'hidden',
    borderRadius: 'card',
    fontFamily: 'body',
    // mobile-last so no `flex-d_column` base class is shared with other stylesheets, where the website's copy would win the cascade
    mdDown: { flexDirection: 'column', flexWrap: 'nowrap' },
    // another door taking over: the first door drops under it at once
    [`&:has(> [data-door]:not(:first-child)${active}) > [data-door]:first-child`]: { transitionDuration: '[0s]' },
  },
  variants: { variant: { split: {} } },
  defaultVariants: { variant: 'split' },
})

/** The colour is a `::before` that widens (leftwards, except on the first door) over the neighbour with the content moving along with its edge. */
export const doorStyles = css({
  position: 'relative',
  isolation: 'isolate',
  containerType: 'inline-size',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10',
  flex: '[1 1 0]',
  minWidth: '0',
  minHeight: '[clamp(360px, 45vw, 800px)]',
  px: '9',
  pt: '10',
  pb: '8',
  color: 'fg.default',
  textDecoration: 'none',
  // Later doors sit over earlier ones (DOM order), which is what every switch needs except one going to the first door: that one rises to the top.
  zIndex: '1',
  '&[data-surface]': { backgroundColor: 'transparent' },
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    bottom: '0',
    right: '0',
    width: '[100%]',
    bg: 'bg.canvas',
    transition: `[width .6s ${ease}]`,
  },
  '&:first-child::before': { right: 'auto', left: '0' },
  // z-index is an integer, so on close it steps 3 > 1: the first door stays over the second while it retracts, unless another door is taking over
  '&:first-child': { transition: '[z-index .6s linear]' },
  '& > *': { transition: `[translate .6s ${ease}, font-weight .5s ${ease}]` },
  [`&:is(a[href])${active}`]: {
    '&:first-child': { zIndex: '3', transitionDuration: '[0s]' },
    md: { '&::before': { width: '[160%]' }, '&:not(:first-child) > *': { translate: '[-60cqw 0]' } },
  },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[-4px]' },
  _motionReduce: { '&::before': { transition: '[none]' }, '& > *': { transition: '[none]' } },
})

/** Thin until the door is active, then black; the trailing arrow straightens. */
export const titleStyles = css({
  margin: '0',
  fontSize: '[clamp(44px, 6.5vw, 140px)]',
  fontWeight: 'extralight',
  lineHeight: 'none',
  letterSpacing: 'tighter',
  textWrap: 'balance',
  transition: `[font-weight .5s ${ease}]`,
  '& > [data-arrow]': {
    display: 'inline-block',
    marginInlineStart: '[0.15em]',
    fontWeight: 'light',
    transform: 'rotate(-45deg)',
    transition: `[transform .5s ${ease}]`,
  },
  [`[data-door]${active} > &`]: { fontWeight: 'black', '& > [data-arrow]': { transform: 'rotate(0deg)' } },
  _motionReduce: { transition: '[none]', '& > [data-arrow]': { transition: '[none]' } },
})

/** Full-width strip under the doors. */
export const barStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '3',
  flex: '[0 0 100%]',
  px: '9',
  py: '4',
  bg: 'navy',
  color: 'snow',
  textStyle: 'mono',
})

export type FooterVariants = NonNullable<RecipeVariantProps<typeof footerStyles>>
