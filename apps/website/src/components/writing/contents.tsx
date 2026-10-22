import { Label } from '@/components/ui/label/label'
import { headings } from './headings'

export function Contents() {
  return (
    <nav aria-label="Contents" className="hidden md:block">
      <ol className="sticky top-8 flex flex-col gap-0.5">
        <Label size="xs" render={<span />}>
          Contents
        </Label>
        {headings.map((heading, i) => (
          <li key={heading}>
            <a href={`#h-${i + 1}`} className="block py-1.5 text-step-n1 font-medium opacity-60 hover:opacity-100">
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
