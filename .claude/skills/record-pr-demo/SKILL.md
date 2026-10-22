---
name: record-pr-demo
description: Use when a pull request changes the design system (packages/theme) or the website (apps/website) and needs a short visual walkthrough for reviewers.
---

# Record a PR Demo

Record a 10–45s screen capture of the changed page on the website, review it locally, then attach it to the PR.

## Review gate (non-negotiable)

Uploading changes an external PR. Always stop after rendering the local MP4, show the user its path and sha256, and wait for approval. Never upload rejected takes. Never commit media.

## Autonomous mode

When invoked from the `open-pr` skill, skip the stop for approval in steps 5–6 and upload right after recording. Instead of the human review, check automatically: the MP4 exists, is under 10 MB, and `sha256sum` is unchanged between recording and upload. If any check fails, don't upload; report why. Never commit media.

## Workflow

1. Prereqs: `pnpm install`, `pnpm exec playwright install chromium`, `ffmpeg` on PATH.
2. Start the website and keep it running: `pnpm --filter website dev` (port 5173).
3. Write a scenario in `/tmp/core-demo-<name>.mjs`. Open the changed route, assert the opening state, call `ready()` once, then 2–6 visible actions, ending on visible proof:

   ```js
   export default async function ({ baseURL, page, expect, click, moveCursor, scroll, pause, ready }) {
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

   Website scenarios use `page.goto(`${baseURL}/`)` (or another route) and scroll with `await scroll(locator)` (or `scroll(y)`; eased, optional second arg is duration in ms, default 900) instead of `scrollIntoViewIfNeeded()`, which jumps; start from the top, end on visible proof. Pass `--base-url http://localhost:5173` in step 4.
4. Record: `node .claude/skills/record-pr-demo/record.mjs --scenario /tmp/core-demo-<name>.mjs --label <name>-take-1` (add `--base-url http://localhost:5173` for the website; `--viewport 1440x900` suits it). Use a new label per take. Output: `/tmp/core-pr-demo-<label>.mp4`, under 10 MB.
5. Watch it, show the user the path + sha256, and **stop for approval**.
6. After approval, recompute `sha256sum` (must match), then append to the PR body, preserving the existing text:

   ```bash
   gh pr view <pr> --json body -q .body > /tmp/body.md
   printf '\n\n## Preview\n\n![](/tmp/core-pr-demo-<label>.mp4)\n' >> /tmp/body.md
   gh pr edit <pr> --body-file /tmp/body.md --attach /tmp/core-pr-demo-<label>.mp4
   ```

   `--attach` needs a recent `gh`; otherwise drag the MP4 into the PR description in the browser.
7. Confirm the PR renders the inline player, then delete the scenario and temp files.
