import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

const roadmap = [
  { title: 'Live today', body: 'Nesting, folding, zooming, tasks, daily notes, search and offline-first sync.' },
  { title: 'On the way', body: 'Backlinks, mirrors, board and table views, history, templates and import.' },
  { title: 'Open source', body: 'Developed in the open on GitHub, with a self-hosted setup over Docker Compose.' },
] as const

export function Status() {
  return (
    <LabeledSection id="status" tone="azure">
      <LabeledSection.Label hint="03">Where it stands</LabeledSection.Label>
      <LabeledSection.Content>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {roadmap.map(({ title, body }) => (
            <li key={title} className="flex flex-col gap-2.5">
              <Title as="h3" size="sm">
                {title}
              </Title>
              <div className="max-w-[28ch]">
                <Typography weight="medium">{body}</Typography>
              </div>
            </li>
          ))}
        </ul>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
