import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react'

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
    /** Placeholder when there is no `src`; picks the curtain colours when there is. */
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

type Curtain = [string, string, string]

/** Lead, middle and back panel per tone, lifting in that order. `light` has none and gets one from `mixes`. */
const curtains: Partial<Record<NonNullable<ImageVariants['tone']>, Curtain>> = {
  coral: ['bg-coral', 'bg-plum', 'bg-navy'],
  azure: ['bg-azure', 'bg-plum', 'bg-navy'],
  dark: ['bg-plum', 'bg-azure', 'bg-navy'],
  navy: ['bg-navy', 'bg-plum', 'bg-coral'],
}

const mixes: Curtain[] = [
  ['bg-coral', 'bg-plum', 'bg-navy'],
  ['bg-coral', 'bg-azure', 'bg-navy'],
  ['bg-azure', 'bg-coral', 'bg-navy'],
  ['bg-azure', 'bg-plum', 'bg-navy'],
  ['bg-plum', 'bg-coral', 'bg-navy'],
  ['bg-plum', 'bg-azure', 'bg-navy'],
]

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0)

const delays = ['delay-0', 'delay-150', 'delay-300']

/** Fixed-ratio image. With `src` three tone panels lift off it once it has loaded and is in view; without, a striped placeholder carrying `label`. */
export function Image({ ratio, tone = 'light', label, alt = '', src, ...props }: ImageProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    const img = imgRef.current
    if (!src || !box || !img) return

    let visible = false
    const lift = () => {
      if (visible && img.complete) setRevealed(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        visible = true
        observer.disconnect()
        lift()
      },
      { threshold: 0.25 },
    )

    setRevealed(false)
    observer.observe(box)
    img.addEventListener('load', lift)
    img.addEventListener('error', lift)

    return () => {
      observer.disconnect()
      img.removeEventListener('load', lift)
      img.removeEventListener('error', lift)
    }
  }, [src])

  if (!src) return <div className={imageStyles({ ratio, tone, class: 'text-xs px-5.5 py-4.5' })}>{label}</div>

  return (
    <div ref={boxRef} className={imageStyles({ ratio, class: 'relative' })}>
      <img
        ref={imgRef}
        className="absolute inset-0 size-full object-cover"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {(curtains[tone ?? 'light'] ?? mixes[hash(src) % mixes.length])
        .map((color, i) => (
          <div
            key={color}
            aria-hidden="true"
            className={cx(
              'absolute inset-0 transition-[clip-path] duration-700 ease-soft motion-reduce:transition-none',
              color,
              delays[i],
              revealed ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0_0_0_0)]',
            )}
          />
        ))
        .reverse()}
    </div>
  )
}
