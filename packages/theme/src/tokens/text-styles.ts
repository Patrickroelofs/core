import { defineTextStyles } from '@pandacss/dev'

// Layer 3: composites of semantic/primitive tokens.
export const textStyles = defineTextStyles({
  display: {
    value: {
      fontFamily: 'body',
      fontWeight: 'extralight',
      fontSize: '3xl',
      lineHeight: 'none',
      letterSpacing: 'tighter',
    },
  },
  body: {
    value: { fontFamily: 'body', fontWeight: 'regular', fontSize: 'md', lineHeight: 'normal' },
  },
  label: {
    value: { fontFamily: 'body', fontWeight: 'medium', fontSize: 'sm', lineHeight: 'snug' },
  },
  mono: {
    value: { fontFamily: 'mono', fontWeight: 'regular', fontSize: 'xs', lineHeight: 'snug' },
  },
})
