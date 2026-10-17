import { Button as BaseButton } from '@base-ui/react/button'
import { buttonStyles, type ButtonVariants } from './button.styles'
import type { ButtonProps } from './button'

export type LinkButtonProps = Omit<ButtonProps, 'type' | 'nativeButton' | 'variant'> &
  Pick<ButtonVariants, 'variant'> & {
    href: string
  }

/**
 * Button styling on a link. Renders an `<a>` by default; pass `render` (Base UI)
 * to swap in a router link, e.g. `render={(p) => <Link {...p} to="/x" />}`.
 */
export function LinkButton({ variant = 'link', size, icon, iconPosition = 'end', children, render = <a />, ...props }: LinkButtonProps) {
  const iconEl = icon ? <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span> : null
  return (
    <BaseButton nativeButton={false} role="link" render={render} className={buttonStyles({ variant, size })} {...props}>
      {iconPosition === 'start' && iconEl}
      {children}
      {iconPosition === 'end' && iconEl}
    </BaseButton>
  )
}
