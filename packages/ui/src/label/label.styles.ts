import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const labelStyles = cva({
  base: { fontFamily: 'body', fontWeight: 'medium', lineHeight: 'snug' },
  variants: {
    size: {
      sm: { fontSize: 'step.-2' },
      md: { fontSize: 'step.-1' },
    },
  },
  defaultVariants: { size: 'md' },
})

export type LabelVariants = NonNullable<RecipeVariantProps<typeof labelStyles>>
