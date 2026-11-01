# Agents

Package-specific rules live in that package's `AGENTS.md`.

## UI components

Components live in `apps/website/src/components/ui/<name>/`. Style with Tailwind v4 classes inline in the component's `className` (`cva` from `class-variance-authority`, in the same file, only where there are variants) and the semantic tokens in `packages/theme/theme.css` (`bg-bg-canvas`, `text-fg-default`, `gap-fluid-m`, ...); never accept `className`. Write class names as complete literal strings, Tailwind can't see ones built with template literals. Build on Base UI primitives.

## Checks

- `pnpm check` (Biome) and `pnpm typecheck` must pass.
- PRs that change `packages/theme` or `apps/website` get a demo recorded with the `record-pr-demo` skill.

## Content (MDX)

Essays live in `apps/website/src/content/writing/<slug>.mdx`, case studies in `apps/website/src/content/projects/<slug>.mdx`; the filename is the slug, served by `routes/writing.$slug.tsx` and `routes/projects.$slug.tsx`. Frontmatter is typed in `src/content/content.ts` and drives lists, SEO and the OG image, so these pages are not added to `pages.ts`. `##` headings are numbered and feed the table of contents. MDX components available in posts are in `components/writing/body.tsx` (`Lead`, `Sidenote`, `Figure`, `Quote`) and in case studies `components/case-study/mdx.tsx` (`Section`, `Statement`, `Stats`, `Gallery`).

## SEO

Page titles, descriptions and Open Graph images come from `apps/website/src/seo/pages.ts` (MDX pages: their frontmatter). Add new pages there and set the route's `head: () => seo('/path')`; the OG image (`/og/<path>.png`) is rendered with satori and prerendered at build. Tags use absolute URLs on `VITE_SITE_URL` (build-time, defaults to `https://patrickroelofs.com`); set it per deploy, e.g. `VITE_SITE_URL=https://v2.patrickroelofs.com`.
