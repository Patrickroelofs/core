import { css, cva } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

export const listStyles = css({
  display: 'flex',
  gap: '[2px]',
  listStyle: 'none',
  m: '0',
  p: '1',
  bg: 'navy/8',
  borderRadius: 'pill',
  width: 'fit-content',
})

/** Shared by Trigger and top-level Link so they look identical in the bar. */
export const barItemStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5',
    px: '4',
    py: '[10px]',
    border: '[0]',
    borderRadius: 'pill',
    bg: 'transparent',
    color: 'navy',
    cursor: 'pointer',
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: 'none',
    letterSpacing: 'tight',
    textDecoration: 'none',
    transition: '[background 0.2s, color 0.2s]',
    '&:hover:not([data-popup-open])': { bg: 'navy/8' },
    _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
    '&[data-popup-open]': { bg: 'navy', color: 'snow' },
  },
})

export const iconStyles = css({
  display: 'inline-block',
  fontSize: 'xs',
  transition: '[transform 0.3s]',
  '[data-popup-open] > &': { transform: 'rotate(180deg)' },
})

export const positionerStyles = css({
  zIndex: '[40]',
  width: 'var(--positioner-width)',
  height: 'var(--positioner-height)',
  transition: `[left .35s ${ease}, top .35s ${ease}, width .35s ${ease}, height .35s ${ease}]`,
  '&[data-instant]': { transition: '[none]' },
})

export const popupStyles = css({
  position: 'relative',
  width: 'var(--popup-width)',
  height: 'var(--popup-height)',
  bg: 'snow',
  borderRadius: 'card',
  boxShadow: '[0 12px 32px rgba(25,32,54,.16), 0 0 0 1px rgba(25,32,54,.08)]',
  transformOrigin: 'var(--transform-origin)',
  transition: `[opacity .2s ${ease}, transform .25s ${ease}, width .35s ${ease}, height .35s ${ease}]`,
  '&[data-starting-style], &[data-ending-style]': { opacity: 0, transform: 'translateY(-6px) scale(.98)' },
})

export const viewportStyles = css({ position: 'relative', width: '[100%]', height: '[100%]', overflow: 'hidden' })

export const contentStyles = css({
  width: 'max-content',
  transition: `[opacity .3s ${ease}, transform .32s ${ease}]`,
  '&[data-starting-style], &[data-ending-style]': { opacity: 0 },
  '&[data-starting-style][data-activation-direction="right"]': { transform: 'translateX(28px)' },
  '&[data-starting-style][data-activation-direction="left"]': { transform: 'translateX(-28px)' },
  '&[data-ending-style][data-activation-direction="right"]': { transform: 'translateX(-28px)' },
  '&[data-ending-style][data-activation-direction="left"]': { transform: 'translateX(28px)' },
})

export const contentLinkStyles = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  columnGap: '4',
  rowGap: '1',
  alignItems: 'baseline',
  px: '[14px]',
  py: '3',
  borderRadius: 'control',
  color: 'navy',
  fontFamily: 'body',
  textDecoration: 'none',
  transition: '[background 0.15s]',
  _hover: { bg: 'navy/8' },
  _focusVisible: { bg: 'navy/8', outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing' },
  '& [data-part="title"]': {
    fontSize: '[17px]',
    fontWeight: 'semibold',
    letterSpacing: 'tight',
    transition: '[font-weight 0.3s]',
  },
  '&:hover [data-part="title"], &:focus-visible [data-part="title"]': { fontWeight: 'extrabold' },
  '& [data-part="meta"]': { fontFamily: 'mono', fontSize: 'xs', opacity: 0.55 },
  '& [data-part="description"]': { gridColumn: '1 / -1', fontSize: 'sm', lineHeight: 'normal', opacity: 0.65 },
})
