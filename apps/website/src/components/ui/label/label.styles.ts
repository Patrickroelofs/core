import { cva, type RecipeVariantProps } from '../../../../styled-system/css'

export const labelStyles = cva({
  base: { fontFamily: 'body', fontWeight: 'medium', lineHeight: 'snug' },
  variants: {
    size: {
      xs: { fontSize: 'step.-2' },
      sm: { fontSize: 'step.-1' },
    },
  },
  defaultVariants: { size: 'sm' },
})

export type LabelVariants = NonNullable<RecipeVariantProps<typeof labelStyles>>
