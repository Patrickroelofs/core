import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [tanstackStart(), viteReact(), nitro(), tailwindcss()],
  resolve: { alias: { '@/': `${path.resolve(dirname, 'src')}/` } },
  server: { port: 3000 },
})
