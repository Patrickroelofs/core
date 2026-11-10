import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Build() {
  return (
    <LabeledSection id="build" tone="navy">
      <LabeledSection.Label hint="02">How it's built</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex max-w-[720px] flex-col gap-5">
          <Title as="h3" size="xs" weight="bold">
            The browser comes first
          </Title>
          <Typography size="lg">
            The outline lives in IndexedDB, so every edit lands on your device before anything else and the app works
            fully offline. Without an account it never talks to a server.
          </Typography>
          <Title as="h3" size="xs" weight="bold">
            Sync is optional
          </Title>
          <Typography size="lg">
            Sign in with Google and Cascade mirrors the outline to Postgres in the background. Local edits queue in an
            outbox and conflicts resolve last-write-wins per node, which keeps the model simple enough to trust.
          </Typography>
          <Title as="h3" size="xs" weight="bold">
            Fast at any size
          </Title>
          <Typography size="lg">
            Large trees render through a virtualized list, so navigation stays responsive as a workspace grows, and
            every node keeps a stable URL you can link to.
          </Typography>
          <Title as="h3" size="xs" weight="bold">
            One repository
          </Title>
          <Typography size="lg">
            The app and the marketing site are both TanStack Start apps in a pnpm monorepo. The site's pages are built
            from Payload CMS blocks, and authentication runs on better-auth.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
