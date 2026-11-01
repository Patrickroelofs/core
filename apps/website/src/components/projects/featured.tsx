import { imageSrc } from '@/components/content-image'
import { EmphasizedTitle } from '@/components/emphasized-title'
import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Typography } from '@/components/ui/typography/typography'
import { projects } from '@/content/content'

export function Featured() {
  const project = projects.find((p) => p.featured) ?? projects[0]
  if (!project) return null
  const { path, title, emphasis, category, year, description, cover } = project

  return (
    <a href={path} className="flex flex-col gap-6">
      <div className="relative overflow-hidden rounded-3xl">
        <Image priority ratio="16/9" label={cover.alt} src={imageSrc(cover)} alt={cover.alt} />
        <span className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
          <Tag>Featured</Tag>
          <Tag tone="snow">
            {category} · {year}
          </Tag>
        </span>
      </div>
      <div className="grid items-end gap-6 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <EmphasizedTitle as="h2" size="xl" title={title} emphasis={emphasis} />
        <Typography size="lg">{description}</Typography>
      </div>
    </a>
  )
}
