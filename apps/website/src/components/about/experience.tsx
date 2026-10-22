import { useState } from 'react'
import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { css } from '../../../styled-system/css'

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

const layout = css({
  display: 'grid',
  gridTemplateColumns: '[minmax(0, 1fr)]',
  gap: 'fluid.m',
  md: { gridTemplateColumns: '[minmax(0, 7fr) minmax(0, 5fr)]' },
})
const list = css({ display: 'flex', flexDirection: 'column', listStyle: 'none', m: '0', p: '0' })
const pick = css({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'baseline',
  gap: '4',
  py: '1',
  opacity: 0.25,
  transition: '[opacity .3s]',
  _hover: { opacity: 1 },
  '&[aria-pressed="true"]': { opacity: 1 },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'focusRing', outlineOffset: '[4px]' },
  _motionReduce: { transition: '[none]' },
})
const short = css({ minW: '9' })
const detail = css({
  alignSelf: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  borderTopWidth: '[3px]',
  borderTopStyle: 'solid',
  borderColor: 'accent.brand',
  pt: '5',
  md: {
    position: 'sticky',
    top: '[calc(var(--site-header-height, 0px) + var(--section-nav-height, 0px) + 32px)]',
  },
})
const wins = css({ display: 'flex', flexWrap: 'wrap', gap: '2' })

export function Experience() {
  const [active, setActive] = useState(0)
  const cur = experience[active]

  return (
    <LabeledSection id="experience" number="02" tone="navy">
      <LabeledSection.Label hint="Pick a role for details">Experience</LabeledSection.Label>
      <LabeledSection.Content>
        <div className={layout}>
          <ul className={list}>
            {experience.map(({ org, short: yy }, i) => (
              <li key={org}>
                <button type="button" className={pick} aria-pressed={active === i} onClick={() => setActive(i)}>
                  <Label size="xs" render={<span className={short} />}>
                    {yy}
                  </Label>
                  <Title as="span" size="xl">
                    {org}
                  </Title>
                </button>
              </li>
            ))}
          </ul>
          <div className={detail} aria-live="polite">
            <Label size="xs" render={<span />}>
              {cur.years} · {cur.place}
            </Label>
            <Title as="h3" size="sm" weight="bold">
              {cur.role}
            </Title>
            <Typography>{cur.text}</Typography>
            <div className={wins}>
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
