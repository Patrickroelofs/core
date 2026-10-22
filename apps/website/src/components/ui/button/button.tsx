import { Button as BaseButton } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

export const buttonStyles = cva(
  [
    'inline-flex flex-none items-center justify-center gap-2',
    'font-semibold leading-none tracking-[-0.01em] whitespace-nowrap',
    'border-[1.5px] cursor-pointer transition-[background,color,border-color]',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
    'data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-40',
    'focus-ring',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-action-primary text-action-on-primary border-transparent hover:bg-accent-brand hover:text-fg-default',
        accent:
          'bg-accent-brand text-fg-default border-transparent hover:bg-action-primary hover:text-action-on-primary',
        secondary: 'text-fg-default border-action-primary hover:bg-action-primary hover:text-action-on-primary',
        inverse: 'bg-bg-canvas text-fg-default border-transparent hover:bg-accent-brand',
        ghost: 'border-transparent hover:bg-action-primary/8',
        // ghost + underline, for links
        link: 'border-transparent underline underline-offset-4 hover:bg-action-primary/8',
      },
      size: {
        sm: 'text-sm',
        md: 'text-[15px]',
        lg: 'text-[18px]',
      },
      shape: {
        default: 'rounded-pill',
        icon: 'rounded-full',
      },
    },
    compoundVariants: [
      { shape: 'default', size: 'sm', class: 'px-3.5 py-2' },
      { shape: 'default', size: 'md', class: 'px-5 py-3' },
      { shape: 'default', size: 'lg', class: 'px-6.5 py-4' },
      { shape: 'icon', size: 'sm', class: 'size-8' },
      { shape: 'icon', size: 'md', class: 'size-11' },
      { shape: 'icon', size: 'lg', class: 'size-14' },
    ],
    defaultVariants: { variant: 'primary', size: 'md', shape: 'default' },
  },
)

export type ButtonVariants = NonNullable<VariantProps<typeof buttonStyles>>

export type ButtonProps = Omit<BaseButton.Props, 'className'> &
  Omit<ButtonVariants, 'shape'> & {
    /** Decorative icon rendered next to the label. */
    icon?: ReactNode
    iconPosition?: 'start' | 'end'
  }

export function Button({ variant, size, icon, iconPosition = 'end', children, ...props }: ButtonProps) {
  const iconEl = icon ? (
    <span aria-hidden="true" style={{ display: 'inline-flex' }}>
      {icon}
    </span>
  ) : null
  return (
    <BaseButton className={buttonStyles({ variant, size })} {...props}>
      {iconPosition === 'start' && iconEl}
      {children}
      {iconPosition === 'end' && iconEl}
    </BaseButton>
  )
}
