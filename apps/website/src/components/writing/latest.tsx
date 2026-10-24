import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { posts } from './posts'

export function Latest() {
  const { date, year, minutes } = posts[0]
  return (
    <a
      href="/writing/frontend-architecture-for-the-agentic-future"
      className="focus-ring grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]"
    >
      <div className="flex flex-col gap-1.5 pt-3">
        <Label size="xs" render={<span />}>
          Latest
        </Label>
        <Label size="xs" render={<span />}>
          {date} {year} · {minutes}
        </Label>
      </div>
      <div className="flex flex-col gap-fluid-m">
        <Title as="h2" size="xl">
          Frontend architecture for the{' '}
          <Title as="span" size="xl" weight="black">
            agentic future
          </Title>
        </Title>
        <Typography size="xl">
          How I structure this repo so a person, or an agent, can find, change and verify anything without reading
          everything.
        </Typography>
        <span className="font-semibold text-accent-brand">Read the essay →</span>
      </div>
    </a>
  )
}
