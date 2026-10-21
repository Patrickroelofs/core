import { css } from '../../styled-system/css'

const travel = 'cubic-bezier(.65,0,.35,1)'

export const sectionNavStyles = css({
  position: 'sticky',
  top: '[var(--site-header-height, 0px)]',
  zIndex: '[20]',
  bg: 'bg.canvas/92',
  backdropFilter: '[blur(8px)]',
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: '-1',
    inset: '0',
    bottom: '[-48px]',
    bg: 'bg.canvas/60',
    backdropFilter: '[blur(12px)]',
    maskImage: '[linear-gradient(to bottom, #000 calc(100% - 40px), transparent)]',
    pointerEvents: 'none',
    opacity: 0,
  },
  '&[data-docked]': {
    bg: 'transparent',
    backdropFilter: '[none]',
    borderBottomColor: 'transparent',
    '&::before': { top: '[calc(-1 * var(--site-header-height, 0px))]', opacity: 1 },
  },
  px: '[max(var(--spacing-gutter), calc((100% - 1400px) / 2 + var(--spacing-gutter)))]',
  py: '3',
  fontFamily: 'body',
  color: 'fg.default',
  transition: `[top .45s ${travel}, background .25s ease, border-color .25s ease]`,
  _motionReduce: { transition: '[none]' },
})

export const trackStyles = css({
  position: 'relative',
  display: 'flex',
  gap: '1.5',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
  '--fade-start': '#000',
  '--fade-end': '#000',
  '&[data-overflow-start]': { '--fade-start': 'transparent' },
  '&[data-overflow-end]': { '--fade-end': 'transparent' },
  maskImage: '[linear-gradient(90deg, var(--fade-start), #000 32px, #000 calc(100% - 32px), var(--fade-end))]',
})

export const indicatorStyles = css({
  position: 'absolute',
  left: '0',
  top: '0',
  width: '[var(--indicator-width, 0px)]',
  height: '[var(--indicator-height, 0px)]',
  transform: 'translate(var(--indicator-x, 0px), var(--indicator-y, 0px))',
  bg: 'action.primary',
  borderRadius: 'pill',
  opacity: 0,
  pointerEvents: 'none',
  transition: '[opacity .3s ease]',
  '[data-indicator=snap] > &': { opacity: 1 },
  '[data-indicator=move] > &': {
    opacity: 1,
    transition: `[transform .45s ${travel}, width .45s ${travel}, height .45s ${travel}, opacity .3s ease]`,
  },
  _motionReduce: { '&, [data-indicator] > &': { transition: '[none]' } },
})

export const linkStyles = css({
  position: 'relative',
  flex: 'none',
  display: 'inline-flex',
  gap: '1.5',
  px: '3',
  py: '[6px]',
  borderRadius: 'pill',
  fontSize: 'sm',
  fontWeight: 'medium',
  lineHeight: 'snug',
  whiteSpace: 'nowrap',
  color: 'fg.default',
  textDecoration: 'none',
  transition: '[color .35s ease]',
  _hover: { color: 'accent.brand' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  '&[data-active]': { color: 'action.onPrimary' },
  '& [data-number]': { fontFamily: 'mono', opacity: 0.55, transition: '[opacity .35s ease]' },
  '&[data-active] [data-number]': { opacity: 0.7 },
})
