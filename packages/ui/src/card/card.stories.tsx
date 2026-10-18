import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../label/label'
import { Tag } from '../tag/tag'
import { Title } from '../title/title'
import { Typography } from '../typography/typography'
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
        <Title as="h3">Shiftboard</Title>
        <Typography>Scheduling for night-shift nurses. Swap requests went from twenty minutes to two.</Typography>
        <Card.Footer>
          <Tag tone="coral" size="sm">
            Lead designer
          </Tag>
          <Label size="xs" render={<time dateTime="2024" />}>
            2024–26
          </Label>
        </Card.Footer>
      </Card.Body>
    </Card>
  ),
}

export const Static: Story = {
  render: () => (
    <Card>
      <Card.Media>loop transit: rider app</Card.Media>
      <Card.Body>
        <Title as="h3">Loop Transit</Title>
        <Typography>A rider app that tells the truth about delays.</Typography>
        <Card.Footer>
          <Tag tone="azure" size="sm">
            Design + front-end
          </Tag>
          <Label size="xs" render={<time dateTime="2023" />}>
            2023
          </Label>
        </Card.Footer>
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
        <Title as="h3">Fieldkit</Title>
        <Card.Footer>
          <Tag tone="plum" size="sm">
            Founding designer
          </Tag>
          <Label size="xs" render={<time dateTime="2021" />}>
            2021
          </Label>
        </Card.Footer>
      </Card.Body>
    </Card>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <Title as="h3">Civic Atlas</Title>
      </Card.Body>
    </Card>
  ),
}

export const ManyTags: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <Title as="h3">Many tags</Title>
        <Card.Footer>
          <Tag tone="coral" size="sm">
            Research
          </Tag>
          <Tag tone="azure" size="sm">
            Design
          </Tag>
          <Tag tone="plum" size="sm" appearance="outline">
            Front-end
          </Tag>
          <Label size="xs" render={<time dateTime="2022" />}>
            2022
          </Label>
        </Card.Footer>
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
        <Title as="h3">Tags</Title>
        <Card.Footer>
          <Tag tone="coral">coral</Tag>
          <Tag tone="azure">azure</Tag>
          <Tag tone="plum">plum</Tag>
          <Tag tone="navy">navy</Tag>
          <Tag tone="navy" appearance="outline">
            outline
          </Tag>
          <Tag tone="navy" size="md">
            md
          </Tag>
        </Card.Footer>
      </Card.Body>
    </Card>
  ),
}
