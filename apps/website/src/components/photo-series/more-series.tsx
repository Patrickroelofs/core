import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { mockImage } from '@/mock/image'
import { series } from '../photography/series'

const more = series.slice(2, 5)

export function MoreSeries() {
  return (
    <section aria-labelledby="more-series-title" className="mt-fluid-4xl flex flex-col gap-6">
      <Title as="h2" size="xs" weight="bold" id="more-series-title">
        More series
      </Title>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {more.map(({ name, year, frames, tones: [tone] }) => (
          <li key={name}>
            {/* TODO: other series have no pages yet */}
            <a href="/photography/night-ferries" className="flex flex-col gap-3 hover:text-accent-brand">
              <div className="overflow-hidden rounded-3xl">
                <Image ratio="4/3" tone={tone} src={mockImage(name, 1200, 900)} />
              </div>
              <span className="flex items-baseline justify-between gap-4">
                <Title as="span" size="xs" weight="bold">
                  {name}
                </Title>
                <span className="opacity-60">
                  <Label size="xs" render={<span />}>
                    {year} · {frames} frames
                  </Label>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
