import { createFileRoute, notFound } from '@tanstack/react-router'

// catch-all so unknown URLs render the 404 page
export const Route = createFileRoute('/$')({
  loader: () => {
    throw notFound()
  },
  head: () => ({ meta: [{ title: 'Page not found - Patrick Roelofs' }] }),
})
