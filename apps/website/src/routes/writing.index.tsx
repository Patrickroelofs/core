import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Rail } from '../components/projects/rail'
import { Archive } from '../components/writing/archive'
import { Intro } from '../components/writing/intro'
import { Latest } from '../components/writing/latest'
import { seo } from '../seo/pages'

function Writing() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Rail tone="coral" />
        <div className="pt-12">
          <Latest />
        </div>
        <Rail tone="navy" />
        <div className="pt-12">
          <Archive />
        </div>
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/writing/')({
  component: Writing,
  head: () => seo('/writing'),
})
