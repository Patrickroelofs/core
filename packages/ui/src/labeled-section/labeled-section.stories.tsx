import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from '../typography/typography'
import { LabeledSection } from './labeled-section'

const meta = { title: 'LabeledSection', component: LabeledSection } satisfies Meta<typeof LabeledSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { id: 'experience' },
  render: (args) => (
    <LabeledSection {...args}>
      <LabeledSection.Label hint="Twelve years, five chapters">Experience</LabeledSection.Label>
      <LabeledSection.Content>
        <Typography>I studied graphic design before I ever touched a product.</Typography>
      </LabeledSection.Content>
    </LabeledSection>
  ),
}
