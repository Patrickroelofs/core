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
  },
  compoundVariants: [
    {
      tone: 'coral',
      appearance: 'solid',
      css: {
        bg: 'coral',
        color: 'navy',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'coral',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'coral',
        borderColor: 'coral',
      },
    },
    {
      tone: 'coral',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'azure',
      appearance: 'solid',
      css: {
        bg: 'azure',
        color: 'snow',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'azure',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'azure',
        borderColor: 'azure',
      },
    },
    {
      tone: 'azure',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'plum',
      appearance: 'solid',
      css: {
        bg: 'plum',
        color: 'snow',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'plum',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'plum',
        borderColor: 'plum',
      },
    },
    {
      tone: 'plum',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'navy',
      appearance: 'solid',
      css: {
        bg: 'navy',
        color: 'snow',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'navy',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'navy',
        borderColor: 'navy',
      },
    },
    {
      tone: 'navy',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'snow',
      appearance: 'solid',
      css: {
        bg: 'snow',
        color: 'navy',
        borderColor: 'transparent',
      },
    },
    {
      tone: 'snow',
      appearance: 'outline',
      css: {
        bg: 'transparent',
        color: 'snow',
        borderColor: 'snow',
      },
    },
    {
      tone: 'snow',
      appearance: 'soft',
      css: {
        bg: 'snow/12',
        color: 'inherit',
        borderColor: 'transparent',
      },
    },
  ],
  defaultVariants: { tone: 'navy', appearance: 'solid', size: 'md' },
})

export type TagVariants = NonNullable<RecipeVariantProps<typeof tagStyles>>
