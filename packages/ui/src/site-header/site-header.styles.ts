import { css } from '../../styled-system/css'

const slow = 'cubic-bezier(.7,0,.2,1)'
const overshoot = 'cubic-bezier(.5,-.4,.3,1.4)'
const active = ':is(:hover, :focus-visible)'

/** Top bar, sticky: monogram, a rule that fills the gap, then whatever nav is passed in. Scrolled (`data-collapsed`) the monogram folds to its initials. */
export const siteHeaderStyles = css({
  position: 'sticky',
  top: '0',
  zIndex: '[30]',
  bg: 'bg.canvas/60',
  backdropFilter: '[blur(12px)]',
  display: 'flex',
  alignItems: 'center',
  gap: '6',
  px: 'gutter',
  py: '5',
  fontFamily: 'body',
  color: 'fg.default',
})

const open = {
  gap: '[0.22em]',
  '& [data-word]': { maxWidth: '[calc(var(--chars) * 0.62em)]' },
  '& [data-reel]': { transform: 'translateY(-1em)' },
} as const

/** Slot mark, open until the header collapses or while hovered: each word is a 1em window onto a two-row reel ("P." over "Patrick"). On hover the reel rolls up (overshooting) while the window widens to the word. */
export const monogramStyles = css({
  display: 'flex',
  gap: '[0.02em]',
  transition: `[gap .6s ${slow}]`,
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
    maxWidth: '[var(--closed, 0.73em)]',
    transition: `[max-width .6s ${slow} calc(var(--i) * 80ms)]`,
  },
  '& [data-word]:first-child': { fontWeight: 'light' },
  '& [data-word]:last-child': { '--closed': '0.96em' },
  '& [data-reel]': {
    display: 'flex',
    flexDirection: 'column',
    transition: `[transform .6s ${overshoot} calc(var(--i) * 80ms)]`,
  },
  // padding: negative letter-spacing makes the last glyph overhang its box, which `overflow: hidden` would clip
  '& [data-reel] > *': { height: '[1em]', paddingRight: '[0.06em]' },
  '& [data-dot]': { color: 'coral' },
  [`&${active}`]: open,
  'header:not([data-collapsed]) &': open,
  _motionReduce: { '&, & *': { transition: '[none]' } },
})

/** Hairline track with a fill that follows `--progress` (0 to 1, set by the header from the scroll position). */
export const ruleStyles = css({
  position: 'relative',
  flex: '1',
  height: '[1px]',
  bg: 'border.default',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '0',
    bg: 'fg.default',
    transformOrigin: 'left',
    transform: 'scaleX(var(--progress, 0))',
  },
})
