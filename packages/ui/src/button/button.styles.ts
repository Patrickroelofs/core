import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const buttonStyles = cva({
  base: {
    fontFamily: 'body',
    px: 'control',
    py: '8px',
    borderRadius: 'control',
    cursor: 'pointer',
    borderWidth: '1px',
    borderStyle: 'solid',
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
    _focusVisible: { outline: '2px solid', outlineColor: 'focusRing', outlineOffset: '2px' },
  },
  variants: {
    variant: {
      solid: {
        bg: 'action.primary',
        color: 'action.onPrimary',
        borderColor: 'action.primary',
        _hover: { bg: 'action.primaryHover', borderColor: 'action.primaryHover' },
      },
      outline: {
        bg: 'bg.surface',
        color: 'fg.default',
        borderColor: 'border.default',
        _hover: { borderColor: 'action.primary' },
      },
    },
  },
  defaultVariants: { variant: 'solid' },
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>
