import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const active = ':is(:hover, :focus-visible)'

/** `split`: doors side by side from `md` (stacked below). The active door grows, its siblings shrink. */
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
  variants: {
    variant: {
      split: {
        [`&:has([data-door]${active}) [data-door]:not(${active})`]: { md: { flexGrow: 0.8 } },
      },
    },
  },
  defaultVariants: { variant: 'split' },
})

export const doorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10',
  flex: '[1 1 0]',
  minWidth: '0',
  minHeight: '[300px]',
  px: '9',
  pt: '10',
  pb: '8',
  overflow: 'hidden',
  bg: 'bg.canvas',
  color: 'fg.default',
  textDecoration: 'none',
  transition: `[flex-grow .6s ${ease}]`,
  [`&:is(a[href])${active}`]: { md: { flexGrow: 2.2 } },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[-4px]' },
  _motionReduce: { transition: '[none]' },
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
  fontSize: 'step.6',
  fontWeight: 'extralight',
  lineHeight: 'none',
  letterSpacing: 'tighter',
  whiteSpace: 'nowrap',
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
