import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { projects } from './projects'

export function Featured() {
  const { category, year, description, image } = projects[0]

  return (
    <a href="/projects/patrickroelofs" className="flex flex-col gap-6">
      <div className="relative overflow-hidden rounded-3xl">
        <Image ratio="16/9" label={image} />
        <span className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
          <Tag>Featured</Tag>
          <Tag tone="snow">
            {category} · {year}
          </Tag>
        </span>
      </div>
      <div className="grid items-end gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <Title as="h2" size="xl">
          Patrick{' '}
          <Title as="span" size="xl" weight="black">
            Roelofs
          </Title>
          .com
        </Title>
        <Typography size="lg">{description}</Typography>
      </div>
    </a>
  )
}
