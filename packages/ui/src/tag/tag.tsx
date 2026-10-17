import { useRender } from '@base-ui/react/use-render'
import { type TagVariants, tagStyles } from './tag.styles'

export type TagProps = Omit<useRender.ComponentProps<'span'>, 'className'> & TagVariants

/** Static pill label for roles, clients and tools. */
export function Tag({ tone, appearance, size, render, ...props }: TagProps) {
  return useRender({
    render,
    defaultTagName: 'span',
    props: { className: tagStyles({ tone, appearance, size }), ...props },
  })
}
