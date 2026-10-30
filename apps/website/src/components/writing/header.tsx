import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { mockImage } from '@/mock/image'

export function Header() {
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
        <div className="flex flex-col gap-1.5 pt-3.5">
          <Label size="xs" render={<span />}>
            Essay
          </Label>
          <Label size="xs" render={<span />}>
            14 Oct 2026
          </Label>
          <Label size="xs" render={<span />}>
            9 min read
          </Label>
        </div>
        <div className="flex flex-col gap-fluid-m">
          <Title as="h1" size="xl">
            Designing for{' '}
            <Title as="span" size="xl" weight="black">
              4am
            </Title>
          </Title>
          <Typography size="xl">
            What three night shifts on a hospital ward taught me about handover screens, and why the best change we made
            was deleting things.
          </Typography>
        </div>
      </div>
      <figure className="flex flex-col gap-3">
        <Image
          priority
          ratio="16/9"
          label="lead image, wide"
          src={mockImage('lead image, wide', 1600, 900)}
          alt="lead image, wide"
        />
        <Label size="xs">
          <figcaption>Ward 4B at shift change, Amsterdam.</figcaption>
        </Label>
      </figure>
    </header>
  )
}
