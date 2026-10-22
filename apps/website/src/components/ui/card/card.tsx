import { useRender } from '@base-ui/react/use-render'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

/** Tone panel that wipes up over the media on link-card hover/focus, CTA bottom-left, arrow bottom-right. */
const revealStyles = cva(
  [
    'absolute inset-0 flex items-end justify-between px-6 py-5.5 [clip-path:inset(100%_0_0_0)]',
    'transition-[clip-path] duration-[.35s] ease-soft link-active:[clip-path:inset(0_0_0_0)] motion-reduce:transition-none',
  ],
  {
    variants: {
      tone: {
        coral: 'bg-coral text-navy',
        azure: 'bg-azure-deep text-snow',
        plum: 'bg-plum text-snow',
        navy: 'bg-navy text-snow',
      },
    },
    defaultVariants: { tone: 'coral' },
  },
)

export type RevealVariants = NonNullable<VariantProps<typeof revealStyles>>

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type CardProps = Part<useRender.ComponentProps<'div'>>

/** Root surface. A `<div>` by default; pass `render={<a href="…" />}` to make it a lifting link card. */
function Root({ render, ...props }: CardProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: {
      className: cx(
        'flex flex-col min-w-0 overflow-hidden rounded-card font-body text-navy no-underline',
        'bg-gray-300 data-surface:bg-bg-canvas data-surface:text-fg-default',
        'transition-[translate] duration-[.35s] ease-soft link:cursor-pointer link:hover:-translate-y-1',
        'headings:text-title headings:font-extrabold headings:leading-none headings:tracking-[-0.035em]',
        'headings:[transition:font-weight_.35s_var(--ease-soft)] link:hover:headings:font-black',
        'focus-ring',
        'motion-reduce:transition-none motion-reduce:link:hover:translate-y-0 motion-reduce:headings:transition-none',
      ),
      ...props,
    },
  })
}

function Body(props: Part<ComponentProps<'div'>>) {
  return <div className="flex flex-col gap-2 pt-5.5 px-6 pb-6" {...props} />
}

/** Row for `Tag`s and a trailing `<time>` (e.g. `<Label render={<time dateTime="2024" />}>`). */
function Footer(props: Part<ComponentProps<'div'>>) {
  return <div className="flex flex-wrap items-center gap-2 mt-2 [&>time]:ms-auto [&>time]:opacity-60" {...props} />
}

/** Wraps the `Image` so a `Reveal` can sit on top of it. */
function Media(props: Part<ComponentProps<'div'>>) {
  return <div className="relative overflow-hidden" {...props} />
}

export type CardRevealProps = Part<Omit<ComponentProps<'div'>, 'children'>> &
  RevealVariants & {
    /** CTA text, e.g. "View case study". */
    children: string
  }

/** Tone panel inside `Card.Media` that wipes up on hover/focus of a link card, with the CTA and a ↗. Decorative, hidden from assistive tech. */
function Reveal({ tone, children, ...props }: CardRevealProps) {
  return (
    <div className={revealStyles({ tone })} aria-hidden="true" {...props}>
      <span
        className={cx(
          'translate-y-3 text-lg font-bold tracking-[-0.02em] opacity-0',
          '[transition:translate_.35s_var(--ease-soft)_80ms,opacity_.35s_var(--ease-soft)_80ms]',
          'link-active:translate-y-0 link-active:opacity-100 motion-reduce:transition-none',
        )}
      >
        {children}
      </span>
      <span
        className={cx(
          'translate-x-[-10px] translate-y-[10px] text-[28px] font-light opacity-0',
          '[transition:translate_.35s_var(--ease-soft)_140ms,opacity_.35s_var(--ease-soft)_140ms]',
          'link-active:translate-x-0 link-active:translate-y-0 link-active:opacity-100 motion-reduce:transition-none',
        )}
      >
        ↗
      </span>
    </div>
  )
}

export const Card = Object.assign(Root, { Media, Reveal, Body, Footer })
