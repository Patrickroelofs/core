# Agents

Package-specific rules live in that package's `AGENTS.md`.

## UI components

Components live in `apps/website/src/components/ui/<name>/`. Style with the Panda recipe in `<name>.styles.ts` and semantic tokens from `@core/theme`; never accept `className`. Build on Base UI primitives. Panda `strictTokens` is on: use theme tokens, or an escape hatch like `px: '[14px]'` for one-offs.

## Checks

- `pnpm check` (Biome) and `pnpm typecheck` must pass.
- PRs that change `packages/theme` or `apps/website` get a demo recorded with the `record-pr-demo` skill.
