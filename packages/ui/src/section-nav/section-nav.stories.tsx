import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteHeader } from '../site-header/site-header'
import { SectionNav } from './section-nav'

const meta = {
  title: 'SectionNav',
  component: SectionNav,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SectionNav>

export default meta
type Story = StoryObj<typeof meta>

const sections = ['Story', 'Experience', 'Education', 'Languages', 'Outside work', 'References', 'Contact']
const slug = (label: string) => label.toLowerCase().replace(/ /g, '-')
const page = { padding: '24px max(24px, calc((100% - 1400px) / 2 + 24px))' }
const block = (i: number) => ({
  minHeight: i === sections.length - 1 ? 240 : 520,
  marginTop: 64,
  paddingTop: 16,
  borderTop: '1.5px solid #192036',
  font: '800 22px Onest Variable, sans-serif',
})

function Links() {
  return sections.map((label, i) => (
    <SectionNav.Link key={label} href={`#${slug(label)}`} number={String(i + 1).padStart(2, '0')}>
      {label}
    </SectionNav.Link>
  ))
}

function Sections() {
  return (
    <div style={page}>
      {sections.map((label, i) => (
        <section key={label} id={slug(label)} style={block(i)}>
          {label}
        </section>
      ))}
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <>
      <div style={{ ...page, height: 240, font: '200 88px/1 Onest Variable, sans-serif' }}>About me.</div>
      <SectionNav>
        <Links />
      </SectionNav>
      <Sections />
    </>
  ),
}

export const UnderSiteHeader: Story = {
  render: () => (
    <>
      <SiteHeader hideOnScroll>
        <SiteHeader.Monogram href="#" name="Patrick Roelofs" />
        <SiteHeader.Rule />
      </SiteHeader>
      <div style={{ ...page, height: 240, font: '200 88px/1 Onest Variable, sans-serif' }}>About me.</div>
      <SectionNav>
        <Links />
      </SectionNav>
      <Sections />
    </>
  ),
}

export const Narrow: Story = {
  globals: { viewport: { value: 'mobile1' } },
  render: () => (
    <div style={{ maxWidth: 390 }}>
      <SectionNav>
        <Links />
      </SectionNav>
      <Sections />
    </div>
  ),
}
