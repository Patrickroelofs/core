import { theme } from '@core/theme'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', theme],
  preflight: true,
  strictTokens: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
})
