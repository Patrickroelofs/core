import { useState } from 'react'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { mockImage } from '@/mock/image'
import { projects } from './projects'

const filters = [
  { value: 'All', word: 'all work,' },
  { value: 'Personal', word: 'personal projects,' },
] as const

type Filter = (typeof filters)[number]['value']

export function AllProjects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [hovered, setHovered] = useState<string>(projects[0].title)
  const shown = projects.filter((p) => filter === 'All' || p.category === filter)
  const current = shown.find((p) => p.title === hovered) ?? shown[0]

  return (
    <div className="flex flex-col gap-12 pt-12">
      <Title as="p" size="md">
        Show me{' '}
        {filters.map(({ value, word }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className="focus-ring mx-[.12em] inline-block cursor-pointer rounded-pill px-[.35em] ring-1 ring-border-default transition-colors aria-pressed:bg-navy aria-pressed:text-snow"
          >
            {word}
          </button>
        ))}
      </Title>
      <div className="grid gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <ul className="border-t border-border-default">
          {shown.map(({ title, year, category }) => (
            <li key={title} id={title.toLowerCase().replace(/ /g, '-')} className="scroll-mt-20">
              <ListRow
                render={
                  <a
                    // only Shiftboard has a case study so far
                    href={title === projects[0].title ? '/projects/patrickroelofs' : '#'}
                    onMouseEnter={() => setHovered(title)}
                    onFocus={() => setHovered(title)}
                  />
                }
                // dim the rows that aren't previewed
                style={{ opacity: title === current.title ? 1 : 0.45 }}
              >
                <ListRow.Lead>{year}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="sm">
                    {title}
                  </Title>
                </ListRow.Body>
                <ListRow.Meta>{category}</ListRow.Meta>
              </ListRow>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <div className="sticky top-8 flex flex-col gap-3.5">
            <div className="overflow-hidden rounded-3xl">
              <Image
                ratio="4/3"
                tone={current.tone}
                label={current.image}
                src={mockImage(current.image, 1200, 900)}
                alt={current.image}
              />
            </div>
            <Typography>{current.description}</Typography>
            <Label size="xs" render={<span />}>
              {current.role}
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}
