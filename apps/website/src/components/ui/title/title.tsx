import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

const titleStyles = cva('font-body m-0', {
  variants: {
    size: {
      xs: 'text-step-1 leading-tight tracking-tight',
      sm: 'text-step-3 leading-tight tracking-tight',
      md: 'text-step-4 leading-tight tracking-tight',
      lg: 'text-step-5 leading-tight tracking-tight',
      xl: 'text-step-6 leading-none tracking-tighter',
    },
    weight: {
      light: 'font-extralight',
      medium: 'font-medium',
      bold: 'font-extrabold',
      black: 'font-black',
    },
    // important: has to win over xl's line height
    leading: {
      tight: 'leading-tight!',
      snug: 'leading-snug!',
      normal: 'leading-normal!',
    },
  },
  defaultVariants: { size: 'md', weight: 'light' },
})

export type TitleVariants = NonNullable<VariantProps<typeof titleStyles>>

export type TitleProps = Omit<useRender.ComponentProps<'h2'>, 'className'> &
  TitleVariants & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' }

/** Heading on the Utopia fluid type scale. `as` picks the element, `size` and `weight` the look. */
export function Title({ as = 'h2', size, weight, leading, render, ...props }: TitleProps) {
  return useRender({
    render,
    defaultTagName: as,
    props: { className: titleStyles({ size, weight, leading }), ...props },
  })
}
