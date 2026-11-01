import { readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import mdx from '@mdx-js/rollup'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import redact from '@tanstack/redact/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'
import { remarkHeadings } from './src/content/remark-headings'
import { ogImagePath, type PagePath, pages } from './src/seo/pages'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const hiddenRoutes = /^(projects|writing)\./
const hiddenPages = /^\/(projects|writing)(\/|$)/

function staticRoutes(dir: string) {
  const files = readdirSync(dir, { recursive: true, encoding: 'utf8' })
    .filter((file) => /\.tsx?$/.test(file) && !hiddenRoutes.test(file))
    .map((file) =>
      file
        .replace(/\.tsx?$/, '')
        .split(/[/.](?![^[]*\])/)
        .filter((segment) => !['index', 'route'].includes(segment) && !/^[_(]/.test(segment))
        .map((segment) => segment.replace(/\[(.+?)\]/g, '$1')),
    )
    .filter((segments) => !segments.some((segment) => segment.startsWith('$') || segment.startsWith('-')))
    .map((segments) => `/${segments.join('/')}`)
  return [...new Set(files)]
}

function contentRoutes(dir: string) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((section) =>
      readdirSync(path.join(dir, section.name))
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => `/${section.name}/${file.replace(/\.mdx$/, '')}`),
    )
    .filter((page) => !hiddenPages.test(page))
}

const content = contentRoutes(path.join(dirname, 'src/content'))

export default defineConfig({
  plugins: [
    redact(),
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkHeadings],
      }),
    },
    tanstackStart({ router: { routeFileIgnorePattern: hiddenRoutes.source } }),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    nitro({
      preset: 'static',
      prerender: {
        crawlLinks: true,
        routes: [
          ...staticRoutes(path.join(dirname, 'src/routes')),
          ...content,
          ...[...(Object.keys(pages) as PagePath[]).filter((page) => !hiddenPages.test(page)), ...content].map(
            ogImagePath,
          ),
        ],
      },
      compressPublicAssets: { gzip: true, brotli: true },
    }),
    tailwindcss(),
  ],
  environments: { ssr: { resolve: { noExternal: true, external: ['satori', '@resvg/resvg-js'] } } },
  optimizeDeps: { exclude: ['@resvg/resvg-js'] },
  resolve: { alias: { '@/': `${path.resolve(dirname, 'src')}/` } },
  server: { port: 3000 },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
    allowedHosts: ['.patrickroelofs.com'],
  },
})
