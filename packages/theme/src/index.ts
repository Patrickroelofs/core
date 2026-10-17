import { definePreset } from '@pandacss/dev'
import { primitives } from './tokens/primitives'
import { semantic } from './tokens/semantic'
import { textStyles } from './tokens/text-styles'

export const theme = definePreset({
  name: '@core/theme',
  theme: {
    extend: {
      tokens: primitives,
      semanticTokens: semantic,
      textStyles,
    },
  },
})
