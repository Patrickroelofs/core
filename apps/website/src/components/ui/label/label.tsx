import { useRender } from '@base-ui/react/use-render'
import { type LabelVariants, labelStyles } from './label.styles'

export type LabelProps = Omit<useRender.ComponentProps<'label'>, 'className'> & LabelVariants

/** Form/UI label on the Utopia fluid type scale (steps -2 and -1). Renders a `<label>`. */
export function Label({ size, render, ...props }: LabelProps) {
  return useRender({
    render,
    defaultTagName: 'label',
    props: { className: labelStyles({ size }), ...props },
  })
}
