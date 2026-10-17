import type { ReactNode } from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import { buttonStyles, type ButtonVariants } from './button.styles'

export type ButtonProps = Omit<BaseButton.Props, 'className'> &
  Omit<ButtonVariants, 'shape'> & {
    /** Decorative icon rendered next to the label. */
    icon?: ReactNode
    iconPosition?: 'start' | 'end'
  }

export function Button({ variant, size, icon, iconPosition = 'end', children, ...props }: ButtonProps) {
  const iconEl = icon ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span> : null
  return (
    <BaseButton className={buttonStyles({ variant, size })} {...props}>
      {iconPosition === 'start' && iconEl}
      {children}
      {iconPosition === 'end' && iconEl}
    </BaseButton>
  )
}
