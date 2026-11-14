import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Intro() {
  return (
    <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
      <Title as="h1" size="xl">
        Get in
        <br />
        <Title as="span" size="xl" weight="black">
          touch<span className="text-accent-brand">.</span>
        </Title>
      </Title>
      <Typography weight="medium">
        Patrick Roelofs
        <br /> Frontend developer, the Netherlands
      </Typography>
    </div>
  )
}
