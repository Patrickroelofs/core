import { cva, type RecipeVariantProps } from '../../../../styled-system/css'

export const typographyStyles = cva({
  base: { fontFamily: 'body', fontWeight: 'regular', lineHeight: 'normal', margin: '0' },
  variants: {
    size: {
      xs: { fontSize: 'step.-2' },
      sm: { fontSize: 'step.-1' },
      md: { fontSize: 'step.0' },
      lg: { fontSize: 'step.1' },
      xl: { fontSize: 'step.2' },
    },
    weight: {
      regular: { fontWeight: 'regular' },
      medium: { fontWeight: 'medium' },
      bold: { fontWeight: 'bold' },
    },
  },
  defaultVariants: { size: 'md' },
})

export type TypographyVariants = NonNullable<RecipeVariantProps<typeof typographyStyles>>
