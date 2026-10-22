import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const posts = [
  { date: 'Aug 2026', title: 'Timetables are interfaces', minutes: '6 min' },
  { date: 'Jun 2026', title: 'The case for fewer settings', minutes: '4 min' },
  { date: 'Mar 2026', title: 'A year of designing in the browser', minutes: '11 min' },
  { date: 'Jan 2026', title: 'Tram 28, end to end', minutes: '3 min' },
] as const

export function MoreWriting() {
  return (
    <div className="mt-fluid-3xl grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
      <div className="flex flex-col gap-1.5">
        <Label size="xs" render={<span />}>
          Writing
        </Label>
        <Title as="h2" size="xs" weight="bold">
          More writing
        </Title>
        <a href="/writing" className="mt-2 font-semibold text-accent-brand">
          All essays →
        </a>
      </div>
      <ul className="border-t border-border-default">
        {posts.map(({ date, title, minutes }) => (
          <li key={title}>
            <ListRow render={<a href="/writing/designing-for-4am" />}>
              <ListRow.Lead>{date}</ListRow.Lead>
              <ListRow.Body>
                <Title as="span" size="sm">
                  {title}
                </Title>
              </ListRow.Body>
              <ListRow.Meta>{minutes}</ListRow.Meta>
            </ListRow>
          </li>
        ))}
      </ul>
    </div>
  )
}
