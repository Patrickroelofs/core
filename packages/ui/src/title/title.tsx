import { useRender } from '@base-ui/react/use-render'
import { type TitleVariants, titleStyles } from './title.styles'

export type TitleProps = Omit<useRender.ComponentProps<'h2'>, 'className'> & TitleVariants

/** Heading on the Utopia fluid type scale (steps 3–6). Renders an `<h2>`; use `render` for other levels. */
export function Title({ size, render, ...props }: TitleProps) {
  return useRender({
    render,
    defaultTagName: 'h2',
    props: { className: titleStyles({ size }), ...props },
  })
}
