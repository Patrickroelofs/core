import { useEffect, useState, type CSSProperties } from 'react'
import { createFileRoute } from '@tanstack/react-router'

// ponytail: styled with theme CSS variables (from @core/theme) instead of Panda classes,
// because Panda only scans packages/ui. Move to css() if the website joins its include.
const c = (n: string) => `var(--colors-${n})`
const NAVY = c('fg-default')
const SNOW = c('bg-canvas')
const font = "var(--fonts-body)"
const mono = "var(--fonts-mono)"
const label: CSSProperties = { font: `500 var(--font-sizes-step--1) ${font}` }
const card: CSSProperties = { borderRadius: 'var(--radii-card)', padding: 'var(--spacing-fluid-m)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-fluid-s)' }
const heading: CSSProperties = { margin: 0, font: `200 var(--font-sizes-step-6)/0.9 ${font}`, letterSpacing: 'var(--letter-spacings-tighter)' }
const sectionHead: CSSProperties = { gridColumn: 'span 12', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: 'var(--spacing-fluid-xl) var(--spacing-fluid-2xs) var(--spacing-fluid-2xs)', gap: 'var(--spacing-gutter)' }
const hatch = 'repeating-linear-gradient(135deg, rgba(25,32,54,.09) 0 1px, transparent 1px 11px), #dcdcdc'
const pill: CSSProperties = { borderRadius: 'var(--radii-pill)', padding: '7px 14px', font: `500 var(--font-sizes-step--1) ${font}` }
const dim = (o: number): CSSProperties => ({ opacity: o })

const work = [
  { title: 'Shiftboard', year: '2024–26', role: 'Lead designer', desc: 'Scheduling for night-shift nurses. Swap requests went from twenty minutes to two.', ph: 'shiftboard: scheduling dashboard', bg: c('accent-brand'), fg: NAVY },
  { title: 'Loop Transit', year: '2023', role: 'Design + front-end', desc: 'A rider app that tells the truth about delays, built with the drivers.', ph: 'loop transit: rider app screens', bg: c('accent-info'), fg: SNOW },
  { title: 'Fieldkit', year: '2021', role: 'Founding designer', desc: 'An offline notebook for ecologists. Works in the rain, with gloves on.', ph: 'fieldkit: field photo + app', bg: c('accent-highlight'), fg: SNOW },
  { title: 'Civic Atlas', year: '2019', role: 'Contractor', desc: 'Open data maps that show neighbours where the city spends money.', ph: 'civic atlas: map views', bg: c('bg-inverse'), fg: SNOW },
]
const clients = ['Loop Transit', 'Shiftboard', 'Fieldkit', 'City of Porto', 'Mesa Labs']
const posts = [
  ['Designing for the night shift', 'Sep 2026'],
  ['Your empty state is a promise', 'Jul 2026'],
  ['Notes on prototyping in code', 'Apr 2026'],
]
const cv = [
  ['2024 — now', 'Independent designer', 'Shiftboard, Loop Transit', 'Lisbon'],
  ['2020 — 2024', 'Founding designer', 'Fieldkit', 'Remote'],
  ['2017 — 2020', 'Designer', 'Civic Lab', 'Porto'],
  ['2014 — 2017', 'Junior designer', 'Studio Halde', 'Porto'],
  ['2014', 'BA Communication Design', 'University of Porto', 'Porto'],
]
const tools = ['Figma', 'TypeScript', 'React', 'User research', 'Design systems', 'Workshops']
const weights = [100, 230, 360, 490, 620, 760, 900, 900, 760, 620, 490, 360, 230, 100]

const css = `
.p a{color:inherit;text-decoration:none}.p a:hover{color:${c('accent-brand')}}
.p .wm span[data-w]{transition:font-weight .3s ease}.p .wm:hover span[data-w]{font-weight:calc(1000 - var(--w))}
.p .lift{transition:transform .3s ease;cursor:pointer}.p .lift:hover{transform:translateY(-4px)}
.p .cta:hover{background:${NAVY};color:${SNOW}}
.p .cv:hover{background:${NAVY}!important;color:${SNOW}!important}
`

