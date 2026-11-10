import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

const facts = [
  ['Role', 'Design and development'],
  ['Platform', 'Web, works offline'],
  ['Stack', 'TypeScript, TanStack Start, Postgres'],
  ['Status', 'In development'],
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
        <div className="max-w-[46ch]">
          <Title as="p" size="sm">
            Cascade is a fast, tree-based outliner for ideas, notes and structured work. Everything is a line, and lines
            nest inside lines as deep as you like.
          </Title>
        </div>
      </div>
    </div>
  )
}
