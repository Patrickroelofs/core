import { cva, type RecipeVariantProps } from '../../styled-system/css'
import type { SystemStyleObject } from '../../styled-system/types'

type Tone = 'coral' | 'azure' | 'plum' | 'navy' | 'snow'
type Appearance = 'solid' | 'outline' | 'soft'

// [fill, text on fill]
const tones = {
  coral: ['coral', 'navy'],
  azure: ['azure', 'snow'],
  plum: ['plum', 'snow'],
  navy: ['navy', 'snow'],
  snow: ['snow', 'navy'],
} as const satisfies Record<Tone, readonly [string, string]>

const appearances = ['solid', 'outline', 'soft'] as const satisfies readonly Appearance[]

const compoundVariants = (Object.keys(tones) as Tone[]).flatMap((tone) => {
  const [fill, on] = tones[tone]
  const filled: SystemStyleObject = { bg: fill, color: on, borderColor: fill }
  return appearances.map((appearance) => {
    const rest: Record<Appearance, SystemStyleObject> = {
      solid: { bg: fill, color: on, borderColor: 'transparent' },
      outline: { bg: 'transparent', color: fill, borderColor: fill },
      soft: { bg: 'snow/12', color: 'inherit', borderColor: 'transparent' },
    }
    const base = rest[appearance]
    // outline + soft fill in when selected or hovered (interactive only)
    const css: SystemStyleObject =
      appearance === 'solid' ? base : { ...base, '&[aria-pressed=true], &[data-interactive]:hover': filled }
    return { tone, appearance, css }
  })
})

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
  compoundVariants,
  defaultVariants: { tone: 'navy', appearance: 'solid', size: 'md', interactive: false },
})

export type TagVariants = NonNullable<RecipeVariantProps<typeof tagStyles>>
