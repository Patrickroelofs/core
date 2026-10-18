import { useRender } from '@base-ui/react/use-render'
import { doorStyles, type FooterVariants, footerStyles } from './footer.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type FooterProps = Part<useRender.ComponentProps<'footer'>> & FooterVariants
export type FooterDoorProps = Part<useRender.ComponentProps<'div'>>

/** Footer. With `variant="split"` its `Door`s share the width and the hovered one grows. Any number of doors. */
function Root({ variant, render, ...props }: FooterProps) {
  return useRender({ render, defaultTagName: 'footer', props: { className: footerStyles({ variant }), ...props } })
}

/** One door. A `<div>` by default; pass `render={<a href="…" />}` to make it a link that grows on hover and focus. */
function Door({ render, ...props }: FooterDoorProps) {
  return useRender({ render, defaultTagName: 'div', props: { className: doorStyles, ...props } })
}

export const Footer = Object.assign(Root, { Door })
