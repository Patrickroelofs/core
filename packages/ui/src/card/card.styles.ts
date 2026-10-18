import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

/** Lift and heavier title only apply when the card is a link (`<a href>`). Headings inside get the card title look. */
export const cardStyles = css({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  overflow: 'hidden',
  borderRadius: 'card',
  bg: '[#e4e4e4]', // ponytail: design's surface-1 (snow-200), not a theme token yet
  color: 'navy',
  fontFamily: 'body',
  textDecoration: 'none',
  transition: `[transform .35s ${ease}]`,
  '&:is(a[href])': { cursor: 'pointer' },
  '&:is(a[href]):hover': { transform: 'translateY(-4px)' },
  '& :is(h1, h2, h3, h4, h5, h6)': {
    fontSize: '[30px]',
    fontWeight: 'extrabold',
    lineHeight: 'none',
    letterSpacing: '[-0.035em]',
    transition: `[font-weight .35s ${ease}]`,
  },
  '&:is(a[href]):hover :is(h1, h2, h3, h4, h5, h6)': { fontWeight: 'black' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  _motionReduce: { transition: '[none]', '&:is(a[href]):hover': { transform: 'none' } },
})

export const bodyStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2',
  pt: '[22px]',
  px: '6',
  pb: '6',
})

/** Tags on the left, a `<time>` pushed to the right edge. Wraps on narrow cards. */
export const footerStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2',
  mt: '2',
  '& > time': { marginInlineStart: 'auto', opacity: 0.6 },
})

/** Positioning context so a `Reveal` can cover the `Image`. */
export const mediaStyles = css({ position: 'relative', overflow: 'hidden' })

/** Tone panel that wipes up over the media on link-card hover/focus, CTA bottom-left, arrow bottom-right. */
export const revealStyles = cva({
  base: {
    position: 'absolute',
    inset: '0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    px: '6',
    py: '[22px]',
    clipPath: 'inset(100% 0 0 0)',
    transition: `[clip-path .35s ${ease}]`,
    '& > span': { opacity: 0, transition: `[transform .35s ${ease}, opacity .35s ${ease}]` },
    '& > span:first-child': {
      fontSize: '[22px]',
      fontWeight: 'bold',
      letterSpacing: '[-0.02em]',
      transform: 'translateY(12px)',
      transitionDelay: '[80ms]',
    },
    '& > span:last-child': {
      fontSize: '[28px]',
      fontWeight: 'light',
      transform: 'translate(-10px, 10px)',
      transitionDelay: '[140ms]',
    },
    'a[href]:is(:hover, :focus-visible) > * > &, a[href]:is(:hover, :focus-visible) > &': {
      clipPath: 'inset(0 0 0 0)',
      '& > span': { opacity: 1, transform: 'none' },
    },
    _motionReduce: { transition: '[none]', '& > span': { transition: '[none]' } },
  },
  variants: {
    tone: {
      coral: { bg: 'coral', color: 'navy' },
      azure: { bg: '[#016aa8]', color: 'snow' },
      plum: { bg: 'plum', color: 'snow' },
      navy: { bg: 'navy', color: 'snow' },
    },
  },
  defaultVariants: { tone: 'coral' },
})

export type RevealVariants = NonNullable<RecipeVariantProps<typeof revealStyles>>
