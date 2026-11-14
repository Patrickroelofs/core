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
  '/projects/cascade': {
    title: 'Cascadelist',
    description: 'An outliner for everyone: one infinite list you can nest, fold, zoom and link.',
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

// work and writing are not published yet, apart from the Cascadelist case study
const hiddenPages = /^\/(projects|writing)(?!\/cascade$)(\/|$)/
export const publicPages = (Object.keys(pages) as PagePath[]).filter((path) => !hiddenPages.test(path))

export const person = {
  name: siteName,
  jobTitle: 'Frontend developer',
  employer: 'Iquality',
  country: 'NL',
  email: 'contact@patrickroelofs.com',
  profiles: ['https://www.linkedin.com/in/patrick-roelofs/', 'https://github.com/Patrickroelofs/'],
}

export const pageUrl = (path: PagePath) => `${siteUrl}${path}`
// every public page is also prerendered as markdown, for agents that ask for it
export const markdownPath = (path: PagePath) => `${path === '/' ? '/index' : path}.md`

function jsonLd(path: PagePath, page: Page) {
  const personId = `${siteUrl}/#person`
  const url = pageUrl(path)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: person.name,
        url: siteUrl,
        jobTitle: person.jobTitle,
        worksFor: { '@type': 'Organization', name: person.employer },
        nationality: { '@type': 'Country', name: 'Netherlands' },
        knowsLanguage: ['nl', 'en'],
        email: `mailto:${person.email}`,
        sameAs: person.profiles,
      },
      {
        '@type': path === '/about' ? 'ProfilePage' : page.article ? 'Article' : 'WebPage',
        '@id': `${url}#page`,
        url,
        ...(page.article ? { headline: page.title } : { name: page.title }),
        ...(page.description ? { description: page.description } : {}),
        image: `${siteUrl}${ogImagePath(path)}`,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
        author: { '@id': personId },
        ...(path === '/about' ? { mainEntity: { '@id': personId } } : {}),
      },
    ],
  }
}

export const ogImagePath = (path: PagePath) => `/og${path === '/' ? '/index' : path}.png`

export function seo(path: PagePath) {
  const page: Page = pages[path]
  const title = path === '/' ? siteName : `${page.title} - ${siteName}`
  const image = `${siteUrl}${ogImagePath(path)}`
  return {
    links: [
      { rel: 'canonical', href: pageUrl(path) },
      { rel: 'alternate', type: 'text/markdown', href: `${siteUrl}${markdownPath(path)}` },
    ],
    meta: [
      { title },
      ...(page.description ? [{ name: 'description', content: page.description }] : []),
      { property: 'og:site_name', content: siteName },
      { property: 'og:type', content: page.article ? 'article' : 'website' },
      { property: 'og:url', content: pageUrl(path) },
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
      { 'script:ld+json': jsonLd(path, page) },
    ],
  }
}
