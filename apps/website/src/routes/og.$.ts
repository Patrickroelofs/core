import { createFileRoute } from '@tanstack/react-router'
import { renderOgImage } from '../seo/og-image'
import { ogImagePath, type PagePath, pages } from '../seo/pages'

export const Route = createFileRoute('/og/$')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const path = (Object.keys(pages) as PagePath[]).find((p) => ogImagePath(p) === `/og/${params._splat}`)
        if (!path) return new Response('Not found', { status: 404 })
        const png = await renderOgImage(pages[path], path === '/')
        return new Response(new Uint8Array(png), {
          headers: { 'Content-Type': 'image/png' },
        })
      },
    },
  },
})
