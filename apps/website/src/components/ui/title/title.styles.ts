import { cva, type RecipeVariantProps } from '../../../../styled-system/css'

export const titleStyles = cva({
  base: { fontFamily: 'body', lineHeight: 'tight', letterSpacing: 'tight', margin: '0' },
  variants: {
    size: {
      xs: { fontSize: 'step.1' },
      sm: { fontSize: 'step.3' },
      md: { fontSize: 'step.4' },
      lg: { fontSize: 'step.5' },
      xl: { fontSize: 'step.6', lineHeight: 'none', letterSpacing: 'tighter' },
    },
    weight: {
      light: { fontWeight: 'extralight' },
      medium: { fontWeight: 'medium' },
      bold: { fontWeight: 'extrabold' },
      black: { fontWeight: 'black' },
    },
    // declared after size so it wins over xl's lineHeight
    leading: {
      tight: { lineHeight: 'tight' },
      snug: { lineHeight: 'snug' },
      normal: { lineHeight: 'normal' },
    },
  },
  defaultVariants: { size: 'md', weight: 'light' },
})

export type TitleVariants = NonNullable<RecipeVariantProps<typeof titleStyles>>
