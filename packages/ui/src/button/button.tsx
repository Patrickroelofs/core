import { Button as BaseButton } from '@base-ui/react/button'
import { buttonStyles, type ButtonVariants } from './button.styles'

export type ButtonProps = Omit<BaseButton.Props, 'className'> & ButtonVariants

export function Button({ variant, ...props }: ButtonProps) {
  return <BaseButton className={buttonStyles({ variant })} {...props} />
}
