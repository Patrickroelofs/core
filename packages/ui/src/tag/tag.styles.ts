import { cva, type RecipeVariantProps } from '../../styled-system/css'

export const tagStyles = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5',
    fontFamily: 'body',
    fontWeight: '[500]',
    lineHeight: '[1.1]',
    whiteSpace: 'nowrap',
    borderRadius: 'pill',
    borderWidth: '1px',
    borderStyle: 'solid',
    transition: '[background 0.2s, color 0.2s]',
    _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[2px]' },
  },
  variants: {
    tone: { coral: {}, azure: {}, plum: {}, navy: {}, snow: {} },
    appearance: { solid: {}, outline: {}, soft: {} },
    size: {
      sm: { fontSize: 'xs', px: '3', py: '1.5' },
      md: { fontSize: 'sm', px: '[14px]', py: '[7px]' },
    },
    interactive: { true: { cursor: 'pointer' }, false: {} },
  },
  compoundVariants: [
    {
      tone: 'coral',
      appearance: 'solid',
      css: {
        bg: 'coral',
        color: 'navy',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { boxShadow: '[inset 0 0 0 2px currentColor]' },
      },
    },
    {
      tone: 'coral',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'coral',
        borderColor: 'coral',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'coral', color: 'navy', borderColor: 'coral' },
      },
    },
    {
      tone: 'coral',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'coral', color: 'navy', borderColor: 'coral' },
      },
    },
    {
      tone: 'azure',
      appearance: 'solid',
      css: {
        bg: 'azure',
        color: 'snow',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { boxShadow: '[inset 0 0 0 2px currentColor]' },
      },
    },
    {
      tone: 'azure',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'azure',
        borderColor: 'azure',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'azure', color: 'snow', borderColor: 'azure' },
      },
    },
    {
      tone: 'azure',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'azure', color: 'snow', borderColor: 'azure' },
      },
    },
    {
      tone: 'plum',
      appearance: 'solid',
      css: {
        bg: 'plum',
        color: 'snow',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { boxShadow: '[inset 0 0 0 2px currentColor]' },
      },
    },
    {
      tone: 'plum',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'plum',
        borderColor: 'plum',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'plum', color: 'snow', borderColor: 'plum' },
      },
    },
    {
      tone: 'plum',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'plum', color: 'snow', borderColor: 'plum' },
      },
    },
    {
      tone: 'navy',
      appearance: 'solid',
      css: {
        bg: 'navy',
        color: 'snow',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { boxShadow: '[inset 0 0 0 2px currentColor]' },
      },
    },
    {
      tone: 'navy',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'navy',
        borderColor: 'navy',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'navy', color: 'snow', borderColor: 'navy' },
      },
    },
    {
      tone: 'navy',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'navy', color: 'snow', borderColor: 'navy' },
      },
    },
    {
      tone: 'snow',
      appearance: 'solid',
      css: {
        bg: 'snow',
        color: 'navy',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { boxShadow: '[inset 0 0 0 2px currentColor]' },
      },
    },
    {
      tone: 'snow',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'snow',
        borderColor: 'snow',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'snow', color: 'navy', borderColor: 'snow' },
      },
    },
    {
      tone: 'snow',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
        '&[aria-pressed=true], &[data-interactive]:hover': { bg: 'snow', color: 'navy', borderColor: 'snow' },
      },
    },
  ],
  defaultVariants: { tone: 'navy', appearance: 'solid', size: 'md', interactive: false },
})

export type TagVariants = NonNullable<RecipeVariantProps<typeof tagStyles>>
