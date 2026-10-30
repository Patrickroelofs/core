export const siteName = 'Patrick Roelofs'
export const siteUrl = (import.meta.env?.VITE_SITE_URL || 'https://patrickroelofs.com').replace(/\/$/, '')

export type Page = {
  title: string
  description?: string
  kicker?: string
  meta?: string
  article?: boolean
}

export const pages = {
  '/': { title: siteName, description: 'Dutch developer making calm software.' },
  '/about': {
    title: 'About',
    description: 'Meet Patrick, a frontend developer making fun, calm software with a touch of UX.',
  },
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
  '/photography': { title: 'Photography', description: 'Photographs on film, grouped into series.' },
  '/photography/texel': {
    title: 'Texel',
    description: 'Photographs from Texel, the Netherlands, taken in November 2024 on a Praktica TL2.',
    kicker: 'Photo series',
    meta: 'Texel · November 2024',
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
