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
  },
  variants: { variant: { split: {} } },
  defaultVariants: { variant: 'split' },
})

/** The colour is a `::before` that widens (leftwards, except on the first door) over the neighbour while the content stays put. */
export const doorStyles = css({
  position: 'relative',
  isolation: 'isolate',
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
  [`&:is(a[href])${active}`]: { zIndex: '1', md: { '&::before': { width: '[160%]' } } },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[-4px]' },
  _motionReduce: { '&::before': { transition: '[none]' } },
})

export const labelStyles = css({
  textStyle: 'mono',
  textTransform: 'uppercase',
  letterSpacing: '[0.08em]',
  whiteSpace: 'nowrap',
  opacity: 0.75,
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
