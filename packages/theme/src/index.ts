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
        introCycle: {
          '0%, 28%': { transform: 'translateY(0)' },
          '33%, 61%': { transform: 'translateY(-100%)' },
          '66%, 94%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
})

export { clampValue, fluidConfig } from './tokens/fluid'
export type { Surface } from './tokens/surfaces'
