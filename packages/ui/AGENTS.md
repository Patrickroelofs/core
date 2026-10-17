# Agents: `@core/ui`

- Every component folder has a colocated `<name>.mdx` docs page next to its `.stories.tsx`.
- The docs page attaches to the stories with `<Meta of={Stories} />` and covers: what it is, a usage snippet, each variant/size as a `<Canvas>`, accessibility notes, and a short "Don't" list. Use lists, not markdown tables (MDX has no GFM here).
- Add or change a variant, prop or component, and update its `.mdx` and stories in the same PR.
- Style with the Panda recipe in `<name>.styles.ts` and semantic tokens from `@core/theme`; never accept `className`.
- Build on Base UI primitives. Use its `render` prop to stay framework agnostic.
- Panda `strictTokens` is on: use theme tokens (`px: '4'`, `fontSize: 'sm'`). For a one-off raw value use the escape hatch, e.g. `px: '[14px]'`, and prefer adding a token if it repeats.
