import { useState } from 'react'
import { Button } from '@/components/ui/button/button'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'

export function Outro() {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(location.href).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="mt-fluid-3xl grid gap-fluid-s md:grid-cols-[minmax(0,3fr)_minmax(0,9fr)]">
      <div className="hidden md:block" />
      <div className="flex flex-col gap-fluid-m">
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-2.5 w-16 flex-none rounded-pill bg-coral" />
          <span className="h-px flex-1 bg-border-default" />
        </div>
        <div className="max-w-[28ch]">
          <Title as="p" size="sm">
            Thanks for reading. If you design for people on shifts, I’d like to hear how you handle handovers.
          </Title>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-1.5">
            <Tag appearance="soft">Health</Tag>
            <Tag appearance="soft">Process</Tag>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={copy}>
              {copied ? 'Copied ✓' : 'Copy link'}
            </Button>
            <Button
              render={<a href="mailto:contact@patrickroelofs.com?subject=Designing%20for%204am" />}
              nativeButton={false}
              icon="↗"
            >
              Reply by email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
