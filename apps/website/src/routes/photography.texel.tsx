import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { AboutSeries } from '../components/photo-series/about-series'
import { Frames } from '../components/photo-series/frames'
import { texelFrames } from '../components/photo-series/series'
import { Title } from '../components/ui/title/title'
import { Typography } from '../components/ui/typography/typography'
import { seo } from '../seo/pages'

function Texel() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <header className="flex flex-col gap-fluid-xl">
          <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
            <Title as="h1" size="xl" weight="black">
              Texel<span className="text-accent-brand">.</span>
            </Title>
            <Typography weight="medium">
              Texel, the Netherlands.
              <br /> November 2024 - Praktica TL2
            </Typography>
          </div>
        </header>
        <Frames slug="texel" label="Photographs of Texel" frames={texelFrames} originals />
        <AboutSeries lead="Fifteen photographs from Texel, the largest of the Dutch Wadden Islands, taken in November 2024.">
          The series follows the island’s coast: sunlit dunes and scrub beneath a cloudy sky, waves rolling onto the
          beach, gulls perched on a whale sculpture, seals in green water and a red lighthouse rising above the tall
          grass. Everything was shot on film with a Praktica TL2, a 35mm camera. Select a photograph to view it full
          screen or to download the original.
        </AboutSeries>
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/texel')({
  component: Texel,
  head: () => seo('/photography/texel'),
})