function Home() {
  const [clock, setClock] = useState('—')
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit' }))
    tick()
    const t = setInterval(tick, 15000)
    return () => clearInterval(t)
  }, [])

  const letters = [...'PATRICKROELOFS']
  const row = (from: number, to: number) => (
    <span style={{ display: 'flex' }}>
      {letters.slice(from, to).map((l, i) => (
        <span key={from + i} data-w style={{ fontWeight: weights[from + i], ['--w' as string]: weights[from + i] }}>{l}</span>
      ))}
      {to === 14 && <span style={{ color: c('accent-brand'), fontWeight: 900 }}>.</span>}
    </span>
  )

  return (
    <div className="p" style={{ background: SNOW, color: NAVY, fontFamily: font, minHeight: '100vh' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" precedence="default" href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=JetBrains+Mono:wght@400;500&display=swap" />
      <style precedence="default" href="home-page">{css}</style>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16, padding: 'var(--spacing-fluid-m) var(--spacing-margin)', font: `500 var(--font-sizes-step--1)/1.3 ${font}` }}>
          <span>Patrick Roelofs</span>
          <span style={dim(0.6)}>Product designer<br />+ front-end engineer</span>
          <span style={dim(0.6)}>Lisbon, PT<br />{clock} WEST</span>
          <span style={{ display: 'flex', gap: 20, justifyContent: 'flex-end' }}>
            <a href="#work">Work</a><a href="#cv">CV</a><a href="#contact">Contact</a>
          </span>
        </div>

        <h1 className="wm" style={{ margin: 0, padding: 'var(--spacing-fluid-2xs) var(--spacing-margin) 0', font: `900 clamp(72px, 14vw, 220px)/0.86 ${font}`, letterSpacing: 'var(--letter-spacings-tighter)', whiteSpace: 'nowrap', display: 'flex', flexDirection: 'column' }}>
          {row(0, 7)}{row(7, 14)}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gridAutoRows: 'minmax(120px, auto)', gap: 'var(--spacing-gutter)', padding: 'var(--spacing-margin)' }}>
          <div style={{ ...card, gridColumn: 'span 5', gridRow: 'span 3', background: c('accent-highlight'), color: SNOW, padding: 'var(--spacing-fluid-l)', justifyContent: 'space-between', gap: 'var(--spacing-fluid-m)' }}>
            <span style={{ ...label, ...dim(0.7) }}>About</span>
            <p style={{ margin: 0, font: `400 var(--font-sizes-step-4)/1.14 ${font}`, letterSpacing: 'var(--letter-spacings-tight)', textWrap: 'pretty' }}>
              I turn tangled workflows into tools people <span style={{ fontWeight: 800 }}>actually enjoy</span> opening. Previously at a health-tech startup and a city transit lab.
            </p>
          </div>
          <div style={{ gridColumn: 'span 7', gridRow: 'span 3', borderRadius: 'var(--radii-card)', overflow: 'hidden', position: 'relative', minHeight: 380, background: hatch }}>
            <span style={{ position: 'absolute', left: 24, top: 22, font: `400 var(--font-sizes-step--2) ${mono}`, ...dim(0.6) }}>featured project screenshot</span>
            <div style={{ position: 'absolute', inset: 'auto 16px 16px 16px', background: SNOW, borderRadius: 'var(--radii-md)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <span style={{ font: `800 var(--font-sizes-step-2) ${font}`, letterSpacing: '-0.02em' }}>Shiftboard — nurse scheduling</span>
              <span style={{ ...label, ...dim(0.6) }}>Case study →</span>
            </div>
          </div>

          <div style={{ ...card, gridColumn: 'span 3', gridRow: 'span 2', background: c('accent-brand'), justifyContent: 'space-between' }}>
            <span style={{ ...label, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: NAVY }} />Status
            </span>
            <span style={{ font: `800 var(--font-sizes-step-4)/1 ${font}`, letterSpacing: '-0.03em' }}>Available Feb 2027</span>
          </div>
          <div style={{ ...card, gridColumn: 'span 4', gridRow: 'span 2', background: c('accent-info'), color: SNOW, justifyContent: 'space-between' }}>
            <span style={{ ...label, ...dim(0.85) }}>Selected clients</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {clients.map((x) => <span key={x} style={{ ...pill, border: '1px solid rgba(240,240,240,.6)' }}>{x}</span>)}
            </div>
          </div>
          <div style={{ ...card, gridColumn: 'span 5', gridRow: 'span 2', background: c('bg-inverse'), color: SNOW, gap: 14 }}>
            <span style={{ ...label, ...dim(0.6) }}>Latest writing</span>
            {posts.map(([t, d]) => (
              <div key={t} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingBottom: 12, borderBottom: '1px solid rgba(240,240,240,.14)', font: `500 var(--font-sizes-step-1)/1.25 ${font}` }}>
                <span>{t}</span><span style={{ ...dim(0.5), fontSize: 13, whiteSpace: 'nowrap' }}>{d}</span>
              </div>
            ))}
          </div>

          <div id="work" style={sectionHead}>
            <h2 style={heading}>Selected <span style={{ fontWeight: 900 }}>work</span></h2>
            <span style={{ ...label, ...dim(0.6) }}>04 projects · 2019–2026</span>
          </div>
          {work.map((w) => (
            <div key={w.title} className="lift" style={{ gridColumn: 'span 6', borderRadius: 'var(--radii-card)', overflow: 'hidden', background: '#e4e4e4', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/10', background: hatch, padding: '20px 24px', boxSizing: 'border-box', font: `400 var(--font-sizes-step--2) ${mono}`, color: 'rgba(25,32,54,.6)' }}>{w.ph}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', gap: '6px 16px', padding: '22px 24px 24px', alignItems: 'baseline' }}>
                <span style={{ font: `800 var(--font-sizes-step-3)/1 ${font}`, letterSpacing: '-0.035em' }}>{w.title}</span>
                <span style={{ ...label, ...dim(0.6) }}>{w.year}</span>
                <span style={{ font: `400 var(--font-sizes-step-0)/1.4 ${font}`, ...dim(0.75) }}>{w.desc}</span>
                <span style={{ justifySelf: 'end', padding: '6px 12px', borderRadius: 'var(--radii-pill)', font: `500 12px ${font}`, background: w.bg, color: w.fg }}>{w.role}</span>
              </div>
            </div>
          ))}

          <div id="cv" style={sectionHead}>
            <h2 style={heading}>Curriculum <span style={{ fontWeight: 900 }}>vitae</span></h2>
            <span style={{ ...label, ...dim(0.6) }}>Twelve years, five chapters</span>
          </div>
          <div style={{ gridColumn: 'span 8', background: c('bg-inverse'), color: SNOW, borderRadius: 'var(--radii-card)', padding: '12px 32px' }}>
            {cv.map(([y, role, org, loc]) => (
              <div key={y + role} style={{ display: 'grid', gridTemplateColumns: '140px minmax(0, 1fr) auto', gap: 24, padding: '20px 0', borderBottom: '1px solid rgba(240,240,240,.12)', alignItems: 'baseline' }}>
                <span style={{ font: `400 var(--font-sizes-step--1) ${mono}`, ...dim(0.6) }}>{y}</span>
                <span style={{ font: `300 var(--font-sizes-step-2)/1.25 ${font}`, letterSpacing: '-0.015em' }}><b style={{ fontWeight: 700 }}>{role}</b> · {org}</span>
                <span style={{ ...label, ...dim(0.5) }}>{loc}</span>
              </div>
            ))}
          </div>
          <div style={{ gridColumn: 'span 4', display: 'grid', gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 12 }}>
            <div style={{ ...card, background: c('accent-highlight'), color: SNOW, gap: 14 }}>
              <span style={{ ...label, ...dim(0.7) }}>Toolkit</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tools.map((t) => <span key={t} style={{ ...pill, background: 'rgba(240,240,240,.12)' }}>{t}</span>)}
              </div>
            </div>
            <a href="#" className="cv" style={{ ...card, background: c('accent-brand'), color: NAVY, justifyContent: 'space-between', gap: 16 }}>
              <span style={label}>Full CV</span>
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', font: `800 var(--font-sizes-step-4)/1 ${font}`, letterSpacing: '-0.03em' }}>
                Download PDF<span style={{ fontWeight: 300 }}>↓</span>
              </span>
            </a>
          </div>

          <a id="contact" href="mailto:hello@patrickroelofs.com" className="cta" style={{ gridColumn: 'span 12', marginTop: 48, border: `1.5px solid ${NAVY}`, borderRadius: 'var(--radii-card)', padding: '36px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ font: `200 var(--font-sizes-step-5)/1 ${font}`, letterSpacing: '-0.045em' }}>Let’s build something <span style={{ fontWeight: 900 }}>useful.</span></span>
            <span style={{ font: `500 var(--font-sizes-step-1) ${font}` }}>hello@patrickroelofs.com ↗</span>
          </a>
        </div>

        <footer style={{ display: 'flex', justifyContent: 'space-between', gap: 24, padding: 'var(--spacing-fluid-2xs) var(--spacing-margin) var(--spacing-fluid-l)', ...label, ...dim(0.6) }}>
          <span>© 2026 Patrick Roelofs</span>
          <span style={{ display: 'flex', gap: 20 }}><span>Read.cv</span><span>GitHub</span><span>LinkedIn</span></span>
        </footer>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({ component: Home })
