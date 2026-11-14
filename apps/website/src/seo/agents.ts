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
