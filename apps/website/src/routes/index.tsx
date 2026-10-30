import { createFileRoute } from '@tanstack/react-router'
import { HeroIntro } from '@/components/ui/hero-intro/hero-intro'
import { Image } from '@/components/ui/image/image'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Featured as FeaturedPhotos } from '../components/photography/featured'
import { seo } from '../seo/pages'

function Home() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <HeroIntro>
          Hi, I’m{' '}
          <HeroIntro.Phrase>
            <HeroIntro.Word>Patrick</HeroIntro.Word>{' '}
            <HeroIntro.Pill>
              <Image src="/photography/texel/000008510008.jpg" priority />
            </HeroIntro.Pill>
          </HeroIntro.Phrase>
          , a frontend developer making calm software in{' '}
          <HeroIntro.Phrase>
            <HeroIntro.Word>the Netherlands</HeroIntro.Word>{' '}
            <HeroIntro.Pill>
              <Image src="/photography/texel/000008500019.jpg" priority />
            </HeroIntro.Pill>
          </HeroIntro.Phrase>
          .
        </HeroIntro>
        <FeaturedPhotos />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/')({ component: Home, head: () => seo('/') })
