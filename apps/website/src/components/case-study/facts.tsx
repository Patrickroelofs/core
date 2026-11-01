import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import type { Project } from '@/content/content'

export function Facts({ project }: { project: Project }) {
  const { facts = [], intro } = project
  return (
    <div className="mt-fluid-3xl flex flex-col gap-fluid-xl">
      {facts.length > 0 ? (
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
          {facts.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2 border-t-[1.5px] border-navy pt-3.5">
              <Label size="xs" render={<dt />}>
                {label}
              </Label>
              <Typography weight="medium" render={<dd />}>
                {value}
              </Typography>
            </div>
          ))}
        </dl>
      ) : null}
      {intro ? (
        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <div className="hidden md:block" />
          <div className="max-w-[46ch]">
            <Title as="p" size="sm">
              {intro}
            </Title>
          </div>
        </div>
      ) : null}
    </div>
  )
}
