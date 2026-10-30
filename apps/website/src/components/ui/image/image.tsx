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
    /** Placeholder when there is no `src`; background while a `src` loads. */
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

const steps = [8, 32]
const stepMs = 130

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fixed-ratio image. With `src` it starts pixelated and sharpens in steps once in view; without, a striped placeholder carrying `label`. */
export function Image({ ratio, tone = 'light', label, alt = '', src, ...props }: ImageProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [sharp, setSharp] = useState(false)

  useEffect(() => {
    const box = boxRef.current
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!src || !box || !canvas || !img) return
    if (reducedMotion()) {
      setSharp(true)
      return
    }

    let step = 0
    let visible = false
    let timer: ReturnType<typeof setTimeout> | undefined
    const loaded = () => img.complete && img.naturalWidth > 0

    const draw = (cols: number) => {
      const ctx = canvas.getContext('2d')
      const { width, height } = box.getBoundingClientRect()
      if (!ctx || !width || !height) return
      const rows = Math.max(1, Math.round((cols * height) / width))
      canvas.width = cols
      canvas.height = rows
      const scale = Math.max(cols / img.naturalWidth, rows / img.naturalHeight)
      const w = img.naturalWidth * scale
      const h = img.naturalHeight * scale
      ctx.drawImage(img, (cols - w) / 2, (rows - h) / 2, w, h)
    }

    const advance = () => {
      step += 1
      if (step >= steps.length) return setSharp(true)
      draw(steps[step])
      timer = setTimeout(advance, stepMs)
    }

    const start = () => {
      if (!loaded() || timer) return
      draw(steps[0])
      if (visible) timer = setTimeout(advance, stepMs)
    }

    const fail = () => setSharp(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        visible = true
        observer.disconnect()
        start()
      },
      { threshold: 0.25 },
    )

    setSharp(false)
    observer.observe(box)
    img.addEventListener('load', start)
    img.addEventListener('error', fail)
    start()

    return () => {
      observer.disconnect()
      clearTimeout(timer)
      img.removeEventListener('load', start)
      img.removeEventListener('error', fail)
    }
  }, [src])

  if (!src) return <div className={imageStyles({ ratio, tone, class: 'text-xs px-5.5 py-4.5' })}>{label}</div>

  return (
    <div ref={boxRef} className={imageStyles({ ratio, tone, class: 'relative' })}>
      <img
        ref={imgRef}
        className={cx('absolute inset-0 size-full object-cover', sharp ? 'opacity-100' : 'opacity-0')}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
      />
      <canvas
        ref={canvasRef}
        className={cx('absolute inset-0 size-full [image-rendering:pixelated]', sharp && 'hidden')}
      />
    </div>
  )
}
