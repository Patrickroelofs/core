import { definePreset } from '@pandacss/dev'
import { fluid } from './tokens/fluid'
import { primitives } from './tokens/primitives'
import { semantic } from './tokens/semantic'
import { textStyles } from './tokens/text-styles'

export const theme = definePreset({
  name: '@core/theme',
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
    },
  },
})

export { fluidConfig, clampValue } from './tokens/fluid'
