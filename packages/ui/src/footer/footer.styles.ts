import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'

/** `split`: doors side by side (stacked below `md`); the hovered or focused door grows. */
export const footerStyles = cva({
  base: { display: 'flex', flexDirection: 'column', minWidth: '0', fontFamily: 'body', md: { flexDirection: 'row' } },
  variants: { variant: { split: {} } },
  defaultVariants: { variant: 'split' },
})

export const doorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: '2',
  flex: '[1 1 0]',
  minWidth: '0',
  p: '8',
  bg: 'bg.canvas',
  color: 'fg.default',
  textDecoration: 'none',
  transition: `[flex-grow .5s ${ease}]`,
  '&:is(a[href]):is(:hover, :focus-visible)': { md: { flexGrow: 2 } },
  '& :is(h1, h2, h3, h4, h5, h6)': {
    fontSize: '[30px]',
    fontWeight: 'extrabold',
    lineHeight: 'none',
    letterSpacing: '[-0.035em]',
  },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[-2px]' },
  _motionReduce: { transition: '[none]' },
})

export type FooterVariants = NonNullable<RecipeVariantProps<typeof footerStyles>>
