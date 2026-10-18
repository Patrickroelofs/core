import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

/** Lift and heavier title only apply when the card is a link (`<a href>`). */
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
  '&:is(a[href]):hover [data-part="title"]': { fontWeight: 'black' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  _motionReduce: { transition: '[none]', '&:is(a[href]):hover': { transform: 'none' } },
})

const stripes = (line: string) => `repeating-linear-gradient(135deg, ${line} 0 1px, transparent 1px 11px)`

/** Image slot. Without an `<img>` child it renders the striped placeholder with its label. */
export const mediaStyles = cva({
  base: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontFamily: 'mono',
    fontSize: 'xs',
    px: '[22px]',
    py: '[18px]',
    '& > img': { display: 'block', width: '[100%]', height: '[100%]', objectFit: 'cover' },
    '&:has(> img)': { p: '0' },
  },
  variants: {
    ratio: {
      '16/10': { aspectRatio: '[16 / 10]' },
      '16/9': { aspectRatio: '[16 / 9]' },
      '4/3': { aspectRatio: '[4 / 3]' },
      '1/1': { aspectRatio: '[1 / 1]' },
    },
    tone: {
      light: { bg: '[#dcdcdc]', color: 'navy/60', backgroundImage: `[${stripes('rgba(25,32,54,.09)')}]` },
      dark: { bg: 'plum', color: 'snow/75', backgroundImage: `[${stripes('rgba(240,240,240,.08)')}]` },
      azure: { bg: '[#016aa8]', color: 'snow', backgroundImage: `[${stripes('rgba(240,240,240,.16)')}]` },
      coral: { bg: 'coral', color: 'navy', backgroundImage: `[${stripes('rgba(25,32,54,.14)')}]` },
    },
  },
  defaultVariants: { ratio: '16/10', tone: 'light' },
})

export const bodyStyles = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto',
  columnGap: '4',
  rowGap: '[6px]',
  alignItems: 'baseline',
  pt: '[22px]',
  px: '6',
  pb: '6',
})

export const titleStyles = css({
  m: '0',
  fontSize: '[30px]',
  fontWeight: 'extrabold',
  lineHeight: 'none',
  letterSpacing: '[-0.035em]',
  transition: `[font-weight .35s ${ease}]`,
})

export const metaStyles = css({ fontSize: 'sm', fontWeight: 'medium', opacity: 0.6 })

export const descriptionStyles = css({ m: '0', fontSize: 'md', lineHeight: 'normal', opacity: 0.75 })

export const tagWrapStyles = css({ justifySelf: 'end' })

export type CardMediaVariants = NonNullable<RecipeVariantProps<typeof mediaStyles>>
