import { css } from '../../styled-system/css'

/** Grid of lead | body | meta. Without a `Lead`, the body takes the first column. Hover colour only applies when the row is a link. */
export const rowStyles = css({
  display: 'grid',
  gridTemplateColumns: '[minmax(0, 1fr) auto]',
  gap: '6',
  alignItems: 'baseline',
  py: '5',
  borderBottomWidth: '[1px]',
  borderBottomStyle: 'solid',
  borderColor: 'navy/20',
  color: 'navy',
  fontFamily: 'body',
  textDecoration: 'none',
  transition: '[color .2s]',
  '&:has(> [data-lead])': { gridTemplateColumns: '[minmax(90px, 140px) minmax(0, 1fr) auto]' },
  '&:last-child': { borderBottomWidth: '0' },
  '&:is(a[href]):hover': { color: 'coral' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  _motionReduce: { transition: '[none]' },
})

export const leadStyles = css({ textStyle: 'mono', opacity: 0.6 })

export const bodyStyles = css({ minWidth: '0' })

export const metaStyles = css({ whiteSpace: 'nowrap', opacity: 0.55 })
