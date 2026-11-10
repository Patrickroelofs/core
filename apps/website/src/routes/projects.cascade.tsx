import { createFileRoute } from '@tanstack/react-router'
import { Build } from '../components/cascade/build'
import { Facts } from '../components/cascade/facts'
import { Gallery } from '../components/cascade/gallery'
import { Header } from '../components/cascade/header'
import { Idea } from '../components/cascade/idea'
import { Status } from '../components/cascade/status'
import { Website } from '../components/cascade/website'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { seo } from '../seo/pages'

function Cascade() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <Facts />
        <Idea />
        <Gallery />
        <Build />
        <Website />
        <Status />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/projects/cascade')({
  component: Cascade,
  head: () => seo('/projects/cascade'),
})
