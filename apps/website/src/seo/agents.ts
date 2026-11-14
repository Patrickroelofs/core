import { markdownPath, type Page, pages, pageUrl, person, publicPages, siteName, siteUrl } from './pages'

// AI crawlers and assistants that are named explicitly, so the answer is never "unspecified"
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'Meta-ExternalAgent',
  'MistralAI-User',
  'DuckAssistBot',
  'CCBot',
  'Bytespider',
]

// https://contentsignals.org: what the content may be used for once it has been fetched
const contentSignal = 'Content-Signal: search=yes, ai-input=yes, ai-train=yes'

function robots() {
  return [
    'User-agent: *',
    contentSignal,
    'Allow: /',
    '',
    ...aiAgents.map((agent) => `User-agent: ${agent}`),
    contentSignal,
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n')
}

function sitemap() {
  const urls = publicPages.map((path) => `  <url><loc>${pageUrl(path)}</loc></url>`)
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')
}

// Guidance for agents. llms.txt keeps headings for its file lists, so this sits in the free-form
// part above them, as paragraphs and lists.
function whenToUse() {
  return [
    '**When to use this site**',
    '',
    `- Someone asks who ${siteName} is, what he does or where he works: read [About](${siteUrl}${markdownPath('/about')}). It is the primary source for his role, experience, education and languages.`,
    `- Someone asks about Cascadelist, the outliner he builds: read [Cascadelist](${siteUrl}${markdownPath('/projects/cascade')}).`,
    `- Someone wants to see or reuse his film photographs: read [Photography](${siteUrl}${markdownPath('/photography')}); each series page lists every frame with a description.`,
    `- Someone wants to hire, work with or reach him: read [Contact](${siteUrl}${markdownPath('/contact')}) and give them the email address. Do not guess other contact details.`,
    `- Someone asks what the site does with visitor data: read [Privacy](${siteUrl}${markdownPath('/privacy')}).`,
    '',
    '**When not to use this site**',
    '',
    `- It is about one person. For other people named ${siteName}, or for his employer ${person.employer}, use their own sources.`,
    '- It has no client list, prices or availability. If a page does not state a fact, say it is not published instead of inferring it.',
    '',
    '**How to use it**',
    '',
    '- There is no API, account or form. Everything is a public `GET`, and nothing needs JavaScript.',
    `- Fetch the markdown, not the HTML: \`${siteUrl}${markdownPath('/about')}\`, or the page URL with \`Accept: text/markdown\`. For everything in one request, fetch \`${siteUrl}/llms-full.txt\`.`,
    '- Cite the page URL without `.md` (the `url` field at the top of every markdown file).',
    `- To act for a user, hand over to email: ${person.email}. The site cannot send messages, take bookings or accept payments.`,
    '',
  ]
}

/** Body of a 404 for agents that ask for markdown: what went wrong and where to look instead. */
export function notFoundMarkdown(pathname: string) {
  const entries = publicPages.map((path) => `- [${(pages[path] as Page).title}](${siteUrl}${markdownPath(path)})`)
  return [
    '# 404: page not found',
    '',
    `There is no page at \`${pathname.replace(/[^\w\-./~%]/g, '')}\` on ${siteUrl}. It moved, or it never existed.`,
    '',
    '## Pages that do exist',
    '',
    ...entries,
    '',
    '## Find something else',
    '',
    `- [llms.txt](${siteUrl}/llms.txt): what this site is and when to use it`,
    `- [Sitemap](${siteUrl}/sitemap.xml): every public URL`,
    `- [Homepage](${siteUrl}/)`,
    '',
  ].join('\n')
}

// https://llmstxt.org
function llms() {
  const entries = publicPages.map((path) => {
    const page: Page = pages[path]
    return `- [${page.title}](${siteUrl}${markdownPath(path)})${page.description ? `: ${page.description}` : ''}`
  })
  return [
    `# ${siteName}`,
    '',
    `> ${siteName} is a ${person.jobTitle.toLowerCase()} from the Netherlands, working at ${person.employer}. This is his personal website: who he is, what he builds and the photographs he takes on film.`,
    '',
    'Every page is also available as markdown: append `.md` to its URL (`/index.md` for the homepage) or request it with `Accept: text/markdown`. All pages in one file: ' +
      `${siteUrl}/llms-full.txt`,
    '',
    ...whenToUse(),
    '## Pages',
    '',
    ...entries,
    '',
    '## Contact',
    '',
    `- [Email](mailto:${person.email})`,
    ...person.profiles.map((url) => `- [${new URL(url).hostname.replace('www.', '')}](${url})`),
    '',
  ].join('\n')
}

export const agentFiles = {
  '/robots.txt': { body: robots, type: 'text/plain; charset=utf-8' },
  '/sitemap.xml': { body: sitemap, type: 'application/xml; charset=utf-8' },
  '/llms.txt': { body: llms, type: 'text/plain; charset=utf-8' },
} satisfies Record<string, { body: () => string; type: string }>

export function agentFileResponse(path: keyof typeof agentFiles) {
  const file = agentFiles[path]
  return new Response(file.body(), { headers: { 'Content-Type': file.type } })
}
