import { HeroIntro as UiHeroIntro } from '@/components/ui/hero-intro/hero-intro'
import { Image } from '@/components/ui/image/image'

export function HeroIntro() {
  return (
    // TODO: placeholder images, replace with real photos
    <UiHeroIntro>
      Hi, I’m{' '}
      <UiHeroIntro.Phrase>
        <UiHeroIntro.Word>Patrick</UiHeroIntro.Word>{' '}
        <UiHeroIntro.Pill>
          <Image label="portrait" tone="light" />
        </UiHeroIntro.Pill>
      </UiHeroIntro.Phrase>
      , a{' '}
      <UiHeroIntro.Phrase>
        <UiHeroIntro.Word>frontend web developer</UiHeroIntro.Word>{' '}
        <UiHeroIntro.Pill>
          <Image label="at work" tone="coral" />
        </UiHeroIntro.Pill>
      </UiHeroIntro.Phrase>{' '}
      based in
      <br />
      <UiHeroIntro.Phrase>
        <UiHeroIntro.Word>the Netherlands </UiHeroIntro.Word>{' '}
        <UiHeroIntro.Pill>
          <Image label="the city" tone="azure" />
        </UiHeroIntro.Pill>
      </UiHeroIntro.Phrase>
      .
    </UiHeroIntro>
  )
}
