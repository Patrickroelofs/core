import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '../components/error-page'

export const Route = createFileRoute('/404.html')({
  component: NotFound,
  head: () => ({ meta: [{ title: 'Page not found - Patrick Roelofs' }] }),
})
