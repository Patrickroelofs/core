import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'
import { posts } from '@/content/content'

export function MoreWriting({ current }: { current: string }) {
  const more = posts.filter((p) => p.slug !== current).slice(0, 4)
  if (more.length === 0) return null
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
        {more.map(({ slug, path, month, title, minutes }) => (
          <li key={slug}>
            <ListRow render={<a href={path} />}>
              <ListRow.Lead>{month}</ListRow.Lead>
              <ListRow.Body>
                <Title as="span" size="sm">
                  {title}
                </Title>
              </ListRow.Body>
              <ListRow.Meta>{minutes} min</ListRow.Meta>
            </ListRow>
          </li>
        ))}
      </ul>
    </div>
  )
}
