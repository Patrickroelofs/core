import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Featured } from '../components/photography/featured'
import { Intro } from '../components/photography/intro'
import { seo } from '../seo/pages'

function Photography() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Featured />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/photography/')({
  component: Photography,
  head: () => seo('/photography'),
})
