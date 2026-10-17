import { theme } from '@core/theme'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', theme],
  // preflight (the reset) already ships in @core/ui/styles.css
  preflight: false,
  strictTokens: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  globalCss: {
    body: {
      m: '0',
      bg: 'bg.canvas',
      color: 'fg.default',
      textStyle: 'body',
    },
    a: { color: 'inherit' },
  },
})
