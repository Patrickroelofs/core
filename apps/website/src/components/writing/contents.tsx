import { Label } from '@/components/ui/label/label'
import type { Post } from '@/content/content'

export function Contents({ headings }: { headings: Post['headings'] }) {
  return (
    <nav aria-label="Contents" className="hidden md:block">
      <ol className="sticky top-8 flex flex-col gap-0.5">
        <Label size="xs" render={<span />}>
          Contents
        </Label>
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a href={`#${id}`} className="block py-1.5 text-step-n1 font-medium opacity-60 hover:opacity-100">
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
