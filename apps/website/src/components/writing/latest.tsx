import { EmphasizedTitle } from '@/components/emphasized-title'
import { Label } from '@/components/ui/label/label'
import { Typography } from '@/components/ui/typography/typography'
import { posts } from '@/content/content'

export function Latest() {
  const latest = posts[0]
  if (!latest) return null
  const { path, day, year, minutes, title, emphasis, description } = latest
  return (
    <a href={path} className="focus-ring grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
      <div className="flex flex-col gap-1.5 pt-3">
        <Label size="xs" render={<span />}>
          Latest
        </Label>
        <Label size="xs" render={<span />}>
          {day} {year} · {minutes} min
        </Label>
      </div>
      <div className="flex flex-col gap-fluid-m">
        <EmphasizedTitle as="h2" size="xl" title={title} emphasis={emphasis} />
        <Typography size="xl">{description}</Typography>
        <span className="font-semibold text-accent-brand">Read the essay →</span>
      </div>
    </a>
  )
}
