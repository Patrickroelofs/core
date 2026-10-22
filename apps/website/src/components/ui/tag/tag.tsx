import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

const tagStyles = cva(['whitespace-nowrap rounded-pill border', 'transition-[background,color]', 'focus-ring'], {
  variants: {
    // --tone is the accent colour, --on-tone the text colour on a solid fill
    tone: {
      coral: '[--tone:var(--color-coral)] [--on-tone:var(--color-navy)]',
      azure: '[--tone:var(--color-azure)] [--on-tone:var(--color-snow)]',
      plum: '[--tone:var(--color-plum)] [--on-tone:var(--color-snow)]',
      navy: '[--tone:var(--color-navy)] [--on-tone:var(--color-snow)]',
      snow: '[--tone:var(--color-snow)] [--on-tone:var(--color-navy)]',
    },
    appearance: {
      solid: 'bg-(color:--tone) text-(color:--on-tone) border-transparent',
      outline: 'text-(color:--tone) border-(color:--tone)',
      soft: 'bg-snow/12 border-transparent',
    },
    size: {
      sm: 'inline-flex items-center gap-1.5 font-medium leading-[1.1] text-xs px-3 py-1.5',
      md: 'inline-flex items-center gap-1.5 font-medium leading-[1.1] text-sm px-3.5 py-[7px]',
      // highlights a phrase inside running text: takes the surrounding font size
      inline: 'inline text-[length:inherit] [font-weight:inherit] leading-[inherit] px-[0.3em]',
    },
  },
  defaultVariants: { tone: 'navy', appearance: 'solid', size: 'md' },
})

export type TagVariants = NonNullable<VariantProps<typeof tagStyles>>

export type TagProps = Omit<useRender.ComponentProps<'span'>, 'className'> & TagVariants

/** Static pill label for roles, clients and tools. */
export function Tag({ tone, appearance, size, render, ...props }: TagProps) {
  return useRender({
    render,
    defaultTagName: 'span',
    props: { className: tagStyles({ tone, appearance, size }), ...props },
  })
}
