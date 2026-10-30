import { useRouterState } from '@tanstack/react-router'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react'
import { watch } from './reveal'

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
    /** Above the fold: load right away at high priority instead of lazily. */
    priority?: boolean
  }

type Curtain = [lead: string, middle: string, back: string]

const curtains: Curtain[] = [
  ['bg-coral', 'bg-plum', 'bg-navy'],
  ['bg-coral', 'bg-azure', 'bg-navy'],
  ['bg-azure', 'bg-coral', 'bg-navy'],
  ['bg-azure', 'bg-plum', 'bg-navy'],
  ['bg-plum', 'bg-coral', 'bg-navy'],
  ['bg-plum', 'bg-azure', 'bg-navy'],
]

/** Stacking for the lead, middle and back panel. */
const layerOrder = ['z-3', 'z-2', 'z-1']

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0)

/** Same curtain for every image on a page, different per page, stable between server and client. */
function useCurtain() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return curtains[hash(pathname) % curtains.length]
}

/** Fixed-ratio image. With `src` it loads under a three-tone curtain that lifts once it is in view; without, a striped placeholder carrying `label`. */
export function Image({ ratio, tone = 'light', label, src, priority, ...props }: ImageProps) {
  if (!src) return <div className={imageStyles({ ratio, tone, class: 'text-xs px-5.5 py-4.5' })}>{label}</div>
  return <Photo key={src} ratio={ratio} src={src} priority={priority} {...props} />
}

type PhotoProps = Omit<ImageProps, 'tone' | 'label' | 'src'> & { src: string }

/** Lifts its curtain in one sweep with the other images that come into view with it. Keyed by `src`, so a new image gets a fresh curtain. */
function Photo({ ratio, src, alt = '', priority = false, ...props }: PhotoProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const layersRef = useRef<HTMLDivElement[]>([])
  const [revealed, setRevealed] = useState(false)
  const curtain = useCurtain()

  useEffect(() => {
    const box = boxRef.current
    const img = imgRef.current
    if (!box || !img) return

    const watcher = watch(box, { loaded: img.complete, layers: layersRef.current, onDone: () => setRevealed(true) })
    const loaded = () => watcher.loaded()
    img.addEventListener('load', loaded)
    img.addEventListener('error', loaded)

    return () => {
      watcher.stop()
      img.removeEventListener('load', loaded)
      img.removeEventListener('error', loaded)
    }
  }, [])

  return (
    <div ref={boxRef} className={imageStyles({ ratio, class: 'relative isolate' })}>
      <img
        ref={imgRef}
        className="absolute inset-0 size-full object-cover"
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        {...props}
      />
      {!revealed &&
        curtain.map((color, i) => (
          <div
            key={color}
            ref={(el) => {
              if (el) layersRef.current[i] = el
            }}
            aria-hidden="true"
            className={cx('absolute inset-0 noscript:hidden', color, layerOrder[i])}
          />
        ))}
    </div>
  )
}
