import { type ComponentProps, createContext, type ReactNode, useContext } from 'react'
import { Label as LabelText } from '../label/label'
import { Title } from '../title/title'
import { dividerStyles, labelStyles, numberStyles, sectionStyles } from './labeled-section.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

const Context = createContext({ id: '', number: '' })

export type LabeledSectionProps = Part<ComponentProps<'section'>> & {
  id: string
  /** Section number, e.g. `"02"`: shown small above the title. */
  number: string
  /** Colour of the divider pill; vary it between neighbouring sections. */
  tone?: 'coral' | 'navy' | 'azure' | 'plum'
}

/** Root. A `<section>` labelled by its `LabeledSection.Label` title, preceded by a decorative divider; `id` is the anchor target for `SectionNav.Link`. */
function Root({ id, number, tone, ...props }: LabeledSectionProps) {
  return (
    <Context.Provider value={{ id, number }}>
      <div className={dividerStyles({ tone })} aria-hidden="true">
        <span data-part="pill" />
        <span data-part="rule" />
      </div>
      <section id={id} className={sectionStyles} aria-labelledby={`${id}-title`} {...props} />
    </Context.Provider>
  )
}

export type LabeledSectionLabelProps = { hint?: ReactNode; children: ReactNode }

/** Left column: the `h2` title (children) and an optional hint. */
function Label({ hint, children }: LabeledSectionLabelProps) {
  const { id, number } = useContext(Context)
  return (
    <div>
      <div className={labelStyles}>
        <span className={numberStyles}>{number}</span>
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
