import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

const labelStyles = cva('font-body font-medium leading-snug', {
  variants: {
    size: {
      xs: 'text-step-n2',
      sm: 'text-step-n1',
    },
  },
  defaultVariants: { size: 'sm' },
})

export type LabelVariants = NonNullable<VariantProps<typeof labelStyles>>

export type LabelProps = Omit<useRender.ComponentProps<'label'>, 'className'> & LabelVariants

/** Form/UI label on the Utopia fluid type scale (steps -2 and -1). Renders a `<label>`. */
export function Label({ size, render, ...props }: LabelProps) {
  return useRender({
    render,
    defaultTagName: 'label',
    props: { className: labelStyles({ size }), ...props },
  })
}
