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
          snow: { value: '#f0f0f0' },
          plum: { value: '#50216a' },
          navy: { value: '#192036' },
          azure: { value: '#0177bb' },
          coral: { value: '#d65b5c' },
        },
        radii: { control: { value: '8px' } },
        spacing: { control: { value: '16px' } },
        fonts: { body: { value: 'system-ui, sans-serif' } },
      },
    },
  },
})
