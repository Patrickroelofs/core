import { Image } from '@/components/ui/image/image'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Header() {
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="flex flex-col gap-7">
        <a href="/projects" className="opacity-70">
          ← All work
        </a>
        <Title as="h1" size="xl">
          Shiftboard
          <br />
          <Title as="span" size="xl" weight="black">
            Handover<span className="text-accent-brand">.</span>
          </Title>
        </Title>
        <div className="max-w-[36ch]">
          <Typography size="xl">Rebuilding the night-shift handover for 40,000 nurses across 300 wards.</Typography>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl">
        <Image ratio="16/9" label="hero image, handover on a ward tablet" />
      </div>
    </header>
  )
}
