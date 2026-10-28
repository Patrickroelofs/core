import { Title } from '@/components/ui/title/title'
import { Rail } from './rail'

export function Details() {
  return (
    <>
      <Rail tone="azure" />
      <section aria-label="Camera and film" className="max-w-[28ch] pt-fluid-l">
        <Title as="p" size="md">
          Shot on an{' '}
          <Title as="span" size="md" weight="medium">
            Olympus XA
          </Title>{' '}
          with{' '}
          <Title as="span" size="md" weight="medium">
            Cinestill 800T
          </Title>
          , pushed one stop and scanned at home in Lisbon.
        </Title>
      </section>
    </>
  )
}
