import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Header() {
  return (
    <header className="flex flex-col gap-fluid-xl">
      <a href="/photography" className="text-step-n1 font-medium opacity-70 hover:text-accent-brand">
        ← All series
      </a>
      <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
        <Title as="h1" size="xl">
          Night
          <br />
          <Title as="span" size="xl" weight="black">
            ferries<span className="text-accent-brand">.</span>
          </Title>
        </Title>
        <Typography weight="medium">
          Five crossings between Cais do Sodré and Barreiro, shot after eleven. November 2025.
        </Typography>
      </div>
    </header>
  )
}
