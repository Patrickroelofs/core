import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { css } from '../../../styled-system/css'

const wrap = css({ maxW: '[1400px]', mx: 'auto', px: 'gutter', pb: 'gutter', pt: 'fluid.3xl' })
const slab = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'fluid.3xl',
  bg: 'navy',
  color: 'snow',
  borderRadius: '[32px]',
  p: 'fluid.l',
})
const top = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', md: 'minmax(0, 3fr) minmax(0, 9fr)' },
  gap: 'fluid.m',
})
const eyebrow = css({ display: 'flex', flexDirection: 'column', gap: '3' })
const bar = css({ w: '16', h: '[10px]', borderRadius: 'pill', bg: 'coral' })
const body = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'fluid.m',
  alignItems: 'flex-start',
  justifyContent: 'center',
})
const mail = css({
  bg: 'snow',
  color: 'navy',
  borderRadius: 'pill',
  px: '6',
  py: '3',
  fontWeight: 'medium',
  textDecoration: 'none',
  transition: '[background-color .2s]',
  _hover: { bg: 'coral' },
  _focusVisible: { outlineWidth: '[2px]', outlineStyle: 'solid', outlineColor: 'snow', outlineOffset: '[2px]' },
  _motionReduce: { transition: '[none]' },
})
const bottom = css({ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4' })
const links = css({ display: 'flex', flexWrap: 'wrap', gap: '5', listStyle: 'none', m: '0', p: '0' })
const link = css({ color: 'inherit', textDecoration: 'none', _hover: { color: 'coral' } })

// TODO: mock data, replace with real content
const socials = [
  { label: 'Read.cv', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const

export function DarkSlabFooter() {
  return (
    <footer className={wrap}>
      <div className={slab}>
        <div className={top}>
          <div className={eyebrow}>
            <span className={bar} aria-hidden="true" />
            <Label size="xs" render={<span />}>
              Still here?
            </Label>
          </div>
          <div className={body}>
            <Title as="p" size="xl">
              Let’s make something calm together.
            </Title>
            <a className={mail} href="mailto:hello@patrickroelofs.com">
              hello@patrickroelofs.com ↗
            </a>
          </div>
        </div>
        <div className={bottom}>
          <Label size="xs" render={<span />}>
            © 2026 Patrick Roelofs · Nijmegen, the Netherlands
          </Label>
          <ul className={links}>
            {socials.map(({ label, href }) => (
              <li key={label}>
                <Label size="xs" render={<a className={link} href={href} />}>
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
