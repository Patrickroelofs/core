import { defineConfig } from '@pandacss/dev'
import { theme } from '@core/theme'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', theme],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
})
