import { useRender } from '@base-ui/react/use-render'
import { cx } from 'class-variance-authority'
import type { ComponentProps } from 'react'

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
  return useRender({
    render,
    defaultTagName: 'footer',
    props: {
      className:
        'flex flex-col gap-fluid-2xl min-w-0 @container rounded-card font-body bg-gray-300 text-fg-default px-8 pt-9 pb-5',
      ...props,
    },
  })
}

/** The name as an email link: first name and surname sit apart; hover or focus pulls them together around the email pill. */
function Meet({ first, last, email, render, ...props }: FooterMeetProps) {
  return useRender({
    render,
    defaultTagName: 'a',
    props: {
      className: cx(
        'group/meet flex items-center justify-center text-fg-default no-underline whitespace-nowrap outline-none',
        'text-[9.6cqw] leading-[0.9] tracking-tighter focus-visible:underline',
      ),
      href: `mailto:${email}`,
      'aria-label': `${first} ${last}, email ${email}`,
      ...props,
      children: (
        <>
          <span
            className={cx(
              'font-extralight [transition:font-weight_.6s_var(--ease-soft)]',
              'group-[:is(:hover,:focus-visible)]/meet:font-medium motion-reduce:transition-none',
            )}
            aria-hidden="true"
          >
            {first}
          </span>
          <span
            className={cx(
              'mx-[0.12em] inline-flex h-[0.8em] w-[1.6em] items-center justify-center overflow-hidden rounded-full',
              'border-[0.02em] border-fg-default/25 [transition:width_.7s_var(--ease-pop),background-color_.4s,border-color_.4s]',
              'group-[:is(:hover,:focus-visible)]/meet:w-[3.4em] group-[:is(:hover,:focus-visible)]/meet:border-transparent',
              'group-[:is(:hover,:focus-visible)]/meet:bg-coral motion-reduce:transition-none',
            )}
            aria-hidden="true"
          >
            <span
              className={cx(
                'text-[0.16em] font-bold tracking-tight text-snow opacity-0 transition-opacity duration-300',
                'group-[:is(:hover,:focus-visible)]/meet:opacity-100 group-[:is(:hover,:focus-visible)]/meet:delay-[.25s]',
                'motion-reduce:transition-none',
              )}
            >
              {email}
            </span>
          </span>
          <span className="font-black" aria-hidden="true">
            {last}
            <span className="text-coral">.</span>
          </span>
        </>
      ),
    },
  })
}

/** Strip under the name, e.g. copyright. */
function Bar(props: Part<ComponentProps<'div'>>) {
  return <div className="flex justify-between flex-wrap gap-3 pt-4 border-t border-fg-default/20" {...props} />
}

export const Footer = Object.assign(Root, { Meet, Bar })
