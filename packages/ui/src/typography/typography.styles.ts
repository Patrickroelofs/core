import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const typographyStyles = cva({
  base: { fontFamily: 'body', fontWeight: 'regular', lineHeight: 'normal', margin: '0' },
  variants: {
    size: {
      '-2': { fontSize: 'step.-2' },
      '-1': { fontSize: 'step.-1' },
      '0': { fontSize: 'step.0' },
      '1': { fontSize: 'step.1' },
      '2': { fontSize: 'step.2' },
    },
  },
  defaultVariants: { size: '0' },
})

export type TypographyVariants = NonNullable<RecipeVariantProps<typeof typographyStyles>>
