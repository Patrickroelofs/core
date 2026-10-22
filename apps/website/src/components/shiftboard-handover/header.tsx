import { Image } from '@/components/ui/image/image'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Header() {
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="flex flex-col gap-7">
        <Title as="h1" size="xl">
          Patrick
          <br />
          <Title as="span" size="xl" weight="black">
            Roelofs.com
          </Title>
        </Title>
        <div className="max-w-[36ch]">
          <Typography size="xl">Personal website and portfolio.</Typography>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl">
        <Image ratio="16/9" label="hero image, handover on a ward tablet" />
      </div>
    </header>
  )
}
