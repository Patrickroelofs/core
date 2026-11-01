import { createFileRoute } from '@tanstack/react-router'
import { contentPages } from '../content/content'
import { renderOgImage } from '../seo/og-image'
import { ogImagePath, type Page, pages } from '../seo/pages'

const allPages: Record<string, Page> = { ...pages, ...contentPages }

export const Route = createFileRoute('/og/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = Object.keys(allPages).find((p) => ogImagePath(p) === `/og/${params._splat}`)
        if (!path) return new Response('Not found', { status: 404 })
        const png = await renderOgImage(allPages[path], path === '/')
        return new Response(new Uint8Array(png), {
          headers: { 'Content-Type': 'image/png' },
        })
      },
    },
  },
})
