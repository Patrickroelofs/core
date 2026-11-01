import { createFileRoute, notFound } from '@tanstack/react-router'
import { Facts } from '../components/case-study/facts'
import { Header } from '../components/case-study/header'
import { caseStudyComponents } from '../components/case-study/mdx'
import { NextProject } from '../components/case-study/next-project'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { projects } from '../content/content'
import { seo } from '../seo/pages'

const find = (slug: string) => projects.find((p) => p.slug === slug)

function CaseStudy() {
  const project = find(Route.useParams().slug)
  if (!project) return null
  const { Content } = project
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header project={project} />
        <Facts project={project} />
        <Content components={caseStudyComponents} />
        <NextProject current={project.slug} />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    if (!find(params.slug)) throw notFound()
  },
  component: CaseStudy,
  head: ({ params }) => {
    const project = find(params.slug)
    return project ? seo(project.path, project.page) : {}
  },
})
