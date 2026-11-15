import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { AboutSeries } from '../components/photo-series/about-series'
import { Frames } from '../components/photo-series/frames'
import { austriaFrames } from '../components/photo-series/series'
import { Title } from '../components/ui/title/title'
import { Typography } from '../components/ui/typography/typography'
import { seo } from '../seo/pages'

function Austria() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <header className="flex flex-col gap-fluid-xl">
          <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
            <Title as="h1" size="xl" weight="black">
              Austria<span className="text-accent-brand">.</span>
            </Title>
            <Typography weight="medium">
              Grossglockner and Leogang.
              <br /> July 2025 - Praktica TL2
            </Typography>
          </div>
        </header>
        <Frames slug="austria" label="Photographs of Austria" frames={austriaFrames} originals />
        <AboutSeries lead="Sixteen photographs from Austria, taken in July 2025 around the Grossglockner, the country’s highest mountain, and around Leogang.">
          The series starts at the ice of the Grossglockner: the snow-covered summit with clouds drifting past, the
          Pasterze glacier running into a pale meltwater lake, hikers crossing a rocky saddle, a turquoise mountain lake
          and waterfalls spilling over rock. Around Leogang it moves down into the forest and the valley: brown and
          white cows among blueberry bushes, villages below low clouds, gondolas passing a grey limestone ridge and a
          paraglider drifting above the spruce trees. Everything was shot on film with a Praktica TL2, a 35mm camera.
          Select a photograph to view it full screen or to download the original.
        </AboutSeries>
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/austria')({
  component: Austria,
  head: () => seo('/photography/austria'),
})
