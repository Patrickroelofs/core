import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../../blocks/dark-slab-footer/dark-slab-footer'
import { Facts } from '../../components/shiftboard-handover/facts'
import { Gallery } from '../../components/shiftboard-handover/gallery'
import { Header } from '../../components/shiftboard-handover/header'
import { NextProject } from '../../components/shiftboard-handover/next-project'
import { Outcome } from '../../components/shiftboard-handover/outcome'
import { Problem } from '../../components/shiftboard-handover/problem'
import { Process } from '../../components/shiftboard-handover/process'

function Shiftboard() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header />
        <Facts />
        <Problem />
        <Process />
        <Gallery />
        <Outcome />
        <NextProject />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/_frontend/projects/shiftboard-handover')({
  component: Shiftboard,
  head: () => ({ meta: [{ title: 'Shiftboard Handover - Patrick Roelofs' }] }),
})
