import type { MDXContent } from 'mdx/types'
import type { Page } from '@/seo/pages'
import type { TocHeading } from './remark-headings'

export type ImageRef = { alt: string; src?: string; caption?: string }

type Module<T> = { default: MDXContent; frontmatter: T; headings: TocHeading[] }

type PostFrontmatter = {
  title: string
  emphasis?: string
  description: string
  kicker?: string
  date: string
  minutes: number
  tags: string[]
  cover?: ImageRef
  outro?: string
}

type ProjectFrontmatter = {
  title: string
  emphasis?: string
  description: string
  category: string
  year: string
  role: string
  featured?: boolean
  order?: number
  cover: ImageRef
  facts?: { label: string; value: string }[]
  intro?: string
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function entries<T>(modules: Record<string, Module<T>>, section: string) {
  return Object.entries(modules).map(([file, { default: Content, frontmatter, headings }]) => {
    const slug = file.replace(/^.*\/|\.mdx$/g, '')
    return { ...frontmatter, slug, path: `/${section}/${slug}`, Content, headings }
  })
}

export const posts = entries(import.meta.glob<Module<PostFrontmatter>>('./writing/*.mdx', { eager: true }), 'writing')
  .map((post) => {
    const [year, month, day] = post.date.split('-')
    const dayMonth = `${day} ${months[Number(month) - 1]}`
    const page: Page = {
      title: post.title,
      description: post.description,
      kicker: post.kicker,
      meta: `${dayMonth} ${year} · ${post.minutes} min read`,
      article: true,
    }
    return { ...post, year, day: dayMonth, month: `${months[Number(month) - 1]} ${year}`, page }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export type Post = (typeof posts)[number]

export const projects = entries(
  import.meta.glob<Module<ProjectFrontmatter>>('./projects/*.mdx', { eager: true }),
  'projects',
)
  .map((project) => {
    const page: Page = {
      title: project.title,
      description: project.description,
      kicker: 'Case study',
      meta: `${project.category} · ${project.year}`,
    }
    return { ...project, page }
  })
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || b.year.localeCompare(a.year))

export type Project = (typeof projects)[number]

export const contentPages: Record<string, Page> = Object.fromEntries(
  [...posts, ...projects].map((entry) => [entry.path, entry.page]),
)
