import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { AboutSeries } from '../components/photo-series/about-series'
import { Frames } from '../components/photo-series/frames'
import { grossglocknerFrames } from '../components/photo-series/series'
import { Title } from '../components/ui/title/title'
import { Typography } from '../components/ui/typography/typography'
import { seo } from '../seo/pages'

function Grossglockner() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <header className="flex flex-col gap-fluid-xl">
          <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
            <Title as="h1" size="xl" weight="black">
              Grossglockner<span className="text-accent-brand">.</span>
            </Title>
            <Typography weight="medium">
              Grossglockner, Austria.
              <br /> Summer 2025 - 35mm film
            </Typography>
          </div>
        </header>
        <Frames slug="grossglockner" label="Photographs of the Grossglockner" frames={grossglocknerFrames} />
        <AboutSeries lead="Ten photographs from around the Grossglockner, the highest mountain in Austria, taken in the summer of 2025.">
          The series starts at the ice and works its way down: the snow-covered summit with clouds drifting past, the
          Pasterze glacier running into a pale meltwater lake, hikers crossing a rocky saddle, a turquoise mountain lake
          and waterfalls spilling over rock. Lower down there are flies on a pink thistle, a brown and white cow among
          blueberry bushes in a spruce forest, villages in a hazy valley and gondolas passing a grey limestone ridge.
          Everything was shot on 35mm film. Select a photograph to view it full screen.
        </AboutSeries>
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/grossglockner')({
  component: Grossglockner,
  head: () => seo('/photography/grossglockner'),
})
