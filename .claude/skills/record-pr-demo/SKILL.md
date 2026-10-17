---
name: record-pr-demo
description: Use when a pull request changes the design system (packages/ui, packages/theme) and needs a short visual walkthrough for reviewers.
---

# Record a PR Demo

Record a 10–45s screen capture of the changed component in Storybook, review it locally, then attach it to the PR.

## Review gate (non-negotiable)

Uploading changes an external PR. Always stop after rendering the local MP4, show the user its path and sha256, and wait for approval. Never upload rejected takes. Never commit media.

## Workflow

1. Prereqs: `pnpm install`, `pnpm exec playwright install chromium`, `ffmpeg` on PATH.
2. Start Storybook (`pnpm storybook`, port 6006) and keep it running.
3. Write a scenario in `/tmp/core-demo-<name>.mjs`. Open a story with `?id=<title>--<story>` (see `packages/ui/src/**/*.stories.tsx`), assert the opening state, call `ready()` once, then 2–6 visible actions, ending on visible proof:

   ```js
   export default async function ({ baseURL, page, expect, click, moveCursor, pause, ready }) {
     await page.goto(`${baseURL}/iframe.html?id=button--solid&viewMode=story`)
     const button = page.getByRole('button', { name: 'Button' })
     await expect(button).toBeVisible()
     await ready()
     await moveCursor(button)
     await click(button)
     await pause(1200)
   }
   ```

   Optional `export const colorScheme = 'dark'` to record dark mode.
4. Record: `node .claude/skills/record-pr-demo/record.mjs --scenario /tmp/core-demo-<name>.mjs --label <name>-take-1`. Use a new label per take. Output: `/tmp/core-pr-demo-<label>.mp4`, under 10 MB.
5. Watch it, show the user the path + sha256, and **stop for approval**.
6. After approval, recompute `sha256sum` (must match), then append to the PR body, preserving the existing text:

   ```bash
   gh pr view <pr> --json body -q .body > /tmp/body.md
   printf '\n\n## Preview\n\n![](/tmp/core-pr-demo-<label>.mp4)\n' >> /tmp/body.md
   gh pr edit <pr> --body-file /tmp/body.md --attach /tmp/core-pr-demo-<label>.mp4
   ```

   `--attach` needs a recent `gh`; otherwise drag the MP4 into the PR description in the browser.
7. Confirm the PR renders the inline player, then delete the scenario and temp files.
