import { useState } from 'react'
import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

const experience = [
  {
    short: '25',
    role: 'Medior frontend developer',
    years: 'Feb 2025 — present',
    text: 'I work on frontend architecture and help adopt AI in the frontend workflow while keeping it efficient, maintainable and of high-quality, while helping customers balance costs with useful additions to their software.',
    wins: ['Frontend architecture', 'AI development', 'Product decisions'],
  },
  {
    short: '23',
    role: 'Junior frontend developer',
    years: 'Jun 2023 — Feb 2025',
    text: 'I learned the ropes across different customers and found my place in a changing industry.',
    wins: ['Customer projects', 'Learning'],
  },
  {
    short: '23',
    role: 'Frontend intern',
    years: 'Jan 2023 — Jun 2023',
    text: 'I explored gamification in a survey app to encourage more people to complete surveys.',
    wins: ['Gamification', 'Survey app'],
  },
] as const

export function Experience() {
  const [active, setActive] = useState(0)
  const cur = experience[active]

  return (
    <LabeledSection id="experience" tone="navy">
      <LabeledSection.Label hint="Pick a role for details">Experience</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-fluid-m md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <ul className="flex flex-col">
            {experience.map(({ role, short: yy }, i) => (
              <li key={role}>
                <button
                  type="button"
                  className="flex cursor-pointer items-baseline gap-4 py-1 text-left opacity-25 transition-opacity hover:opacity-100 aria-pressed:opacity-100 focus-ring [--focus-offset:4px]"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  <Label size="xs" render={<span className="min-w-9" />}>
                    {yy}
                  </Label>
                  <Title as="span" size="sm">
                    {role}
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
              {cur.years} - Iquality
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
