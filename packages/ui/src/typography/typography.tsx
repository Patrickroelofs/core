import { useRender } from '@base-ui/react/use-render'
import { type TypographyVariants, typographyStyles } from './typography.styles'

export type TypographyProps = Omit<useRender.ComponentProps<'p'>, 'className'> & TypographyVariants

/** Body text on the Utopia fluid type scale (steps -2 to 2). Renders a `<p>`. */
export function Typography({ size, weight, render, ...props }: TypographyProps) {
  return useRender({
    render,
    defaultTagName: 'p',
    props: { className: typographyStyles({ size, weight }), ...props },
  })
}
