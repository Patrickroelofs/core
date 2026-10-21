import { type ComponentProps, createContext, type ReactNode, useContext } from 'react'
import { Label as LabelText } from '../label/label'
import { Title } from '../title/title'
import { labelStyles, sectionStyles } from './labeled-section.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

const Context = createContext('')

export type LabeledSectionProps = Part<ComponentProps<'section'>> & { id: string }

/** Root. A `<section>` labelled by its `LabeledSection.Label` title; `id` is the anchor target for `SectionNav.Link`. */
function Root({ id, ...props }: LabeledSectionProps) {
  return (
    <Context.Provider value={id}>
      <section id={id} className={sectionStyles} aria-labelledby={`${id}-title`} {...props} />
    </Context.Provider>
  )
}

export type LabeledSectionLabelProps = { hint?: ReactNode; children: ReactNode }

/** Left column: the `h2` title (children) and an optional hint. */
function Label({ hint, children }: LabeledSectionLabelProps) {
  const id = useContext(Context)
  return (
    <div>
      <div className={labelStyles}>
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
