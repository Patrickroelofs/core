import { createFileRoute } from '@tanstack/react-router'
import { DarkSlabFooter } from '../../blocks/dark-slab-footer/dark-slab-footer'
import { AllProjects } from '../../components/projects/all-projects'
import { Clients } from '../../components/projects/clients'
import { Featured } from '../../components/projects/featured'
import { Intro } from '../../components/projects/intro'
import { Rail } from '../../components/projects/rail'

function Projects() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Rail tone="coral" />
        <div className="pt-12">
          <Featured />
        </div>
        <Rail tone="navy" />
        <AllProjects />
        <Clients />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/_frontend/projects/')({
  component: Projects,
  head: () => ({ meta: [{ title: 'Work - Patrick Roelofs' }] }),
})
