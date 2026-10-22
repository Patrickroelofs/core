import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Intro() {
  return (
    <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
      <Title as="h1" size="xl">
        Notes &amp;{' '}
        <Title as="span" size="xl" weight="black">
          essays
        </Title>
        <span className="text-accent-brand">.</span>
      </Title>
      <Typography>On designing for people doing hard jobs. About once a month since 2023.</Typography>
    </div>
  )
}
