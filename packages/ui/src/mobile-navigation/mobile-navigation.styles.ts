import { css } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

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
  overflow: 'hidden',
  height: 'var(--collapsible-panel-height)',
  transition: `[height .4s ${ease}, opacity .3s ${ease}]`,
  '&[data-starting-style], &[data-ending-style]': { height: '0', opacity: 0 },
  '&[hidden]': { display: 'none' },
})

export const sectionStyles = css({
  borderBottom: '[1px solid]',
  borderColor: 'border.default',
  // Sections slide in one after another when the sheet mounts.
  animation: `[sectionIn .45s ${ease} backwards]`,
  '&:nth-child(2)': { animationDelay: '[.05s]' },
  '&:nth-child(3)': { animationDelay: '[.1s]' },
  '&:nth-child(4)': { animationDelay: '[.15s]' },
  '@media (prefers-reduced-motion: reduce)': { animation: '[none]' },
})

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
  transition: `[height .3s ${ease}]`,
  '&[data-starting-style], &[data-ending-style]': { height: '0' },
  '&[hidden]': { display: 'none' },
})
