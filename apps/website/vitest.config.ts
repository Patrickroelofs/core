import path from 'node:path'
import { defineConfig } from 'vitest/config'

// its own config: the tests read the SEO modules and the built output, they don't need the app's plugins
export default defineConfig({
  resolve: { alias: { '@/': `${path.resolve(import.meta.dirname, 'src')}/` } },
  test: { include: ['tests/**/*.test.ts'] },
})
