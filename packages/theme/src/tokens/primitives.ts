import { defineTokens } from '@pandacss/dev'

// Layer 1: raw values only. No meaning, no references. Components never use these directly.
export const primitives = defineTokens({
  colors: {
    snow: { value: '#f0f0f0' },
    plum: { value: '#50216a' },
    navy: { value: '#192036' },
    azure: { value: '#0177bb' },
    coral: { value: '#d65b5c' },
    white: { value: '#ffffff' },
    gray: { 300: { value: '#e4e4e4' } },
  },
  fonts: {
    onest: { value: "'Onest Variable', 'Onest', system-ui, sans-serif" },
    jetbrainsMono: { value: "'JetBrains Mono', ui-monospace, monospace" },
  },
  fontWeights: {
    thin: { value: '100' },
    extralight: { value: '200' },
    light: { value: '300' },
    regular: { value: '400' },
    medium: { value: '500' },
    bold: { value: '700' },
    extrabold: { value: '800' },
    black: { value: '900' },
  },
  fontSizes: {
    xs: { value: '12px' },
    sm: { value: '13px' },
    md: { value: '16px' },
    lg: { value: '22px' },
    xl: { value: '34px' },
    '2xl': { value: '56px' },
    '3xl': { value: '88px' },
  },
  lineHeights: {
    none: { value: '1' },
    tight: { value: '1.14' },
    snug: { value: '1.25' },
    normal: { value: '1.4' },
  },
  letterSpacings: {
    tight: { value: '-0.025em' },
    tighter: { value: '-0.05em' },
  },
  radii: {
    sm: { value: '8px' },
    md: { value: '12px' },
    lg: { value: '20px' },
    full: { value: '999px' },
  },
  spacing: {
    1: { value: '4px' },
    2: { value: '8px' },
    3: { value: '12px' },
    4: { value: '16px' },
    6: { value: '24px' },
    8: { value: '32px' },
    10: { value: '40px' },
  },
})
