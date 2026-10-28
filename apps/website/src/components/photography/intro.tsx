import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Intro() {
  return (
    <header className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
      <Title as="h1" size="xl">
        Photo
        <br />
        <Title as="span" size="xl" weight="black">
          graphs<span className="text-accent-brand">.</span>
        </Title>
      </Title>
      <Typography weight="medium">
        On film, mostly. Lisbon, mostly before seven. Grouped into series since 2019.
      </Typography>
    </header>
  )
}
