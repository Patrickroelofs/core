import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { Rail } from '../photo-series/rail'

export function Featured() {
  return (
    <>
      <Rail tone="coral" space="3xl" />
      <section aria-label="Photo series" className="pt-fluid-l">
        <a
          href="/photography/texel"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8"
        >
          <div className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-2">
            <div className="row-span-2 overflow-hidden rounded-3xl">
              <Image ratio="fill" src="/photography/texel/000008500019.jpg" alt="" priority />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <Image ratio="fill" src="/photography/texel/000008510009.jpg" alt="" />
            </div>
            <div className="overflow-hidden rounded-[20px]">
              <Image ratio="fill" src="/photography/texel/000008500016.jpg" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex gap-1.5">
              <Tag>Photo series</Tag>
              <Tag appearance="outline">Texel · 2024</Tag>
            </span>
            <Title as="h2" size="lg">
              Texel
            </Title>
            <div className="max-w-[40ch]">
              <Typography size="lg">Photographs from Texel, the Netherlands, taken on a Praktica TL2.</Typography>
            </div>
          </div>
        </a>
      </section>
    </>
  )
}
