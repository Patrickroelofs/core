import { cva, type RecipeVariantProps } from '../../../../styled-system/css'

const stripes = (line: string) => `repeating-linear-gradient(135deg, ${line} 0 1px, transparent 1px 11px)`

export const imageStyles = cva({
  base: { display: 'block', width: '[100%]', overflow: 'hidden', boxSizing: 'border-box', objectFit: 'cover' },
  variants: {
    ratio: {
      '16/10': { aspectRatio: '[16 / 10]' },
      '16/9': { aspectRatio: '[16 / 9]' },
      '4/3': { aspectRatio: '[4 / 3]' },
      '1/1': { aspectRatio: '[1 / 1]' },
    },
    /** Placeholder only; set when no `src` is given. */
    tone: {
      light: { bg: '[#dcdcdc]', color: 'navy/60', backgroundImage: `[${stripes('rgba(25,32,54,.09)')}]` },
      dark: { bg: 'plum', color: 'snow/75', backgroundImage: `[${stripes('rgba(240,240,240,.08)')}]` },
      azure: { bg: '[#016aa8]', color: 'snow', backgroundImage: `[${stripes('rgba(240,240,240,.16)')}]` },
      coral: { bg: 'coral', color: 'navy', backgroundImage: `[${stripes('rgba(25,32,54,.14)')}]` },
    },
  },
  defaultVariants: { ratio: '16/10' },
})

export const placeholderStyles = cva({ base: { fontFamily: 'mono', fontSize: 'xs', px: '[22px]', py: '[18px]' } })

export type ImageVariants = NonNullable<RecipeVariantProps<typeof imageStyles>>
