import { SectionNav } from '@core/ui/section-nav/section-nav'
import { createFileRoute } from '@tanstack/react-router'

const sections = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience', hint: 'Twelve years, five chapters' },
  { id: 'education', label: 'Education & recognition' },
  { id: 'languages', label: 'Languages' },
  { id: 'outside-work', label: 'Outside work' },
  { id: 'references', label: 'References', hint: 'Full contacts on request' },
  { id: 'contact', label: 'Contact' },
]

function About() {
  return (
    <main>
      <SectionNav>
        {sections.map(({ id, label }) => (
          <SectionNav.Link key={id} href={`#${id}`}>
            {label}
          </SectionNav.Link>
        ))}
      </SectionNav>
    </main>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({ meta: [{ title: 'About - Patrick Roelofs' }] }),
})
