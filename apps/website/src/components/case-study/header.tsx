import { imageSrc } from '@/components/content-image'
import { EmphasizedTitle } from '@/components/emphasized-title'
import { Image } from '@/components/ui/image/image'
import { Typography } from '@/components/ui/typography/typography'
import type { Project } from '@/content/content'

export function Header({ project }: { project: Project }) {
  const { title, emphasis, description, cover } = project
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="flex flex-col gap-7">
        <EmphasizedTitle as="h1" size="xl" title={title} emphasis={emphasis} />
        <div className="max-w-[36ch]">
          <Typography size="xl">{description}</Typography>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl">
        <Image priority ratio="16/9" label={cover.alt} src={imageSrc(cover)} alt={cover.alt} />
      </div>
    </header>
  )
}
