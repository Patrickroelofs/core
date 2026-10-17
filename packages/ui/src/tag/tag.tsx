import { Toggle } from '@base-ui/react/toggle'
import type { ComponentPropsWithoutRef } from 'react'
import { type TagVariants, tagStyles } from './tag.styles'

type Look = Pick<TagVariants, 'tone' | 'appearance' | 'size'>

export type StaticTagProps = Omit<ComponentPropsWithoutRef<'span'>, 'className'> &
  Look & {
    pressed?: never
    defaultPressed?: never
    onPressedChange?: never
    onClick?: never
  }

export type ToggleTagProps = Omit<Toggle.Props, 'className'> & Look

export type TagProps = StaticTagProps | ToggleTagProps

function isToggle(props: TagProps): props is ToggleTagProps {
  return (
    props.pressed !== undefined ||
    props.defaultPressed !== undefined ||
    props.onPressedChange !== undefined ||
    props.onClick !== undefined
  )
}

/** Pill label. Pass `pressed`, `defaultPressed`, `onPressedChange` or `onClick` to make it a toggleable filter chip. */
export function Tag(props: TagProps) {
  if (isToggle(props)) {
    const { tone, appearance, size, ...rest } = props
    return <Toggle className={tagStyles({ tone, appearance, size, interactive: true })} data-interactive="" {...rest} />
  }
  const { tone, appearance, size, ...rest } = props
  return <span className={tagStyles({ tone, appearance, size })} {...rest} />
}
