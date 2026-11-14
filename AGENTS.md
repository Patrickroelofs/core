# Agents

Package-specific rules live in that package's `AGENTS.md`.

## UI components

Components live in `apps/website/src/components/ui/<name>/`. Style with Tailwind v4 classes inline in the component's `className` (`cva` from `class-variance-authority`, in the same file, only where there are variants) and the semantic tokens in `packages/theme/theme.css` (`bg-bg-canvas`, `text-fg-default`, `gap-fluid-m`, ...); never accept `className`. Write class names as complete literal strings, Tailwind can't see ones built with template literals. Build on Base UI primitives.

## Checks

- `pnpm check` (Biome) and `pnpm typecheck` must pass.
- `pnpm test` builds the website and runs Vitest (`apps/website/tests`): the SEO modules, the preview-server middleware and the prerendered output. Every public page needs at least 500 characters of text inside `<main>`.
- PRs that change `packages/theme` or `apps/website` get a demo recorded with the `record-pr-demo` skill.

## SEO

Page titles, descriptions and Open Graph images come from `apps/website/src/seo/pages.ts`. Add new pages there and set the route's `head: () => seo('/path')`; the OG image (`/og/<path>.png`) is rendered with satori and prerendered at build. Tags use absolute URLs on `VITE_SITE_URL` (build-time, defaults to `https://patrickroelofs.com`); set it per deploy, e.g. `VITE_SITE_URL=https://v2.patrickroelofs.com`.

## Agents (GEO)

`seo()` also emits the canonical URL, JSON-LD (`person` in `pages.ts` holds the facts) and a markdown alternate. `robots.txt`, `sitemap.xml` and `llms.txt` are generated from `pages.ts` in `apps/website/src/seo/agents.ts`; the AI crawler policy (`Content-Signal`) is set there. The build writes a markdown copy of every public page (`/about.md`, `/index.md`) and `llms-full.txt` from the prerendered `<main>` (`src/seo/markdown.ts`), so keep page content inside `<main>` and mark decoration `aria-hidden`. The preview server serves the markdown for `Accept: text/markdown` and adds the `Link` headers. Unknown URLs get a 404 there too: markdown (`notFoundMarkdown` in `agents.ts`) for `Accept: text/markdown`, the prerendered `404.html` for browsers. `llms.txt` carries the when-to-use guidance for agents (`whenToUse` in `agents.ts`); keep it above the `##` file lists, which may only hold links. `/privacy` describes what the site really does: update it when adding analytics, cookies, forms or third-party embeds.
