export const siteName = 'Patrick Roelofs'
export const siteUrl = 'https://patrickroelofs.com'

export type Page = {
  title: string
  description?: string
  kicker?: string
  meta?: string
  article?: boolean
}

export const pages = {
  '/': { title: siteName, description: 'Dutch developer making calm software.' },
  '/about': { title: 'About' },
  '/projects': { title: 'Work' },
  '/projects/patrickroelofs': {
    title: 'Shiftboard Handover',
    description: 'Personal website and portfolio.',
    kicker: 'Case study',
    meta: 'Personal · 2026',
  },
  '/writing': { title: 'Writing' },
  '/writing/designing-for-4am': {
    title: 'Designing for 4am',
    description:
      'What three night shifts on a hospital ward taught me about handover screens, and why the best change we made was deleting things.',
    kicker: 'Essay',
    meta: '14 Oct 2026 · 9 min read',
    article: true,
  },
  '/photography': { title: 'Photography' },
  '/photography/night-ferries': {
    title: 'Night ferries',
    description: 'Five crossings between Cais do Sodré and Barreiro, shot after eleven. November 2025.',
    kicker: 'Photo series',
    meta: 'November 2025',
  },
} satisfies Record<string, Page>

export type PagePath = keyof typeof pages

export const ogImagePath = (path: PagePath) => `/og${path === '/' ? '/index' : path}.png`

export function seo(path: PagePath) {
  const page: Page = pages[path]
  const title = path === '/' ? siteName : `${page.title} - ${siteName}`
  const image = `${siteUrl}${ogImagePath(path)}`
  return {
    meta: [
      { title },
      ...(page.description ? [{ name: 'description', content: page.description }] : []),
      { property: 'og:site_name', content: siteName },
      { property: 'og:type', content: page.article ? 'article' : 'website' },
      { property: 'og:url', content: `${siteUrl}${path}` },
      { property: 'og:title', content: page.title },
      ...(page.description ? [{ property: 'og:description', content: page.description }] : []),
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title },
      ...(page.description ? [{ name: 'twitter:description', content: page.description }] : []),
      { name: 'twitter:image', content: image },
    ],
  }
}
