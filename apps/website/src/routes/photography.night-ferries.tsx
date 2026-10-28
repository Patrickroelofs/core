import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Details } from '../components/photo-series/details'
import { Frames } from '../components/photo-series/frames'
import { Header } from '../components/photo-series/header'
import { MoreSeries } from '../components/photo-series/more-series'
import { Story } from '../components/photo-series/story'

function PhotoSeries() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <Frames />
        <Story />
        <Details />
        <MoreSeries />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/night-ferries')({
  component: PhotoSeries,
  head: () => ({ meta: [{ title: 'Night ferries - Patrick Roelofs' }] }),
})
