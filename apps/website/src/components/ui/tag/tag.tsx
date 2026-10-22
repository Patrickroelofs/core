import { useRender } from '@base-ui/react/use-render'
import { cva, type VariantProps } from 'class-variance-authority'

const tagStyles = cva(
  ['font-body whitespace-nowrap rounded-pill border', 'transition-[background,color]', 'focus-ring'],
  {
    variants: {
      tone: { coral: '', azure: '', plum: '', navy: '', snow: '' },
      appearance: { solid: '', outline: '', soft: '' },
      size: {
        sm: 'inline-flex items-center gap-1.5 font-medium leading-[1.1] text-xs px-3 py-1.5',
        md: 'inline-flex items-center gap-1.5 font-medium leading-[1.1] text-sm px-3.5 py-[7px]',
        // highlights a phrase inside running text: takes the surrounding font size
        inline: 'inline text-[length:inherit] [font-weight:inherit] leading-[inherit] px-[0.3em]',
      },
    },
    compoundVariants: [
      { tone: 'coral', appearance: 'solid', class: 'bg-coral text-navy border-transparent' },
      { tone: 'coral', appearance: 'outline', class: 'bg-transparent text-coral border-coral' },
      { tone: 'coral', appearance: 'soft', class: 'bg-snow/12 text-inherit border-transparent' },
      { tone: 'azure', appearance: 'solid', class: 'bg-azure text-snow border-transparent' },
      { tone: 'azure', appearance: 'outline', class: 'bg-transparent text-azure border-azure' },
      { tone: 'azure', appearance: 'soft', class: 'bg-snow/12 text-inherit border-transparent' },
      { tone: 'plum', appearance: 'solid', class: 'bg-plum text-snow border-transparent' },
      { tone: 'plum', appearance: 'outline', class: 'bg-transparent text-plum border-plum' },
      { tone: 'plum', appearance: 'soft', class: 'bg-snow/12 text-inherit border-transparent' },
      { tone: 'navy', appearance: 'solid', class: 'bg-navy text-snow border-transparent' },
      { tone: 'navy', appearance: 'outline', class: 'bg-transparent text-navy border-navy' },
      { tone: 'navy', appearance: 'soft', class: 'bg-snow/12 text-inherit border-transparent' },
      { tone: 'snow', appearance: 'solid', class: 'bg-snow text-navy border-transparent' },
      { tone: 'snow', appearance: 'outline', class: 'bg-transparent text-snow border-snow' },
      { tone: 'snow', appearance: 'soft', class: 'bg-snow/12 text-inherit border-transparent' },
    ],
    defaultVariants: { tone: 'navy', appearance: 'solid', size: 'md' },
  },
)

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
