import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Intro() {
  return (
    <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
      <Title as="h1" size="xl">
        Priv
        <Title as="span" size="xl" weight="black">
          acy<span className="text-accent-brand">.</span>
        </Title>
      </Title>
      <Typography weight="medium">
        patrickroelofs.com
        <br /> Last updated 14 November 2026
      </Typography>
    </div>
  )
}
