import { HeroIntro } from '@/components/ui/hero-intro/hero-intro'

export function Intro() {
  return (
    <div className="mb-fluid-xl">
      <HeroIntro>
        I’m Patrick, a Dutch developer.
        <br /> I make{' '}
        <HeroIntro.Phrase>
          <HeroIntro.Word>calm software</HeroIntro.Word>{' '}
        </HeroIntro.Phrase>{' '}
        for people like you.
      </HeroIntro>
    </div>
  )
}
