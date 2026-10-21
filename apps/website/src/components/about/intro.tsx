import { HeroIntro } from '@core/ui/hero-intro/hero-intro'
import { css } from '../../../styled-system/css'

const intro = css({ mb: 'fluid.xl' })

export function Intro() {
  return (
    <div className={intro}>
      <HeroIntro>
        I’m Patrick, a Dutch designer in Lisbon. I make{' '}
        <HeroIntro.Phrase>
          <HeroIntro.Word>calm software</HeroIntro.Word>{' '}
        </HeroIntro.Phrase>{' '}
        for people doing hard jobs: nurses on night shifts, tram drivers, support teams at 2am.
      </HeroIntro>
    </div>
  )
}
