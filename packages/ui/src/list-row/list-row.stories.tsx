import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../label/label'
import { Title } from '../title/title'
import { ListRow } from './list-row'

const meta = { title: 'ListRow', component: ListRow } satisfies Meta<typeof ListRow>

export default meta
type Story = StoryObj<typeof meta>

const Row = ({ href }: { href?: string }) => (
  // biome-ignore lint/a11y/useAnchorContent: content is injected by ListRow via render
  <ListRow render={href ? <a href={href} /> : undefined}>
    <ListRow.Lead>2020 — 2024</ListRow.Lead>
    <ListRow.Body>
      <Title as="span" size="sm" weight="bold">
        Founding designer
      </Title>
      <Title as="span" size="sm">
        {' · Fieldkit'}
      </Title>
    </ListRow.Body>
    <ListRow.Meta>
      <Label>Remote</Label>
    </ListRow.Meta>
  </ListRow>
)

export const Default: Story = { render: () => <Row /> }

export const Link: Story = { render: () => <Row href="#" /> }

export const WithoutLead: Story = {
  render: () => (
    <ListRow>
      <ListRow.Body>
        <Title as="span" size="sm" weight="bold">
          Quiet interfaces
        </Title>
      </ListRow.Body>
      <ListRow.Meta>
        <Label>8 min</Label>
      </ListRow.Meta>
    </ListRow>
  ),
}
