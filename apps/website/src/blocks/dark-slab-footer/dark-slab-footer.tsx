import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const socials = [
  { label: 'Read.cv', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const

export function DarkSlabFooter() {
  return (
    <footer className="max-w-site mx-auto px-gutter pb-gutter pt-fluid-3xl">
      <div className="flex flex-col gap-fluid-3xl bg-navy text-snow rounded-[32px] p-fluid-l">
        <div className="grid grid-cols-1 gap-fluid-m md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
          <div className="flex flex-col gap-3">
            <span className="w-16 h-2.5 rounded-pill bg-coral" aria-hidden="true" />
            <Label size="xs" render={<span />}>
              Still here?
            </Label>
          </div>
          <div className="flex flex-col gap-fluid-m items-start justify-center">
            <Title as="p" size="xl">
              Let’s make something calm together.
            </Title>
            <a
              className="bg-snow text-navy rounded-pill px-6 py-3 font-medium no-underline transition-[background-color] hover:bg-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow motion-reduce:transition-none"
              href="mailto:hello@patrickroelofs.com"
            >
              hello@patrickroelofs.com ↗
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <Label size="xs" render={<span />}>
            © 2026 Patrick Roelofs · Nijmegen, the Netherlands
          </Label>
          <ul className="flex flex-wrap gap-5 list-none m-0 p-0">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <Label size="xs" render={<a className="text-inherit no-underline hover:text-coral" href={href} />}>
                  {label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
