import type { ComponentProps } from 'react'
import { heroIntroStyles, phraseStyles } from './hero-intro.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type HeroIntroProps = Part<ComponentProps<'h1'>>

/** Intro sentence as a heading. Plain text plus `Phrase`s. */
function Root(props: HeroIntroProps) {
  return <h1 className={heroIntroStyles} {...props} />
}

/** A `Word` and its `Pill`, hovered or focused together. */
function Phrase(props: Part<ComponentProps<'span'>>) {
  return <span className={phraseStyles} data-phrase="" {...props} />
}

/** The thin word that turns black when its phrase is active. */
function Word(props: Part<ComponentProps<'span'>>) {
  return <span data-word="" {...props} />
}

/** Inline photo pill. Put one `Image` inside. Decorative: hidden from assistive tech. */
function Pill(props: Part<ComponentProps<'span'>>) {
  return <span data-pill="" aria-hidden="true" {...props} />
}

export const HeroIntro = Object.assign(Root, { Phrase, Word, Pill })
