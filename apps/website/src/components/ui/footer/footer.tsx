import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { barStyles, footerStyles, meetStyles } from './footer.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type FooterProps = Part<useRender.ComponentProps<'footer'>>
export type FooterMeetProps = Part<useRender.ComponentProps<'a'>> & {
  /** First name, set thin. */
  first: string
  /** Surname, set black. */
  last: string
  /** Shown inside the pill on hover. Also the link target (`mailto:`) unless `href` is set. */
  email: string
}

/** Footer: a `Meet` link plus an optional `Bar`. */
function Root({ render, ...props }: FooterProps) {
  return useRender({ render, defaultTagName: 'footer', props: { className: footerStyles, ...props } })
}

/** The name as an email link: first name and surname sit apart; hover or focus pulls them together around the email pill. */
function Meet({ first, last, email, render, ...props }: FooterMeetProps) {
  return useRender({
    render,
    defaultTagName: 'a',
    props: {
      className: meetStyles,
      href: `mailto:${email}`,
      'aria-label': `${first} ${last}, email ${email}`,
      ...props,
      children: (
        <>
          <span data-first="" aria-hidden="true">
            {first}
          </span>
          <span data-pill="" aria-hidden="true">
            <span data-email="">{email}</span>
          </span>
          <span data-last="" aria-hidden="true">
            {last}
            <span data-dot="">.</span>
          </span>
        </>
      ),
    },
  })
}

/** Strip under the name, e.g. copyright. */
function Bar(props: Part<ComponentProps<'div'>>) {
  return <div className={barStyles} {...props} />
}

export const Footer = Object.assign(Root, { Meet, Bar })
