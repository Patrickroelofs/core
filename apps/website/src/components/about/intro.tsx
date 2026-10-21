import { HeroIntro } from '@core/ui/hero-intro/hero-intro'
import { css } from '../../../styled-system/css'

const intro = css({ mb: 'fluid.xl' })

export function Intro() {
  return (
    <div className={intro}>
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
