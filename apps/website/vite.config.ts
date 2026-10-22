import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { withPayload } from '@payloadcms/tanstack-start'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import rsc from '@vitejs/plugin-rsc'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(
  withPayload(
    ({ pluginOptions }) => ({
      plugins: [
        rsc(pluginOptions.rsc),
        tanstackStart(pluginOptions.tanstackStart),
        viteReact(pluginOptions.react),
        nitro(pluginOptions.nitro),
        tailwindcss(),
      ],
      resolve: { alias: { '@/': `${path.resolve(dirname, 'src')}/` } },
      server: { port: 3000 },
    }),
    { payloadConfigPath: path.resolve(dirname, 'src', 'payload.config.ts'), routesDirectory: 'routes' },
  ),
)
