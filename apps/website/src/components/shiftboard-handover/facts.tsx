import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

// TODO: mock data, replace with real content
const facts = [['Role', 'Lead designer, front-end']] as const

export function Facts() {
  return (
    <div className="mt-fluid-3xl flex flex-col gap-fluid-xl">
      <dl className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
        {facts.map(([k, v]) => (
          <div key={k} className="flex flex-col gap-2 border-t-[1.5px] border-navy pt-3.5">
            <Label size="xs" render={<dt />}>
              {k}
            </Label>
            <Typography weight="medium" render={<dd />}>
              {v}
            </Typography>
          </div>
        ))}
      </dl>
      <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
        <div className="hidden md:block" />
        <div className="max-w-[46ch]">
          <Title as="p" size="sm">
            This case study is a handover of my personal website and portfolio, which I designed and built. It was
            created to showcase my work and skills as a designer and developer.
          </Title>
        </div>
      </div>
    </div>
  )
}
