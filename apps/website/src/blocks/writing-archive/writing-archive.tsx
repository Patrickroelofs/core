import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const writing = [
  { date: 'Sep 2026', title: 'Designing for the night shift', kind: 'Essay', minutes: '9 min' },
  { date: 'Jul 2026', title: 'Your empty state is a promise', kind: 'Essay', minutes: '6 min' },
  { date: 'Jun 2026', title: 'Lisbon Design Week: slides + notes', kind: 'Talk', minutes: '22 min' },
  { date: 'Apr 2026', title: 'Notes on prototyping in code', kind: 'Note', minutes: '4 min' },
  { date: 'Jan 2026', title: 'What transit maps taught me about hierarchy', kind: 'Essay', minutes: '11 min' },
  { date: 'Nov 2025', title: 'A tiny checklist for handoff', kind: 'Note', minutes: '3 min' },
] as const

export function WritingArchive() {
  return (
    <section id="writing" className="flex flex-col gap-fluid-l">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Title as="h2" size="xl">
          Writing{' '}
          <Title as="span" size="xl" weight="black">
            archive
          </Title>
        </Title>
      </div>
      <ul className="border-t-[1.5px] border-fg-default">
        {writing.map(({ date, title, kind, minutes }) => (
          <li key={title}>
            <ListRow render={<a href={`/writing/${title.toLowerCase().replace(/\W+/g, '-')}`} />}>
              <ListRow.Lead>{date}</ListRow.Lead>
              <ListRow.Body>
                <Title as="span" size="sm" weight="medium">
                  {title}
                </Title>
              </ListRow.Body>
              <ListRow.Meta>
                <span className="flex gap-6">
                  <Label size="xs">{kind}</Label>
                  <Label size="xs">{minutes}</Label>
                </span>
              </ListRow.Meta>
            </ListRow>
          </li>
        ))}
      </ul>
    </section>
  )
}
