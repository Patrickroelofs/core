import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

const backdropStyles = cva('rounded-card', {
  variants: {
    tone: { navy: 'bg-navy', plum: 'bg-plum', azure: 'bg-azure', coral: 'bg-coral' },
    inset: { sm: 'p-fluid-xs', md: 'p-fluid-m' },
  },
  defaultVariants: { tone: 'navy', inset: 'md' },
})

export type BrowserFrameVariants = NonNullable<VariantProps<typeof backdropStyles>>

export type BrowserFrameProps = BrowserFrameVariants & {
  /** Address shown in the window's bar, e.g. `example.com`. */
  url: string
  children: ReactNode
}

/** A screenshot in a browser window on a coloured backdrop, so it reads as a picture and not as part of the page. */
export function BrowserFrame({ tone, inset, url, children }: BrowserFrameProps) {
  return (
    <div className={backdropStyles({ tone, inset })}>
      <div className="overflow-hidden rounded-md bg-snow shadow-[0_24px_48px_-16px_rgba(0,0,0,.5)]">
        <div className="flex items-center gap-3 border-b border-gray-300 bg-white px-3.5 py-2.5" aria-hidden="true">
          <span className="flex flex-1 gap-1.5">
            <span className="size-2.5 rounded-full bg-snow-deep" />
            <span className="size-2.5 rounded-full bg-snow-deep" />
            <span className="size-2.5 rounded-full bg-snow-deep" />
          </span>
          <span className="min-w-0 max-w-[60%] truncate rounded-pill bg-snow px-4 py-1 text-xs text-navy/70">
            {url}
          </span>
          <span className="flex-1" />
        </div>
        <div className="*:rounded-none">{children}</div>
      </div>
    </div>
  )
}
