import { createFileRoute } from '@tanstack/react-router'
import { SectionNav } from '@/components/ui/section-nav/section-nav'
import { Contact } from '../components/about/contact'
import { Education } from '../components/about/education'
import { Experience } from '../components/about/experience'
import { Intro } from '../components/about/intro'
import { Languages } from '../components/about/languages'
import { OutsideWork } from '../components/about/outside-work'
import { Story } from '../components/about/story'
import { DarkSlabFooter } from '../components/dark-slab-footer'

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
        {sections.map(({ id, label }) => (
          <SectionNav.Link key={id} href={`#${id}`}>
            {label}
          </SectionNav.Link>
        ))}
      </SectionNav>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Story />
        <Experience />
        <Education />
        <Languages />
        <OutsideWork />
        <Contact />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({ meta: [{ title: 'About - Patrick Roelofs' }] }),
})
