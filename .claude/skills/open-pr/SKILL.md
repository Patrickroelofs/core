---
name: open-pr
description: Use when the user wants to open a pull request for the current branch. Runs checks, pushes, creates a draft PR, and, if packages/ui, packages/theme or apps/website changed, records and attaches a demo with no approval stop.
allowed-tools: Bash(git push:*), Bash(git log:*), Bash(git diff:*), Bash(git status:*), Bash(git branch:*), Bash(pnpm check), Bash(pnpm typecheck), Bash(pnpm install), Bash(pnpm exec playwright install chromium), Bash(pnpm storybook:*), Bash(pnpm --filter website dev:*), Bash(gh pr create:*), Bash(gh pr view:*), Bash(gh pr edit:*), Bash(node .claude/skills/record-pr-demo/record.mjs:*), Bash(sha256sum:*), Bash(ffmpeg:*)
---

# Open a PR

1. `pnpm check` and `pnpm typecheck`. Stop and report on failure; do not push.
2. `git push -u origin HEAD`.
3. Write the title (conventional-commit style, like the recent `git log`) and body (what changed and why, from the commits and `git diff main...HEAD`), then `gh pr create --draft --base main --title ... --body ...`.
4. If `git diff --name-only main...HEAD` touches `packages/ui`, `packages/theme` or `apps/website`, run `record-pr-demo` in **autonomous mode** (see its "Autonomous mode" section) against the new PR. Otherwise skip.
5. Print the PR URL. Mention anything skipped or failed (e.g. demo not recorded and why).
