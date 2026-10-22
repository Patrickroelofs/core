import { useState } from 'react'
import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

// TODO: mock data, replace with real content
const experience = [
  {
    short: '22',
    org: 'Independent',
    role: 'Independent',
    years: '2022 — now',
    place: 'Lisbon',
    text: 'Working with early-stage health and mobility teams on zero-to-one products, usually embedded for 2–6 months.',
    wins: ['8 clients', '3 launches', 'Lisbon + remote'],
  },
  {
    short: '18',
    org: 'Shiftboard',
    role: 'Lead designer',
    years: '2018 — 2022',
    place: 'Amsterdam',
    text: 'Built the design team from one to six. Led the night-shift handover tool used by 40,000 nurses across 300 wards.',
    wins: ['Handover −38%', 'Team of 6', 'Design system'],
  },
  {
    short: '14',
    org: 'Loop Transit',
    role: 'Product designer',
    years: '2014 — 2018',
    place: 'Utrecht',
    text: 'Designed the real-time departures app and the driver console. First role writing production front-end.',
    wins: ['App Store feature', '1.2M riders'],
  },
  {
    short: '12',
    org: 'Studio Norte',
    role: 'Designer',
    years: '2012 — 2014',
    place: 'Rotterdam',
    text: 'Wayfinding and timetable design for regional transport operators.',
    wins: ['Timetables for 6 regions'],
  },
  {
    short: '11',
    org: 'Total Identity',
    role: 'Intern',
    years: '2011',
    place: 'Amsterdam',
    text: 'Identity and print work. Learned to kern.',
    wins: ['Six months'],
  },
] as const

export function Experience() {
  const [active, setActive] = useState(0)
  const cur = experience[active]

  return (
    <LabeledSection id="experience" number="02" tone="navy">
      <LabeledSection.Label hint="Pick a role for details">Experience</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-fluid-m md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <ul className="flex flex-col list-none m-0 p-0">
            {experience.map(({ org, short: yy }, i) => (
              <li key={org}>
                <button
                  type="button"
                  className="flex cursor-pointer items-baseline gap-4 px-0 py-1 border-0 text-left opacity-25 transition-opacity hover:opacity-100 aria-pressed:opacity-100 focus-ring [--focus-offset:4px] motion-reduce:transition-none"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <Label size="xs" render={<span className="min-w-9" />}>
                    {yy}
                  </Label>
                  <Title as="span" size="xl">
                    {org}
                  </Title>
                </button>
              </li>
            ))}
          </ul>
          <div
            className="self-start flex flex-col gap-4 border-t-[3px] border-accent-brand pt-5 md:sticky md:top-[calc(var(--site-header-height,0px)_+_var(--section-nav-height,0px)_+_32px)]"
            aria-live="polite"
          >
            <Label size="xs" render={<span />}>
              {cur.years} · {cur.place}
            </Label>
            <Title as="h3" size="sm" weight="bold">
              {cur.role}
            </Title>
            <Typography>{cur.text}</Typography>
            <div className="flex flex-wrap gap-2">
              {cur.wins.map((w) => (
                <Tag key={w} tone="coral" appearance="outline" size="sm">
                  {w}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
