import { createFileRoute } from '@tanstack/react-router'
import { agentFileResponse } from '../seo/agents'

export const Route = createFileRoute('/sitemap.xml')({
  server: { handlers: { GET: () => agentFileResponse('/sitemap.xml') } },
})
