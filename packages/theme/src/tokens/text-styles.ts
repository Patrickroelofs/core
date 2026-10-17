import { defineTextStyles } from '@pandacss/dev'

// Layer 3: composites of semantic/primitive tokens.
export const textStyles = defineTextStyles({
  display: {
    value: {
      fontFamily: 'body',
      fontWeight: 'extralight',
      fontSize: 'step.6',
      lineHeight: 'none',
      letterSpacing: 'tighter',
    },
  },
  body: {
    value: { fontFamily: 'body', fontWeight: 'regular', fontSize: 'step.0', lineHeight: 'normal' },
  },
  label: {
    value: { fontFamily: 'body', fontWeight: 'medium', fontSize: 'step.-1', lineHeight: 'snug' },
  },
  mono: {
    value: { fontFamily: 'mono', fontWeight: 'regular', fontSize: 'step.-2', lineHeight: 'snug' },
  },
})
