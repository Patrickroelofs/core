import { LinkButton } from '@/components/ui/button/link-button'
import { Image } from '@/components/ui/image/image'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Header() {
  return (
    <header className="flex flex-col gap-fluid-xl">
      <div className="flex flex-col gap-7">
        <Title as="h1" size="xl">
          Cascade
          <Title as="span" size="xl" weight="black">
            list
          </Title>
        </Title>
        <div className="max-w-[36ch]">
          <Typography size="xl">
            An outliner for everyone. One infinite list you can nest, fold, zoom and link.
          </Typography>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton variant="primary" href="https://cascadelist.com">
            Visit cascadelist.com
          </LinkButton>
          <LinkButton variant="secondary" href="https://github.com/cascade-outliner/cascade">
            Source on GitHub
          </LinkButton>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl ring-1 ring-border-default">
        <Image
          priority
          ratio="16/9"
          src="/projects/cascade/website.webp"
          alt="The Cascadelist homepage: the headline 'Every thought gets a place to land' beside a small live outline"
        />
      </div>
    </header>
  )
}
