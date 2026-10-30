import { useState } from 'react'
import { Button } from '@/components/ui/button/button'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { mockImage } from '@/mock/image'
import { Rail } from '../photo-series/rail'
import { series } from './series'

const places = ['All', 'Lisbon', 'Porto', 'Tagus'] as const

export function AllSeries() {
  const [place, setPlace] = useState<(typeof places)[number]>('All')
  const shown = series.filter((s) => place === 'All' || s.place === place)

  return (
    <>
      <Rail tone="navy" />
      <section aria-labelledby="all-series-title" className="flex flex-col gap-fluid-xl pt-fluid-l">
        <div className="grid items-center gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <Title as="h2" size="xs" weight="bold" id="all-series-title">
            All series
          </Title>
          <div className="flex flex-wrap gap-1.5">
            {places.map((p) => (
              <Button
                key={p}
                size="sm"
                variant={p === place ? 'primary' : 'ghost'}
                aria-pressed={p === place}
                onClick={() => setPlace(p)}
              >
                {p}
                <span className="text-xs opacity-60">
                  {p === 'All' ? series.length : series.filter((s) => s.place === p).length}
                </span>
              </Button>
            ))}
          </div>
        </div>
        <ul className="flex flex-col gap-fluid-2xl">
          {shown.map(({ name, year, place, film, frames, tones: [a, b, c], description }) => (
            <li key={name}>
              {/* TODO: only Night ferries has a page yet */}
              <a
                href="/photography/night-ferries"
                className="group grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]"
              >
                <div className="flex flex-col gap-2.5 pt-1.5">
                  <span className="group-hover:text-accent-brand">
                    <Title as="h3" size="xs" weight="bold">
                      {name}
                    </Title>
                  </span>
                  <span className="opacity-60">
                    <Label size="xs" render={<span />}>
                      {year} · {place}
                      <br />
                      {film} · {frames} frames
                    </Label>
                  </span>
                  <div className="max-w-[28ch] opacity-85">
                    <Typography size="sm">{description}</Typography>
                  </div>
                </div>
                <div className="grid h-[clamp(200px,22vw,320px)] grid-cols-[2fr_1fr_1fr] gap-2">
                  {[a, b, c].map((tone, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: fixed trio of placeholders
                    <div key={i} className="overflow-hidden rounded-[20px]">
                      <Image ratio="fill" tone={tone} src={mockImage(`${name}-${i}`, i === 0 ? 1200 : 600, 800)} />
                    </div>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
