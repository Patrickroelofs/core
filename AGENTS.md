# Agents

Package-specific rules live in that package's `AGENTS.md`.

## UI components

Components live in `apps/website/src/components/ui/<name>/`. Style with Tailwind v4 classes inline in the component's `className` (`cva` from `class-variance-authority`, in the same file, only where there are variants) and the semantic tokens in `packages/theme/theme.css` (`bg-bg-canvas`, `text-fg-default`, `gap-fluid-m`, ...); never accept `className`. Write class names as complete literal strings, Tailwind can't see ones built with template literals. Build on Base UI primitives.

## Checks

- `pnpm check` (Biome) and `pnpm typecheck` must pass.
- PRs that change `packages/theme` or `apps/website` get a demo recorded with the `record-pr-demo` skill.

## SEO

Page titles, descriptions and Open Graph images come from `apps/website/src/seo/pages.ts`. Add new pages there and set the route's `head: () => seo('/path')`; the OG image (`/og/<path>.png`) is rendered with satori and prerendered at build.
