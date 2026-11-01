import type { MDXComponents } from 'mdx/types'
import type { ReactNode } from 'react'
import { imageSrc } from '@/components/content-image'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { LabeledSection, type LabeledSectionProps } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import type { ImageRef } from '@/content/content'

type SectionProps = Pick<LabeledSectionProps, 'id' | 'tone'> & {
  label: ReactNode
  hint?: ReactNode
  children: ReactNode
}

function Section({ id, tone, label, hint, children }: SectionProps) {
  return (
    <LabeledSection id={id} tone={tone}>
      <LabeledSection.Label hint={hint}>{label}</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-5">{children}</div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}

/** Large lead sentence; `**bold**` parts are highlighted. */
function Statement({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 [&_strong]:font-black [&_strong]:text-accent-brand">
      <Title as="p" size="lg">
        {children}
      </Title>
    </div>
  )
}

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
      {items.map(({ value, label }) => (
        <li key={label} className="flex flex-col gap-2.5">
          <Title as="span" size="xl">
            {value}
          </Title>
          <div className="max-w-[22ch]">
            <Typography weight="medium">{label}</Typography>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** One wide image, then the rest two per row. */
function Gallery({ images, caption }: { images: ImageRef[]; caption?: ReactNode }) {
  const [first, ...rest] = images
  return (
    <figure className="mt-fluid-4xl flex flex-col gap-3">
      {first ? (
        <div className="overflow-hidden rounded-3xl">
          <Image ratio="16/9" label={first.alt} src={imageSrc(first)} alt={first.alt} />
        </div>
      ) : null}
      {rest.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {rest.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-3xl">
              <Image ratio="4/3" label={image.alt} src={imageSrc(image, 1200, 900)} alt={image.alt} />
            </div>
          ))}
        </div>
      ) : null}
      {caption ? (
        <Label size="xs" render={<figcaption />}>
          {caption}
        </Label>
      ) : null}
    </figure>
  )
}

export const caseStudyComponents: MDXComponents = {
  Section,
  Statement,
  Stats,
  Gallery,
  h3: ({ children }) => (
    <Title as="h3" size="xs" weight="bold">
      {children}
    </Title>
  ),
  p: ({ children }) => (
    <div className="max-w-[720px]">
      <Typography size="lg">{children}</Typography>
    </div>
  ),
  a: (props) => <a {...props} className="text-accent-brand underline underline-offset-2" />,
}
