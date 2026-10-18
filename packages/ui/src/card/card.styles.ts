import { css } from '../../styled-system/css'

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
