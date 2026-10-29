import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, ReactNode } from 'react'

const imageStyles = cva('block w-full overflow-hidden box-border object-cover rounded-lg', {
  variants: {
    ratio: {
      '16/10': 'aspect-[16/10]',
      '16/9': 'aspect-[16/9]',
      '3/2': 'aspect-[3/2]',
      '4/3': 'aspect-[4/3]',
      '4/5': 'aspect-[4/5]',
      '1/1': 'aspect-[1/1]',
      // fills its parent's height, for tiles sized by a grid
      fill: 'h-full',
    },
    /** Placeholder only; set when no `src` is given. */
    tone: {
      light:
        'bg-snow-deep text-navy/60 bg-[image:repeating-linear-gradient(135deg,rgba(25,32,54,.09)_0_1px,transparent_1px_11px)]',
      navy: 'bg-navy text-snow/65 bg-[image:repeating-linear-gradient(135deg,rgba(240,240,240,.1)_0_1px,transparent_1px_11px)]',
      dark: 'bg-plum text-snow/75 bg-[image:repeating-linear-gradient(135deg,rgba(240,240,240,.08)_0_1px,transparent_1px_11px)]',
      azure:
        'bg-azure-deep text-snow bg-[image:repeating-linear-gradient(135deg,rgba(240,240,240,.16)_0_1px,transparent_1px_11px)]',
      coral:
        'bg-coral text-navy bg-[image:repeating-linear-gradient(135deg,rgba(25,32,54,.14)_0_1px,transparent_1px_11px)]',
    },
  },
  defaultVariants: { ratio: '16/10' },
})

export type ImageVariants = NonNullable<VariantProps<typeof imageStyles>>

export type ImageProps = Omit<ComponentProps<'img'>, 'className' | 'children'> &
  ImageVariants & {
    /** Text shown on the striped placeholder when there is no `src`. */
    label?: ReactNode
  }

/** Fixed-ratio image. Without `src` it renders a striped placeholder carrying `label`. */
export function Image({ ratio, tone = 'light', label, alt = '', src, ...props }: ImageProps) {
  if (src)
    return <img className={imageStyles({ ratio })} src={src} alt={alt} loading="lazy" decoding="async" {...props} />
  return <div className={imageStyles({ ratio, tone, class: 'text-xs px-5.5 py-4.5' })}>{label}</div>
}
