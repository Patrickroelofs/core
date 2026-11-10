import { createFileRoute } from '@tanstack/react-router'
import { Build } from '../components/cascade/build'
import { Facts } from '../components/cascade/facts'
import { Gallery } from '../components/cascade/gallery'
import { Header } from '../components/cascade/header'
import { Idea } from '../components/cascade/idea'
import { NextProject } from '../components/cascade/next-project'
import { Status } from '../components/cascade/status'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { seo } from '../seo/pages'

function Cascade() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <Facts />
        <Idea />
        <Build />
        <Gallery />
        <Status />
        <NextProject />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/projects/cascade')({
  component: Cascade,
  head: () => seo('/projects/cascade'),
})
