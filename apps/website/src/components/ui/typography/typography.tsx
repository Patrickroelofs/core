import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

const typographyStyles = cva('font-body leading-normal m-0', {
  variants: {
    size: {
      xs: 'text-step-n2',
      sm: 'text-step-n1',
      md: 'text-step-0',
      lg: 'text-step-1',
      xl: 'text-step-2',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: { size: 'md', weight: 'regular' },
})

export type TypographyVariants = NonNullable<VariantProps<typeof typographyStyles>>

export type TypographyProps = Omit<useRender.ComponentProps<'p'>, 'className'> & TypographyVariants

/** Body text on the Utopia fluid type scale (steps -2 to 2). Renders a `<p>`. */
export function Typography({ size, weight, render, ...props }: TypographyProps) {
  return useRender({
    render,
    defaultTagName: 'p',
    props: { className: typographyStyles({ size, weight }), ...props },
  })
}
