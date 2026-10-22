import { cva, cx } from 'class-variance-authority'
import { type ComponentProps, createContext, type ReactNode, useContext } from 'react'
import { Label as LabelText } from '../label/label'
import { Title } from '../title/title'

/** The divider pill takes the section's tone. */
const pillStyles = cva('h-2.5 w-16 flex-none rounded-pill', {
  variants: {
    tone: { coral: 'bg-coral', navy: 'bg-navy', azure: 'bg-azure', plum: 'bg-plum' },
  },
  defaultVariants: { tone: 'coral' },
})

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

const Context = createContext({ id: '' })

export type LabeledSectionProps = Part<ComponentProps<'section'>> & {
  id: string
  /** Colour of the divider pill; vary it between neighbouring sections. */
  tone?: 'coral' | 'navy' | 'azure' | 'plum'
}

/** Root. A `<section>` labelled by its `LabeledSection.Label` title, preceded by a decorative divider; `id` is the anchor target for `SectionNav.Link`. */
function Root({ id, tone, ...props }: LabeledSectionProps) {
  return (
    <Context.Provider value={{ id }}>
      {/* rail above each section: a pill in the section's tone followed by a hairline */}
      <div className="mt-fluid-4xl flex items-center gap-3" aria-hidden="true">
        <span className={pillStyles({ tone })} />
        <span className="h-px flex-1 bg-border-default" />
      </div>
      <section
        id={id}
        className="grid *:min-w-0 gap-fluid-s pt-fluid-l md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]"
        aria-labelledby={`${id}-title`}
        {...props}
      />
    </Context.Provider>
  )
}

export type LabeledSectionLabelProps = { hint?: ReactNode; children: ReactNode }

/** Left column: the `h2` title (children) and an optional hint. */
function Label({ hint, children }: LabeledSectionLabelProps) {
  const { id } = useContext(Context)
  return (
    <div>
      <div
        className={cx(
          'flex flex-col gap-1',
          'md:sticky md:top-[calc(var(--site-header-height,0px)_+_var(--section-nav-height,0px)_+_32px)]',
          'md:transition-[top] md:duration-[.45s] md:ease-travel md:motion-reduce:transition-none',
        )}
      >
        <Title as="h2" size="xs" weight="bold" id={`${id}-title`}>
          {children}
        </Title>
        {hint ? <LabelText>{hint}</LabelText> : null}
      </div>
    </div>
  )
}

/** Right column. */
function Content(props: Part<ComponentProps<'div'>>) {
  return <div {...props} />
}

export const LabeledSection = Object.assign(Root, { Label, Content })
