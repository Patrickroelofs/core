import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

// TODO: mock data, replace with real content
const results = [
  { value: '−38%', label: 'Handover time per shift' },
  { value: '40,000', label: 'Nurses using it every day' },
  { value: '41 → 6', label: 'Settings, after we cut the rest' },
] as const

export function Outcome() {
  return (
    <LabeledSection id="outcome" tone="azure">
      <LabeledSection.Label hint="03">What changed</LabeledSection.Label>
      <LabeledSection.Content>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {results.map(({ value, label }) => (
            <li key={label} className="flex flex-col gap-2.5">
              <Title as="span" size="xl">
                {value}
              </Title>
              <div className="max-w-[22ch]">
                <Typography weight="medium">{label}</Typography>
              </div>
            </li>
          ))}
        </ul>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
