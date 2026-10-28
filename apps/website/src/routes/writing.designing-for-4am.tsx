import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Body } from '../components/writing/body'
import { Contents } from '../components/writing/contents'
import { Header } from '../components/writing/header'
import { MoreWriting } from '../components/writing/more-writing'
import { Outro } from '../components/writing/outro'

function Article() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <div className="mt-fluid-2xl grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <Contents />
          <Body />
        </div>
        <Outro />
        <MoreWriting />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/writing/designing-for-4am')({
  component: Article,
  head: () => ({ meta: [{ title: 'Designing for 4am - Patrick Roelofs' }] }),
})
