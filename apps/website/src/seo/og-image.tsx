import light from '@fontsource/onest/files/onest-latin-300-normal.woff?inline'
import medium from '@fontsource/onest/files/onest-latin-500-normal.woff?inline'
import black from '@fontsource/onest/files/onest-latin-900-normal.woff?inline'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'
import { type Page, siteName, siteUrl } from './pages'

const color = { snow: '#f0f0f0', navy: '#192036', coral: '#d65b5c' }

const font = (dataUrl: string) => Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64')

const fonts = [
  { name: 'Onest', data: font(light), weight: 300 as const },
  { name: 'Onest', data: font(medium), weight: 500 as const },
  { name: 'Onest', data: font(black), weight: 900 as const },
]

function Monogram() {
  const [first, ...rest] = siteName.split(' ')
  return (
    <div style={{ display: 'flex', gap: 10, fontSize: 40, letterSpacing: '-0.05em', lineHeight: 1 }}>
      <span style={{ fontWeight: 300 }}>{first}</span>
      <span style={{ fontWeight: 900 }}>{rest.join(' ')}</span>
    </div>
  )
}

function OgImage({ page, home }: { page: Page; home: boolean }) {
  const words = page.title.split(' ')
  const last = words.pop()
  const size = page.title.length > 28 ? 88 : 112
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        backgroundColor: color.snow,
        color: color.navy,
        fontFamily: 'Onest',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {home ? <span /> : <Monogram />}
        {page.kicker && (
          <span
            style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '10px 20px',
              borderRadius: 999,
              border: `2px solid ${color.navy}`,
            }}
          >
            {page.kicker}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: size,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            maxWidth: 1000,
          }}
        >
          {words.length > 0 && <span style={{ fontWeight: 300, marginRight: '0.25em' }}>{words.join(' ')}</span>}
          <span style={{ fontWeight: 900 }}>
            {last}
            <span style={{ color: color.coral }}>.</span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            borderTop: `2px solid ${color.navy}`,
            fontSize: 26,
            fontWeight: 500,
          }}
        >
          <span style={{ opacity: 0.7 }}>{page.meta ?? page.description ?? ''}</span>
          <span>{new URL(siteUrl).host}</span>
        </div>
      </div>
    </div>
  )
}

export async function renderOgImage(page: Page, home = false) {
  const svg = await satori(<OgImage page={page} home={home} />, { width: 1200, height: 630, fonts })
  return new Resvg(svg).render().asPng()
}
