import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './card'

const photo = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" fill="#0177bb"/><circle cx="110" cy="40" r="22" fill="#d65b5c"/><path d="M0 100 60 45l40 55z" fill="#50216a"/></svg>',
)}`

const meta = {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  render: () => (
    <Card render={<a href="#shiftboard" />}>
      <Card.Media>shiftboard: dashboard</Card.Media>
      <Card.Body>
        <Card.Title>Shiftboard</Card.Title>
        <Card.Meta>2024–26</Card.Meta>
        <Card.Description>
          Scheduling for night-shift nurses. Swap requests went from twenty minutes to two.
        </Card.Description>
        <Card.Tag>Lead designer</Card.Tag>
      </Card.Body>
    </Card>
  ),
}

export const Static: Story = {
  render: () => (
    <Card>
      <Card.Media>loop transit: rider app</Card.Media>
      <Card.Body>
        <Card.Title>Loop Transit</Card.Title>
        <Card.Meta>2023</Card.Meta>
        <Card.Description>A rider app that tells the truth about delays.</Card.Description>
        <Card.Tag tone="azure">Design + front-end</Card.Tag>
      </Card.Body>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card render={<a href="#fieldkit" />}>
      <Card.Media>
        <img src={photo} alt="Abstract landscape" />
      </Card.Media>
      <Card.Body>
        <Card.Title>Fieldkit</Card.Title>
        <Card.Meta>2021</Card.Meta>
        <Card.Tag tone="plum">Founding designer</Card.Tag>
      </Card.Body>
    </Card>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <Card.Title>Civic Atlas</Card.Title>
        <Card.Meta>2019</Card.Meta>
      </Card.Body>
    </Card>
  ),
}

export const Ratios: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['16/10', '16/9', '4/3', '1/1'] as const).map((ratio) => (
        <Card key={ratio}>
          <Card.Media ratio={ratio}>ratio: {ratio}</Card.Media>
        </Card>
      ))}
    </div>
  ),
}

export const MediaTones: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: 420 }}>
      {(['light', 'dark', 'azure', 'coral'] as const).map((tone) => (
        <Card key={tone}>
          <Card.Media tone={tone} ratio="16/9">
            {tone}
          </Card.Media>
        </Card>
      ))}
    </div>
  ),
}

export const TagVariants: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <Card.Title>Tags</Card.Title>
        <Card.Meta>all tones</Card.Meta>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Card.Tag tone="coral">coral</Card.Tag>
          <Card.Tag tone="azure">azure</Card.Tag>
          <Card.Tag tone="plum">plum</Card.Tag>
          <Card.Tag tone="navy">navy</Card.Tag>
          <Card.Tag tone="navy" appearance="outline">
            outline
          </Card.Tag>
          <Card.Tag tone="navy" size="md">
            md
          </Card.Tag>
        </div>
      </Card.Body>
    </Card>
  ),
}
