import { useState } from 'react'
import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'
import { type Post, postHref, posts } from './posts'

const topics = ['All', ...new Set(posts.map((p) => p.tag))]

export function Archive() {
  const [topic, setTopic] = useState('All')
  const shown = posts.filter((p) => topic === 'All' || p.tag === topic)
  const years = [...new Set(shown.map((p) => p.year))]

  return (
    <div className="flex flex-col gap-fluid-l">
      <div className="grid items-center gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
        <Title as="h2" size="xs" weight="bold">
          All writing
        </Title>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className="focus-ring cursor-pointer rounded-pill px-3.5 py-2 text-sm font-medium ring-1 ring-border-default transition-colors aria-pressed:bg-navy aria-pressed:text-snow"
            >
              {t} <span className="text-xs opacity-60">{posts.filter((p) => t === 'All' || p.tag === t).length}</span>
            </button>
          ))}
        </div>
      </div>
      {years.map((year) => (
        <div key={year} className="grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <Title as="h3" size="lg" weight="light">
            {year}
          </Title>
          <ul className="border-t border-border-default">
            {shown
              .filter((p: Post) => p.year === year)
              .map((p) => (
                <li key={p.title}>
                  <ListRow render={<a href={postHref(p)} />}>
                    <ListRow.Lead>{p.date}</ListRow.Lead>
                    <ListRow.Body>
                      <Title as="span" size="sm">
                        {p.title}
                      </Title>
                    </ListRow.Body>
                    <ListRow.Meta>
                      <Label size="xs" render={<span />}>
                        {p.tag} · {p.minutes}
                      </Label>
                    </ListRow.Meta>
                  </ListRow>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
