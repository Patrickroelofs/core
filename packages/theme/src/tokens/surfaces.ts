// Surfaces repoint the semantic colour vars, so every component using bg/fg/action/border tokens follows.
// Pairs picked for contrast (WCAG): all >= 4.5:1 except navy on coral (4.2:1, best of the palette).
const surfaces = {
  snow: { bg: 'snow', fg: 'navy', primary: 'navy', onPrimary: 'snow', hover: 'plum', ring: 'azure' },
  plum: { bg: 'plum', fg: 'snow', primary: 'snow', onPrimary: 'plum', hover: 'coral', ring: 'snow' },
  azure: { bg: 'azure', fg: 'white', primary: 'white', onPrimary: 'azure', hover: 'navy', ring: 'white' },
  coral: { bg: 'coral', fg: 'navy', primary: 'navy', onPrimary: 'snow', hover: 'plum', ring: 'navy' },
  navy: { bg: 'navy', fg: 'snow', primary: 'snow', onPrimary: 'navy', hover: 'coral', ring: 'snow' },
} as const

export type Surface = keyof typeof surfaces

const c = (name: string) => `var(--colors-${name})`

export const surfaceCss = Object.fromEntries(
  Object.entries(surfaces).map(([name, s]) => [
    `[data-surface=${name}]`,
    {
      '--colors-bg-canvas': c(s.bg),
      '--colors-fg-default': c(s.fg),
      '--colors-border-default': `color-mix(in srgb, ${c(s.fg)} 20%, transparent)`,
      '--colors-border-strong': c(s.fg),
      '--colors-action-primary': c(s.primary),
      '--colors-action-on-primary': c(s.onPrimary),
      '--colors-action-primary-hover': c(s.hover),
      '--colors-focus-ring': c(s.ring),
      backgroundColor: 'var(--colors-bg-canvas)',
      color: 'var(--colors-fg-default)',
    },
  ]),
)
