import { readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import redact from '@tanstack/redact/vite'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

function staticRoutes(dir: string) {
  const files = readdirSync(dir, { recursive: true, encoding: 'utf8' })
    .filter((file) => /\.tsx?$/.test(file))
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

export default defineConfig({
  plugins: [
    redact(),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    nitro({
      preset: 'static',
      prerender: {
        crawlLinks: true,
        routes: staticRoutes(path.join(dirname, 'src/routes')),
      },
      compressPublicAssets: { gzip: true, brotli: true },
    }),
    tailwindcss(),
  ],
  environments: { ssr: { resolve: { noExternal: true } } },
  resolve: { alias: { '@/': `${path.resolve(dirname, 'src')}/` } },
  server: { port: 3000 },
})
