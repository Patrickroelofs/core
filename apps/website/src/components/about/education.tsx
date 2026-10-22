import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const studied = [
  { years: '2007 — 11', title: 'BA Graphic Design', org: 'HKU, Utrecht' },
  { years: '2016', title: 'Interaction Design Specialisation', org: 'UC San Diego (online)' },
  { years: '2019', title: 'Front-end Masters', org: 'Self-directed, 6 months' },
]

export function Education() {
  return (
    <LabeledSection id="education" tone="azure">
      <LabeledSection.Label>Education</LabeledSection.Label>
      <LabeledSection.Content>
        <ul className="  ">
          {studied.map(({ years, title, org }) => (
            <li key={title}>
              <ListRow>
                <ListRow.Body>
                  <Title as="span" size="xs" weight="bold">
                    {title}
                  </Title>
                  <Title as="span" size="xs">{` · ${org}`}</Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs" render={<span />}>
                    {years}
                  </Label>
                </ListRow.Meta>
              </ListRow>
            </li>
          ))}
        </ul>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
