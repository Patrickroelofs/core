import { definePreset } from '@pandacss/dev'

export const theme = definePreset({
  name: '@core/theme',
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#4f46e5' },
          primaryHover: { value: '#4338ca' },
          onPrimary: { value: '#ffffff' },
          surface: { value: '#ffffff' },
          border: { value: '#d4d4d8' },
          text: { value: '#18181b' },
        },
        radii: { control: { value: '8px' } },
        spacing: { control: { value: '16px' } },
        fonts: { body: { value: 'system-ui, sans-serif' } },
      },
    },
  },
})
