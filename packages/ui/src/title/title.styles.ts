import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const titleStyles = cva({
  base: { fontFamily: 'body', fontWeight: 'extralight', lineHeight: 'tight', letterSpacing: 'tight', margin: '0' },
  variants: {
    size: {
      '3': { fontSize: 'step.3' },
      '4': { fontSize: 'step.4' },
      '5': { fontSize: 'step.5' },
      '6': { fontSize: 'step.6', lineHeight: 'none', letterSpacing: 'tighter' },
    },
  },
  defaultVariants: { size: '4' },
})

export type TitleVariants = NonNullable<RecipeVariantProps<typeof titleStyles>>
