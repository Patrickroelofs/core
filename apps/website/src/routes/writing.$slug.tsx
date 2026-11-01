import { createFileRoute, notFound } from '@tanstack/react-router'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { Body, writingComponents } from '../components/writing/body'
import { Contents } from '../components/writing/contents'
import { Header } from '../components/writing/header'
import { MoreWriting } from '../components/writing/more-writing'
import { Outro } from '../components/writing/outro'
import { posts } from '../content/content'
import { seo } from '../seo/pages'

const find = (slug: string) => posts.find((p) => p.slug === slug)

function Article() {
  const post = find(Route.useParams().slug)
  if (!post) return null
  const { Content } = post
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Header post={post} />
        <div className="mt-fluid-2xl grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <Contents headings={post.headings} />
          <Body>
            <Content components={writingComponents} />
          </Body>
        </div>
        <Outro post={post} />
        <MoreWriting current={post.slug} />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/writing/$slug')({
  loader: ({ params }) => {
    if (!find(params.slug)) throw notFound()
  },
  component: Article,
  head: ({ params }) => {
    const post = find(params.slug)
    return post ? seo(post.path, post.page) : {}
  },
})
