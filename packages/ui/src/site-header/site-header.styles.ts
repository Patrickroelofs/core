import { css } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const slow = 'cubic-bezier(.7,0,.2,1)'
const overshoot = 'cubic-bezier(.5,-.4,.3,1.4)'
const active = ':is(:hover, :focus-visible)'

/** Top bar: monogram, a rule that fills the gap, then whatever nav is passed in. */
export const siteHeaderStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6',
  px: 'gutter',
  py: '5',
  fontFamily: 'body',
  color: 'fg.default',
  // the rule pulls back while the monogram slots over
  [`&:has([data-monogram]${active}) [data-rule]`]: { transform: 'scaleX(.3)', opacity: 0.4 },
})

/** Slot mark: each word is a 1em window onto a two-row reel ("P." over "Patrick"). On hover the reel rolls up (overshooting) while the window widens to the word. */
export const monogramStyles = css({
  display: 'flex',
  gap: '[0.18em]',
  fontSize: '[30px]',
  lineHeight: 'none',
  letterSpacing: 'tighter',
  whiteSpace: 'nowrap',
  color: 'inherit',
  textDecoration: 'none',
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[4px]' },
  '& [data-word]': {
    display: 'block',
    height: '[1em]',
    overflow: 'hidden',
    fontWeight: 'black',
    maxWidth: '[0.95em]',
    transition: `[max-width .6s ${slow} calc(var(--i) * 80ms)]`,
  },
  '& [data-word]:first-child': { fontWeight: 'light' },
  '& [data-word]:last-child': { maxWidth: '[1.05em]' },
  '& [data-reel]': {
    display: 'flex',
    flexDirection: 'column',
    transition: `[transform .6s ${overshoot} calc(var(--i) * 80ms)]`,
  },
  '& [data-reel] > *': { height: '[1em]' },
  '& [data-dot]': { color: 'coral' },
  [`&${active}`]: {
    '& [data-word]': { maxWidth: '[calc(var(--chars) * 0.62em)]' },
    '& [data-reel]': { transform: 'translateY(-1em)' },
  },
  _motionReduce: { '&, & *': { transition: '[none]' } },
})

export const ruleStyles = css({
  flex: '1',
  height: '[1px]',
  bg: 'border.default',
  transformOrigin: 'left',
  transition: `[transform .55s ${ease}, opacity .55s ${ease}]`,
  _motionReduce: { transition: '[none]' },
})
