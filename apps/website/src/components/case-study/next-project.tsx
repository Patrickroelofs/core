import { EmphasizedTitle } from '@/components/emphasized-title'
import { Label } from '@/components/ui/label/label'
import { projects } from '@/content/content'

export function NextProject({ current }: { current: string }) {
  const index = projects.findIndex((p) => p.slug === current)
  const next = projects[(index + 1) % projects.length]
  if (!next || next.slug === current) return null
  return (
    <a
      href={next.path}
      className="mt-fluid-4xl flex flex-col gap-5 border-t-[3px] border-coral pt-5 hover:text-accent-brand"
    >
      <span className="flex justify-between">
        <Label size="xs" render={<span />}>
          Next project
        </Label>
        <Label size="xs" render={<span />}>
          {next.category} · {next.year}
        </Label>
      </span>
      <EmphasizedTitle
        as="span"
        size="xl"
        title={`${next.title} →`}
        emphasis={next.emphasis ?? next.title.split(' ').at(-1)}
      />
    </a>
  )
}
