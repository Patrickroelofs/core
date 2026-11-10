import { Backdrop } from '@/components/ui/backdrop/backdrop'
import { Image } from '@/components/ui/image/image'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { Rail } from '../photo-series/rail'

export function FeaturedProject() {
  return (
    <>
      <Rail tone="navy" space="3xl" />
      <section aria-label="Project" className="pt-fluid-l">
        <a
          href="/projects/cascade"
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8"
        >
          <div className="flex flex-col gap-5">
            <span className="flex gap-1.5">
              <Tag>Project</Tag>
              <Tag appearance="outline">Personal · 2026</Tag>
            </span>
            <Title as="h2" size="lg">
              Cascade
              <Title as="span" size="lg" weight="black">
                list
              </Title>
            </Title>
            <div className="max-w-[40ch]">
              <Typography size="lg">
                An outliner for everyone: one infinite list you can nest, fold, zoom and link.
              </Typography>
            </div>
          </div>
          <Backdrop seed="/projects/cascade/outline.webp" inset="sm">
            <Image
              ratio="16/10"
              src="/projects/cascade/outline.webp"
              alt="A Cascade outline with three nested groups: a novel, a sprint with tasks, and groceries"
            />
          </Backdrop>
        </a>
      </section>
    </>
  )
}
