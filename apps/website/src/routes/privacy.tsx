import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Intro } from '../components/privacy/intro'
import { Policy } from '../components/privacy/policy'
import { seo } from '../seo/pages'

function Privacy() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Policy />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/privacy')({ component: Privacy, head: () => seo('/privacy') })
