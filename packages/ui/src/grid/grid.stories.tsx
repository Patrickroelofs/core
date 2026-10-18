import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { Grid } from './grid'

const Tile = ({ children }: { children: ReactNode }) => (
  <div style={{ background: '#e4e4e4', borderRadius: 12, padding: 24, minHeight: 120, height: '100%' }}>{children}</div>
)

const meta = { title: 'Grid', component: Grid } satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Bento: Story = {
  render: (args) => (
    <Grid {...args} layout="bento">
      <Grid.Item span={8} rowSpan={2}>
        <Tile>span 8 × 2</Tile>
      </Grid.Item>
      <Grid.Item span={4}>
        <Tile>span 4</Tile>
      </Grid.Item>
      <Grid.Item span={4}>
        <Tile>span 4</Tile>
      </Grid.Item>
      <Grid.Item span={4}>
        <Tile>span 4</Tile>
      </Grid.Item>
      <Grid.Item span={4}>
        <Tile>span 4</Tile>
      </Grid.Item>
      <Grid.Item span={4}>
        <Tile>span 4</Tile>
      </Grid.Item>
    </Grid>
  ),
}

export const Flex: Story = {
  render: (args) => (
    <Grid {...args} layout="flex">
      {['One', 'Two', 'Three', 'Four', 'Five'].map((t) => (
        <Grid.Item key={t}>
          <Tile>{t}</Tile>
        </Grid.Item>
      ))}
    </Grid>
  ),
}

export const FluidGap: Story = {
  args: { gap: 'l' },
  render: Bento.render,
}
