import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { barStyles, doorStyles, type FooterVariants, footerStyles, titleStyles } from './footer.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type FooterProps = Part<useRender.ComponentProps<'footer'>> & FooterVariants
export type FooterDoorProps = Part<useRender.ComponentProps<'div'>>

/** Footer. With `variant="split"` its `Door`s share the width and the active one grows. Any number of doors. */
function Root({ variant, render, ...props }: FooterProps) {
  return useRender({ render, defaultTagName: 'footer', props: { className: footerStyles({ variant }), ...props } })
}

/** One door. A `<div>` by default; `render={<a href="…" />}` makes it a link that grows on hover and focus. Set `data-surface` for its colours. */
function Door({ render, ...props }: FooterDoorProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: { className: doorStyles, 'data-door': '', ...props },
  })
}

/** Big title; the arrow is added for you. */
function Title({ children, ...props }: Part<ComponentProps<'span'>>) {
  return (
    <span className={titleStyles} {...props}>
      {children}
      <span data-arrow="" aria-hidden="true">
        →
      </span>
    </span>
  )
}

/** Strip under the doors, e.g. copyright. */
function Bar(props: Part<ComponentProps<'div'>>) {
  return <div className={barStyles} {...props} />
}

export const Footer = Object.assign(Root, { Door, Title, Bar })
