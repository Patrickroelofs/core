import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'

export function Clients() {
  return (
    <LabeledSection id="clients" tone="azure">
      <LabeledSection.Label>Worked with</LabeledSection.Label>
      <LabeledSection.Content>
        <Title as="p" size="md">
          Shiftboard, Loop Transit, Mesa Labs, Carris, Studio Norte, UMC Utrecht, GVB and Total Identity,{' '}
          <span className="opacity-45">plus a handful of teams that prefer not to be named.</span>
        </Title>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
