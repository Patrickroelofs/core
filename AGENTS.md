# Agents

Package-specific rules live in that package's `AGENTS.md` (e.g. `packages/ui/AGENTS.md`).

## Using UI components

Before using or changing a `@core/ui` component, read its docs at `packages/ui/src/<name>/<name>.mdx` (props, variants, accessibility notes, Don'ts). Don't guess the API from usage elsewhere.

## Checks

- `pnpm check` (Biome) and `pnpm typecheck` must pass.
- PRs that change `packages/ui`, `packages/theme` or `apps/website` get a demo recorded with the `record-pr-demo` skill.
