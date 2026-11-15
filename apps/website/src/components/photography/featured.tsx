import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { Rail } from '../photo-series/rail'

// newest first; `images` are the large tile and the two small ones
const series = [
  {
    href: '/photography/grossglockner',
    title: 'Grossglockner',
    tag: 'Grossglockner · 2025',
    description: 'Photographs from the Grossglockner, Austria, taken on 35mm film.',
    images: ['grossglockner/03', 'grossglockner/04', 'grossglockner/02'],
  },
  {
    href: '/photography/texel',
    title: 'Texel',
    tag: 'Texel · 2024',
    description: 'Photographs from Texel, the Netherlands, taken on a Praktica TL2.',
    images: ['texel/000008500019', 'texel/000008510009', 'texel/000008500016'],
  },
]

export function Featured() {
  return (
    <>
      <Rail tone="coral" space="3xl" />
      <section aria-label="Photo series" className="flex flex-col gap-fluid-2xl pt-fluid-l">
        {series.map(({ href, title, tag, description, images: [large, top, bottom] }, i) => (
          <a
            key={href}
            href={href}
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8"
          >
            <div className="grid aspect-[4/3] grid-cols-[2fr_1fr] grid-rows-2 gap-2">
              <div className="row-span-2 overflow-hidden rounded-3xl">
                <Image ratio="fill" src={`/photography/${large}.jpg`} alt="" priority={i === 0} />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <Image ratio="fill" src={`/photography/${top}.jpg`} alt="" />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <Image ratio="fill" src={`/photography/${bottom}.jpg`} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="flex gap-1.5">
                <Tag>Photo series</Tag>
                <Tag appearance="outline">{tag}</Tag>
              </span>
              <Title as="h2" size="lg">
                {title}
              </Title>
              <div className="max-w-[40ch]">
                <Typography size="lg">{description}</Typography>
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  )
}
