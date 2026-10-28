import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { AllSeries } from '../components/photography/all-series'
import { Featured } from '../components/photography/featured'
import { Intro } from '../components/photography/intro'

function Photography() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Featured />
        <AllSeries />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/')({
  component: Photography,
  head: () => ({ meta: [{ title: 'Photography - Patrick Roelofs' }] }),
})
