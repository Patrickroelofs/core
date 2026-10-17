import type { ReactNode } from 'react'
import { Button as BaseButton } from '@base-ui/react/button'
import { buttonStyles, type ButtonVariants } from './button.styles'

export type IconButtonProps = Omit<BaseButton.Props, 'className' | 'children' | 'aria-label'> &
  Omit<ButtonVariants, 'shape'> & {
    icon: ReactNode
    /** Accessible name; required because there is no visible text. */
    label: string
  }

/** The Button recipe with `shape: 'icon'`: a round, icon-only button. */
export function IconButton({ variant = 'secondary', size, icon, label, ...props }: IconButtonProps) {
  return (
    <BaseButton className={buttonStyles({ variant, size, shape: 'icon' })} aria-label={label} title={label} {...props}>
      <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span>
    </BaseButton>
  )
}
