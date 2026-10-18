import { Button } from '@core/ui/button/button'
import { IconButton } from '@core/ui/button/icon-button'
import { Card } from '@core/ui/card/card'
import { Grid } from '@core/ui/grid/grid'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { ListRow } from '@core/ui/list-row/list-row'
import { Tag } from '@core/ui/tag/tag'
import { Title } from '@core/ui/title/title'
import { Typography } from '@core/ui/typography/typography'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { css } from '../../styled-system/css'

const page = css({ display: 'flex', flexDirection: 'column', gap: '12', maxW: '[1400px]', mx: 'auto', p: 'gutter' })
const group = css({ display: 'flex', flexDirection: 'column', gap: '6' })
const groupHead = css({ display: 'flex', alignItems: 'baseline', gap: '4', borderBottomWidth: '[1.5px]', pb: '3' })
const row = css({ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3' })
const stack = css({ display: 'flex', flexDirection: 'column', gap: '2' })

function Demo({ name, desc, children }: { name: string; desc: string; children: ReactNode }) {
  return (
    <div id={name} className={stack}>
      <div className={row}>
        <Title as="h3" size="xs" weight="bold">
          {name}
        </Title>
        <Label size="xs" render={<span />}>
          {desc}
        </Label>
      </div>
      {children}
    </div>
  )
}

function Group({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className={group}>
      <div className={groupHead}>
        <Title as="h2" size="md" weight="bold">
          {title}
        </Title>
        <Label size="xs" render={<span />}>{`@core/ui/${id}`}</Label>
      </div>
      {children}
    </section>
  )
}

function Library() {
  return (
    <main className={page}>
      <div className={stack}>
        <Title as="h1" size="xl">
          Component{' '}
          <Title as="span" size="xl" weight="black">
            library
          </Title>
        </Title>
        <Typography size="lg">Every @core/ui component, rendered live. Hover and click to see states.</Typography>
      </div>
      <Group id="button" title="Button">
        <Demo name="Button" desc="Variants and sizes">
          <div className={row}>
            {(['primary', 'accent', 'secondary', 'ghost', 'link'] as const).map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
            <Button size="sm">sm</Button>
            <Button size="lg" icon="→">
              lg
            </Button>
            <Button disabled>disabled</Button>
          </div>
        </Demo>
        <Demo name="IconButton" desc="Icon-only, label required">
          <div className={row}>
            <IconButton label="Next" icon="→" />
            <IconButton label="Open" icon="↗" size="sm" />
            <IconButton label="Open" icon="↗" size="lg" />
          </div>
        </Demo>
      </Group>
      <Group id="tag" title="Tag">
        <Demo name="Tag" desc="Tones and appearances">
          <div className={row}>
            {(['coral', 'azure', 'plum', 'navy'] as const).map((tone) => (
              <Tag key={tone} tone={tone}>
                {tone}
              </Tag>
            ))}
            <Tag appearance="outline">outline</Tag>
            <Tag appearance="soft">soft</Tag>
            <Tag size="sm">sm</Tag>
          </div>
        </Demo>
      </Group>
      <Group id="typography" title="Typography">
        <Demo name="Title" desc="Sizes xs–xl, weights light/bold/black">
          <Title size="lg">Light</Title>
          <Title size="lg" weight="bold">
            Bold
          </Title>
          <Title size="lg" weight="black">
            Black
          </Title>
        </Demo>
        <Demo name="Typography" desc="Body sizes">
          {(['xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
            <Typography key={size} size={size}>
              Body {size}: I turn tangled workflows into tools.
            </Typography>
          ))}
        </Demo>
        <Demo name="Label" desc="sm and xs">
          <Label render={<span />}>Label sm</Label>
          <Label size="xs" render={<span />}>
            Label xs
          </Label>
        </Demo>
      </Group>
      <Group id="layout" title="Layout">
        <Demo name="Grid" desc="12-column bento">
          <Grid gap="s">
            <Grid.Item span={8}>
              <Image label="span 8" />
            </Grid.Item>
            <Grid.Item span={4}>
              <Image label="span 4" tone="azure" />
            </Grid.Item>
          </Grid>
        </Demo>
        <Demo name="Image" desc="Placeholder tones">
          <Grid gap="s">
            {(['light', 'dark', 'azure', 'coral'] as const).map((tone) => (
              <Grid.Item key={tone} span={3}>
                <Image label={`tone: ${tone}`} tone={tone} ratio="16/9" />
              </Grid.Item>
            ))}
          </Grid>
        </Demo>
      </Group>
      <Group id="card" title="Card">
        <Demo name="Card" desc="Link card with reveal, and a static surface">
          <Grid gap="m">
            <Card render={<Grid.Item span={6} render={<a href="#card" />} />}>
              <Card.Media>
                <Image label="shiftboard: cover" />
                <Card.Reveal tone="coral">View case study</Card.Reveal>
              </Card.Media>
              <Card.Body>
                <Title as="h3">Shiftboard</Title>
                <Typography>Scheduling for night-shift nurses.</Typography>
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
            <Card data-surface="plum" render={<Grid.Item span={6} />}>
              <Card.Body>
                <Title as="h3">Static</Title>
                <Typography>No link, no lift.</Typography>
              </Card.Body>
            </Card>
          </Grid>
        </Demo>
      </Group>
      <Group id="list-row" title="ListRow">
        <Demo name="ListRow" desc="CV and list rows">
          <Card>
            <Card.Body>
              {[
                ['2024 — now', 'Independent designer', 'Lisbon'],
                ['2020 — 2024', 'Founding designer', 'Remote'],
              ].map(([years, role, where]) => (
                <ListRow key={years}>
                  <ListRow.Lead>{years}</ListRow.Lead>
                  <ListRow.Body>
                    <Title as="span" size="xs" weight="bold">
                      {role}
                    </Title>
                  </ListRow.Body>
                  <ListRow.Meta>
                    <Label size="xs">{where}</Label>
                  </ListRow.Meta>
                </ListRow>
              ))}
            </Card.Body>
          </Card>
        </Demo>
      </Group>
    </main>
  )
}

export const Route = createFileRoute('/library')({ component: Library })
