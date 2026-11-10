import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'

export function NextProject() {
  return (
    <a
      href="/projects/cascade"
      className="mt-fluid-4xl flex flex-col gap-5 border-t-[3px] border-coral pt-5 hover:text-accent-brand"
    >
      <span className="flex justify-between">
        <Label size="xs" render={<span />}>
          Next project
        </Label>
        <Label size="xs" render={<span />}>
          Personal · 2026
        </Label>
      </span>
      <Title as="span" size="xl">
        Cascade
        <Title as="span" size="xl" weight="black">
          list
        </Title>{' '}
        →
      </Title>
    </a>
  )
}
