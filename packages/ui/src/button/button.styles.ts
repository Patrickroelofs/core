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
    _focusVisible: { outline: '2px solid', outlineColor: 'primary', outlineOffset: '2px' },
  },
  variants: {
    variant: {
      solid: {
        bg: 'primary',
        color: 'onPrimary',
        borderColor: 'primary',
        _hover: { bg: 'primaryHover' },
      },
      outline: {
        bg: 'surface',
        color: 'text',
        borderColor: 'border',
        _hover: { borderColor: 'primary' },
      },
    },
  },
  defaultVariants: { variant: 'solid' },
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>
