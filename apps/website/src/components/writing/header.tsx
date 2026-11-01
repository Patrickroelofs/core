import { imageSrc } from '@/components/content-image'
import { EmphasizedTitle } from '@/components/emphasized-title'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Typography } from '@/components/ui/typography/typography'
import type { Post } from '@/content/content'

export function Header({ post }: { post: Post }) {
  const { kicker, day, year, minutes, title, emphasis, description, cover } = post
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
        <div className="flex flex-col gap-1.5 pt-3.5">
          {kicker ? (
            <Label size="xs" render={<span />}>
              {kicker}
            </Label>
          ) : null}
          <Label size="xs" render={<span />}>
            {day} {year}
          </Label>
          <Label size="xs" render={<span />}>
            {minutes} min read
          </Label>
        </div>
        <div className="flex flex-col gap-fluid-m">
          <EmphasizedTitle as="h1" size="xl" title={title} emphasis={emphasis} />
          <Typography size="xl">{description}</Typography>
        </div>
      </div>
      {cover ? (
        <figure className="flex flex-col gap-3">
          <Image priority ratio="16/9" label={cover.alt} src={imageSrc(cover)} alt={cover.alt} />
          {cover.caption ? (
            <Label size="xs">
              <figcaption>{cover.caption}</figcaption>
            </Label>
          ) : null}
        </figure>
      ) : null}
    </header>
  )
}
