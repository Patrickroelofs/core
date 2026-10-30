import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Frames } from '../components/photo-series/frames'
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
        <Frames />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/texel')({
  component: Texel,
  head: () => seo('/photography/texel'),
})
