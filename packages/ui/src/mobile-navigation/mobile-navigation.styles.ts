import { css } from '../../styled-system/css'

export const triggerStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  px: '3',
  py: '2',
  border: '[1px solid]',
  borderColor: 'border.strong',
  borderRadius: 'pill',
  bg: 'transparent',
  color: 'fg.default',
  cursor: 'pointer',
  fontFamily: 'body',
  fontSize: 'sm',
  fontWeight: 'medium',
  lineHeight: 'none',
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  '& [data-when="open"]': { display: 'none' },
  '&[data-panel-open] [data-when="open"]': { display: 'inline' },
  '&[data-panel-open] [data-when="closed"]': { display: 'none' },
})

export const sheetStyles = css({
  display: 'flex',
  flexDirection: 'column',
  px: '4',
  pt: '2',
  pb: '6',
  borderTop: '[1px solid]',
  borderColor: 'border.default',
})

export const sectionStyles = css({ borderBottom: '[1px solid]', borderColor: 'border.default' })

const labelStyles = {
  display: 'flex',
  width: '[100%]',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: '[18px]',
  px: '1',
  border: '[0]',
  bg: 'transparent',
  color: 'fg.default',
  cursor: 'pointer',
  fontFamily: 'body',
  fontSize: 'xl',
  fontWeight: 'extralight',
  lineHeight: 'none',
  letterSpacing: 'tighter',
  textDecoration: 'none',
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing' },
} as const

export const sectionTriggerStyles = css({
  ...labelStyles,
  transition: '[font-weight 0.3s]',
  '&[data-panel-open]': { fontWeight: 'black' },
  '& [data-part="icon"]': { fontSize: 'md', transition: '[transform 0.3s]' },
  '&[data-panel-open] [data-part="icon"]': { transform: 'rotate(180deg)' },
})

export const linkStyles = css(labelStyles)

export const sectionPanelStyles = css({
  display: 'flex',
  flexDirection: 'column',
  pb: '3',
  overflow: 'hidden',
  height: 'var(--accordion-panel-height)',
  transition: '[height 0.3s]',
  '&[data-starting-style], &[data-ending-style]': { height: '0' },
  '&[hidden]': { display: 'none' },
})
