import { css } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
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
  // the rule pulls back while the monogram unfolds
  [`&:has([data-monogram]${active}) [data-rule]`]: { transform: 'scaleX(.3)', opacity: 0.4 },
})

/** Initials with a coral dot. On hover each word's rest unfolds (0fr > 1fr) and the dots fold away. */
export const monogramStyles = css({
  display: 'flex',
  fontSize: '[30px]',
  lineHeight: 'none',
  letterSpacing: 'tighter',
  whiteSpace: 'nowrap',
  color: 'inherit',
  textDecoration: 'none',
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[4px]' },
  '& [data-word]': {
    display: 'flex',
    fontWeight: 'black',
    marginRight: '[0.02em]',
    transition: `[margin .5s ${ease}]`,
  },
  '& [data-word]:first-child': { fontWeight: 'light' },
  '& [data-word]:last-child': { marginRight: '0' },
  '& [data-rest], & [data-dot]': {
    display: 'grid',
    transition: `[grid-template-columns .55s ${ease}]`,
  },
  '& [data-rest]': { gridTemplateColumns: '[0fr]' },
  '& [data-dot]': { gridTemplateColumns: '[1fr]', color: 'coral' },
  '& [data-rest] > *, & [data-dot] > *': { minWidth: '0', overflow: 'hidden' },
  [`&${active}`]: {
    '& [data-word]:not(:last-child)': { marginRight: '[0.22em]' },
    '& [data-rest]': { gridTemplateColumns: '[1fr]' },
    '& [data-dot]': { gridTemplateColumns: '[0fr]' },
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
