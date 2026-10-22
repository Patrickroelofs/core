import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

// TODO: mock data, replace with real content
const facts = [
  ['Client', 'Shiftboard'],
  ['Role', 'Lead designer, front-end'],
  ['Team', '6 designers, 14 engineers'],
  ['Timeline', '2019 — 2021'],
  ['Platform', 'Ward tablets, web'],
] as const

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
        <div className="max-w-[32ch]">
          <Title as="p" size="sm">
            The old handover was accurate, complete and almost never read. We rebuilt it around what the next nurse
            needs to do in the next hour.
          </Title>
        </div>
      </div>
    </div>
  )
}
