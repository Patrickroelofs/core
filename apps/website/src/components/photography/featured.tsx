import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { Rail } from '../photo-series/rail'
import { series } from './series'

const latest = series[1]

export function Featured() {
  const [a, b, c] = latest.tones
  return (
    <>
      <Rail tone="coral" space="3xl" />
      <section aria-label="Latest series" className="pt-fluid-l">
        <a
          href="/photography/night-ferries"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8"
        >
          <div className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-2">
            <div className="row-span-2 overflow-hidden rounded-3xl">
              <Image ratio="fill" tone={a} />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <Image ratio="fill" tone={b} />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <Image ratio="fill" tone={c} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-1.5">
              <Tag>Latest</Tag>
              <Tag appearance="outline">
                {latest.place} · {latest.year}
              </Tag>
            </span>
            <Title as="h2" size="lg">
              {latest.name}
            </Title>
            <div className="max-w-[40ch]">
              <Typography size="lg">{latest.description}</Typography>
            </div>
          </div>
        </a>
      </section>
    </>
  )
}
