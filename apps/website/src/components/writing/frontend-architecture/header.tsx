import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Header() {
  return (
    <header className="grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
      <div className="flex flex-col gap-1.5 pt-3.5">
        <Label size="xs" render={<span />}>
          Essay
        </Label>
        <Label size="xs" render={<span />}>
          24 Oct 2026
        </Label>
        <Label size="xs" render={<span />}>
          5 min read
        </Label>
      </div>
      <div className="flex flex-col gap-fluid-m">
        <Title as="h1" size="xl">
          Frontend architecture for the{' '}
          <Title as="span" size="xl" weight="black">
            agentic future
          </Title>
        </Title>
        <Typography size="xl">
          How I structure this repo so a person, or an agent, can find, change and verify anything without reading
          everything.
        </Typography>
      </div>
    </header>
  )
}
