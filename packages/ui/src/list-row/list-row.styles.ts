import { css } from '../../styled-system/css'

/** Grid of lead | body | meta. Without a `Lead`, the body takes the first column. Link rows turn coral and nudge right on hover. */
export const rowStyles = css({
  display: 'grid',
  gridTemplateColumns: '[minmax(0, 1fr) auto]',
  gap: '4',
  alignItems: 'baseline',
  py: '3',
  borderBottomWidth: '[1px]',
  borderBottomStyle: 'solid',
  borderColor: 'border.default',
  color: 'fg.default',
  fontFamily: 'body',
  textDecoration: 'none',
  transition: '[color .2s]',
  '&:has(> [data-lead])': { gridTemplateColumns: '[minmax(72px, 104px) minmax(0, 1fr) auto]' },
  '&:last-child': { borderBottomWidth: '0' },
  '&:is(a[href])': { px: '2', transition: '[color .2s, padding-left .25s ease]' },
  '&:is(a[href]):hover': { color: 'accent.brand', pl: '6' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  _motionReduce: { transition: '[none]', '&:is(a[href]):hover': { pl: '2' } },
})

export const leadStyles = css({ color: 'fg.default', opacity: 0.6 })

export const bodyStyles = css({ minWidth: '0' })

export const metaStyles = css({ whiteSpace: 'nowrap', color: 'fg.default', opacity: 0.6 })
