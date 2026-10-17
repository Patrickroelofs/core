import { defineSemanticTokens } from '@pandacss/dev'

// Layer 2: intent. Only references primitives. Components use these.
export const semantic = defineSemanticTokens({
  colors: {
    bg: {
      canvas: { value: '{colors.snow}' },
      surface: { value: '{colors.white}' },
      inverse: { value: '{colors.navy}' },
    },
    fg: {
      default: { value: '{colors.navy}' },
      inverse: { value: '{colors.snow}' },
    },
    border: {
      default: { value: '{colors.gray.300}' },
      strong: { value: '{colors.navy}' },
    },
    action: {
      primary: { value: '{colors.navy}' },
      primaryHover: { value: '{colors.plum}' },
      onPrimary: { value: '{colors.snow}' },
    },
    accent: {
      brand: { value: '{colors.coral}' },
      info: { value: '{colors.azure}' },
      highlight: { value: '{colors.plum}' },
    },
    focusRing: { value: '{colors.azure}' },
  },
  fonts: {
    body: { value: '{fonts.onest}' },
    mono: { value: '{fonts.jetbrainsMono}' },
  },
  radii: {
    control: { value: '{radii.sm}' },
    card: { value: '{radii.lg}' },
    pill: { value: '{radii.full}' },
  },
  spacing: {
    control: { value: '{spacing.4}' },
    gutter: { value: '{spacing.8}' },
  },
})
