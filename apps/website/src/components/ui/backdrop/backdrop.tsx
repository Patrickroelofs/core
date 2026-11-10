import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

const tones = ['navy', 'plum', 'azure', 'coral'] as const

const backdropStyles = cva('rounded-card', {
  variants: {
    tone: { navy: 'bg-navy', plum: 'bg-plum', azure: 'bg-azure', coral: 'bg-coral' },
    inset: { sm: 'p-fluid-xs', md: 'p-fluid-m' },
  },
  defaultVariants: { inset: 'md' },
})

export type BackdropVariants = Omit<NonNullable<VariantProps<typeof backdropStyles>>, 'tone'>

export type BackdropProps = BackdropVariants & {
  /** Picks the colour: the same seed always gets the same one, so server and client agree. */
  seed: string
  children: ReactNode
}

function toneFor(seed: string) {
  let hash = 2166136261
  for (const char of seed) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619) >>> 0
  return tones[((hash ^ (hash >>> 15)) >>> 0) % tones.length]
}

/** A screenshot inset on a coloured panel, so it reads as a picture and not as part of the page. */
export function Backdrop({ seed, inset, children }: BackdropProps) {
  return (
    <div className={backdropStyles({ tone: toneFor(seed), inset })}>
      <div className="overflow-hidden rounded-md shadow-[0_24px_48px_-16px_rgba(0,0,0,.5)] *:rounded-none">
        {children}
      </div>
    </div>
  )
}
