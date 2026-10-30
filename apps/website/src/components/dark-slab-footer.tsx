import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'

const socials = [
  { label: 'GitHub', href: 'https://github.com/Patrickroelofs/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrick-roelofs/' },
] as const

export function DarkSlabFooter() {
  return (
    <footer className="max-w-site mx-auto px-gutter pb-gutter pt-fluid-3xl">
      <div className="flex flex-col gap-fluid-3xl bg-navy text-snow rounded-[32px] p-fluid-m-l">
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
              className="inline-flex max-w-full gap-2 bg-snow text-navy rounded-pill px-5 sm:px-6 py-3 max-sm:text-sm font-medium transition-[background-color] hover:bg-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snow"
              href="mailto:contact@patrickroelofs.com"
            >
              <span className="min-w-0 [overflow-wrap:anywhere]">
                contact@
                <wbr />
                patrickroelofs.com
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <Label size="xs" render={<span />}>
            © 2026 Patrick Roelofs
          </Label>
          <ul className="flex flex-wrap gap-5">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <Label size="xs" render={<a className="hover:text-coral" href={href} />}>
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
