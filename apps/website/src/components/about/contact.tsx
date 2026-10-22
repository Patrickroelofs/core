import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const links = [
  { label: 'Email', value: 'hello@patrickroelofs.com', href: 'mailto:hello@patrickroelofs.com' },
  { label: 'Call', value: 'Book 20 minutes', href: '#' },
  { label: 'Profile', value: 'LinkedIn', href: '#' },
  { label: 'CV', value: 'Read.cv', href: '#' },
  { label: 'Code', value: 'GitHub', href: '#' },
]

export function Contact() {
  return (
    <LabeledSection id="contact" tone="azure">
      <LabeledSection.Label>Contact</LabeledSection.Label>
      <LabeledSection.Content>
        <ul className="  ">
          {links.map(({ label, value, href }) => (
            <li key={label}>
              <ListRow render={<a href={href} />}>
                <ListRow.Lead>{label}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="md">
                    {value}
                  </Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs" render={<span aria-hidden="true" />}>
                    ↗
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
