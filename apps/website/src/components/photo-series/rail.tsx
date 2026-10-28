import { cva, type VariantProps } from 'class-variance-authority'

const pillStyles = cva('h-2.5 w-16 flex-none rounded-pill', {
  variants: {
    tone: { coral: 'bg-coral', navy: 'bg-navy', azure: 'bg-azure', plum: 'bg-plum' },
  },
})

const railStyles = cva('flex items-center gap-3', {
  variants: {
    space: { '3xl': 'mt-fluid-3xl', '4xl': 'mt-fluid-4xl' },
  },
  defaultVariants: { space: '4xl' },
})

// ponytail: LabeledSection's rail without its two-column body, for full-width sections
export function Rail({
  tone,
  space,
}: NonNullable<VariantProps<typeof pillStyles>> & NonNullable<VariantProps<typeof railStyles>>) {
  return (
    <div className={railStyles({ space })} aria-hidden="true">
      <span className={pillStyles({ tone })} />
      <span className="h-px flex-1 bg-border-default" />
    </div>
  )
}
