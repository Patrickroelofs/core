import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../../blocks/dark-slab-footer/dark-slab-footer'
import { Body } from '../../components/writing/frontend-architecture/body'
import { Contents } from '../../components/writing/frontend-architecture/contents'
import { Header } from '../../components/writing/frontend-architecture/header'
import { MoreWriting } from '../../components/writing/more-writing'

function Article() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <div className="mt-fluid-2xl grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <Contents />
          <Body />
        </div>
        <MoreWriting />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/_frontend/writing/frontend-architecture-for-the-agentic-future')({
  component: Article,
  head: () => ({ meta: [{ title: 'Frontend architecture for the agentic future - Patrick Roelofs' }] }),
})
