import { theme } from '@core/theme'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', theme],
  preflight: true,
  strictTokens: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  globalCss: {
    'html:has([data-section-nav])': {
      scrollBehavior: 'smooth',
      '& [id]': {
        scrollMarginTop: '[calc(var(--site-header-height, 0px) + var(--section-nav-height, 0px) + 16px)]',
      },
      _motionReduce: { scrollBehavior: 'auto' },
    },
  },
})
