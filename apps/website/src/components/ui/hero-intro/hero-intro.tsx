import { cx } from 'class-variance-authority'
import type { ComponentProps } from 'react'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type HeroIntroProps = Part<ComponentProps<'h1'>>

/** Intro sentence as a heading. Plain text plus `Phrase`s. */
function Root(props: HeroIntroProps) {
  return (
    <h1
      className="m-0 font-body text-[clamp(40px,6.4vw,96px)] font-light leading-[1.08] tracking-tighter text-pretty"
      {...props}
    />
  )
}

/** A `Word` and its `Pill`, hovered or focused together. */
function Phrase(props: Part<ComponentProps<'span'>>) {
  return <span className="group/phrase inline" {...props} />
}

/** The thin word that turns black when its phrase is active. */
function Word(props: Part<ComponentProps<'span'>>) {
  return (
    <span
      className={cx(
        'cursor-pointer [transition:font-weight_.4s_var(--ease-soft),letter-spacing_.4s_var(--ease-soft)]',
        'group-[:is(:hover,:focus-within)]/phrase:font-black group-[:is(:hover,:focus-within)]/phrase:tracking-tight',
        'motion-reduce:transition-none',
      )}
      {...props}
    />
  )
}

/**
 * Inline photo pill. Put one `Image` inside. Decorative: hidden from assistive tech.
 * The pill only reserves space (1.7em x 0.82em); when its phrase is active the image grows to 141% x 293% and overflows without moving the text.
 */
function Pill(props: Part<ComponentProps<'span'>>) {
  return (
    <span
      className={cx(
        'relative mx-[0.08em] inline-block h-[0.82em] w-[1.7em] cursor-pointer align-[-0.08em]',
        '*:absolute *:top-1/2 *:left-1/2 *:size-full *:-translate-1/2 *:rounded-full *:whitespace-nowrap',
        '*:aspect-auto! *:text-[10px]!',
        '*:[transition:width_.5s_var(--ease-pop),height_.5s_var(--ease-pop)]',
        'group-[:is(:hover,:focus-within)]/phrase:*:z-1 group-[:is(:hover,:focus-within)]/phrase:*:h-[293%]',
        'group-[:is(:hover,:focus-within)]/phrase:*:w-[141%]',
        'motion-reduce:*:transition-none',
      )}
      aria-hidden="true"
      {...props}
    />
  )
}

export const HeroIntro = Object.assign(Root, { Phrase, Word, Pill })
