import { definePreset } from '@pandacss/dev'
import { fluid } from './tokens/fluid'
import { primitives } from './tokens/primitives'
import { semantic } from './tokens/semantic'
import { surfaceCss } from './tokens/surfaces'
import { textStyles } from './tokens/text-styles'

export const theme = definePreset({
  name: '@core/theme',
  globalCss: surfaceCss,
  theme: {
    extend: {
      tokens: {
        ...primitives,
        fontSizes: { ...primitives.fontSizes, ...fluid.fontSizes },
        spacing: { ...primitives.spacing, ...fluid.spacing },
        sizes: fluid.sizes,
      },
      semanticTokens: semantic,
      textStyles,
      keyframes: {
        sectionIn: { from: { opacity: 0, transform: 'translateY(-8px)' }, to: { opacity: 1, transform: 'none' } },
      },
    },
  },
})

export { clampValue, fluidConfig } from './tokens/fluid'
export type { Surface } from './tokens/surfaces'
