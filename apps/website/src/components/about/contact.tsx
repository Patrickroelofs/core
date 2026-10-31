import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'

const links = [
  {
    label: 'Email',
    value: (
      <>
        contact@
        <wbr />
        patrickroelofs
        <wbr />
        .com
      </>
    ),
    href: 'mailto:contact@patrickroelofs.com',
  },
  { label: 'Profile', value: 'LinkedIn', href: 'https://www.linkedin.com/in/patrick-roelofs/' },
  { label: 'Code', value: 'GitHub', href: 'https://github.com/Patrickroelofs/' },
]

export function Contact() {
  return (
    <LabeledSection id="contact" tone="azure">
      <LabeledSection.Label>Contact</LabeledSection.Label>
      <LabeledSection.Content>
        <ul>
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
