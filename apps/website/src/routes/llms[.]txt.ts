import { createFileRoute } from '@tanstack/react-router'
import { agentFileResponse } from '../seo/agents'

export const Route = createFileRoute('/llms.txt')({
  server: { handlers: { GET: () => agentFileResponse('/llms.txt') } },
})
