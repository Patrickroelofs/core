import { createFileRoute, notFound } from '@tanstack/react-router'

// catch-all inside the frontend layout, so unknown URLs get the site nav and styles with the 404 page
export const Route = createFileRoute('/_frontend/$')({
  loader: () => {
    throw notFound()
  },
  head: () => ({ meta: [{ title: 'Page not found - Patrick Roelofs' }] }),
})
