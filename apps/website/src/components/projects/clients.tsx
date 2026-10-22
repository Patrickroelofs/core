import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'

export function Clients() {
  return (
    <LabeledSection id="clients" tone="azure">
      <LabeledSection.Label>Worked on</LabeledSection.Label>
      <LabeledSection.Content>
        <Title as="p" size="md">
          Staatsbosbeheer, Damen, DLL{' '}
          <span className="opacity-45">plus a handful of other projects that prefer not to be named.</span>
        </Title>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
