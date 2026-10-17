import { useRender } from '@base-ui/react/use-render'
import { type TitleVariants, titleStyles } from './title.styles'

export type TitleProps = Omit<useRender.ComponentProps<'h2'>, 'className'> &
  TitleVariants & { as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' }

/** Heading on the Utopia fluid type scale. `as` picks the element, `size` the look. */
export function Title({ as = 'h2', size, render, ...props }: TitleProps) {
  return useRender({
    render,
    defaultTagName: as,
    props: { className: titleStyles({ size }), ...props },
  })
}
