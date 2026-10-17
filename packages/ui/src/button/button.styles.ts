import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const buttonStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flex: 'none',
    fontFamily: 'body',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    borderRadius: 'pill',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
    _disabled: { opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' },
    _focusVisible: { outline: '2px solid', outlineColor: 'focusRing', outlineOffset: '2px' },
  },
  variants: {
    variant: {
      primary: {
        bg: 'action.primary',
        color: 'action.onPrimary',
        borderColor: 'transparent',
        _hover: { bg: 'accent.brand', color: 'fg.default' },
      },
      accent: {
        bg: 'accent.brand',
        color: 'fg.default',
        borderColor: 'transparent',
        _hover: { bg: 'action.primary', color: 'action.onPrimary' },
      },
      secondary: {
        bg: 'transparent',
        color: 'fg.default',
        borderColor: 'action.primary',
        _hover: { bg: 'action.primary', color: 'action.onPrimary' },
      },
      inverse: { bg: 'bg.canvas', color: 'fg.default', borderColor: 'transparent', _hover: { bg: 'accent.brand' } },
      ghost: {
        bg: 'transparent',
        color: 'currentColor',
        borderColor: 'transparent',
        _hover: { bg: 'action.primary/8' },
      },
      // ghost + underline, for links
      link: {
        bg: 'transparent',
        color: 'currentColor',
        borderColor: 'transparent',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        _hover: { bg: 'action.primary/8' },
      },
    },
    size: {
      sm: { fontSize: '13px' },
      md: { fontSize: '15px' },
      lg: { fontSize: '18px' },
    },
    shape: {
      default: {},
      icon: { p: 0, borderRadius: 'full' },
    },
  },
  compoundVariants: [
    { shape: 'default', size: 'sm', css: { px: '14px', py: '8px' } },
    { shape: 'default', size: 'md', css: { px: '20px', py: '12px' } },
    { shape: 'default', size: 'lg', css: { px: '26px', py: '16px' } },
    { shape: 'icon', size: 'sm', css: { w: '32px', h: '32px' } },
    { shape: 'icon', size: 'md', css: { w: '44px', h: '44px' } },
    { shape: 'icon', size: 'lg', css: { w: '56px', h: '56px' } },
  ],
  defaultVariants: { variant: 'primary', size: 'md', shape: 'default' },
})

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof buttonStyles>>
