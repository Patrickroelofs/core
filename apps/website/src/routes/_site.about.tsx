import { SectionNav } from '@core/ui/section-nav/section-nav'
import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

import { Contact } from '../components/about/contact'
import { Education } from '../components/about/education'
import { Experience } from '../components/about/experience'
import { Intro } from '../components/about/intro'
import { Languages } from '../components/about/languages'
import { OutsideWork } from '../components/about/outside-work'
import { Story } from '../components/about/story'

const main = css({ maxW: '[1400px]', mx: 'auto', p: 'gutter', pt: 'fluid.xl' })

const sections = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'languages', label: 'Languages' },
  { id: 'outside-work', label: 'Outside work' },
  { id: 'references', label: 'References' },
  { id: 'contact', label: 'Contact' },
] as const

function About() {
  return (
    <>
      <SectionNav>
        {sections.map(({ id, label }, i) => (
          <SectionNav.Link key={id} href={`#${id}`} number={String(i + 1).padStart(2, '0')}>
            {label}
          </SectionNav.Link>
        ))}
      </SectionNav>
      <main className={main}>
        <Intro />
        <Story />
        <Experience />
        <Education />
        <Languages />
        <OutsideWork />
        <Contact />
      </main>
    </>
  )
}

export const Route = createFileRoute('/_site/about')({
  component: About,
  head: () => ({ meta: [{ title: 'About - Patrick Roelofs' }] }),
})
