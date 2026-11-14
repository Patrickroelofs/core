import { createFileRoute } from '@tanstack/react-router'
import { agentFileResponse } from '../seo/agents'

export const Route = createFileRoute('/robots.txt')({
  server: { handlers: { GET: () => agentFileResponse('/robots.txt') } },
})
