import type { ComponentProps, ReactNode } from 'react'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

type Tone = ComponentProps<typeof LabeledSection>['tone']

const email = (
  <a className="focus-ring font-semibold text-accent-brand" href="mailto:contact@patrickroelofs.com">
    contact@patrickroelofs.com
  </a>
)

const sections: { id: string; title: string; tone: Tone; lead: ReactNode; body: ReactNode[] }[] = [
  {
    id: 'summary',
    title: 'In short',
    tone: 'coral',
    lead: 'This is a personal website. It has no cookies, no analytics, no tracking, no advertising and no accounts.',
    body: [
      'It is run by Patrick Roelofs, a private person in the Netherlands, who is responsible for the data described on this page.',
    ],
  },
  {
    id: 'visiting',
    title: 'Visiting',
    tone: 'navy',
    lead: 'Reading this website does not store anything on your device and does not follow you around.',
    body: [
      'The pages do not set cookies and do not use local storage. There are no analytics scripts, tracking pixels, embedded videos or social media widgets. Fonts and images are served from this website itself, not from another company.',
      'The website is delivered through Cloudflare. Like any web server, Cloudflare processes technical data about each request, such as your IP address, your browser and the page you asked for, to deliver the page and to protect the website against abuse. I do not use that data to identify visitors.',
    ],
  },
  {
    id: 'email',
    title: 'Email',
    tone: 'azure',
    lead: 'If you email me, I receive your email address and whatever you choose to write.',
    body: [
      'I use that only to read and answer your message. I do not add you to a mailing list and I do not share or sell your details.',
    ],
  },
  {
    id: 'links',
    title: 'Other websites',
    tone: 'plum',
    lead: 'Some links lead to other websites, such as LinkedIn, GitHub and cascadelist.com.',
    body: ['Those websites have their own privacy policies. This page only covers patrickroelofs.com.'],
  },
  {
    id: 'rights',
    title: 'Your rights',
    tone: 'coral',
    lead: (
      <>
        Under the GDPR you can ask what personal data I hold about you and have it corrected or deleted. Email {email}.
      </>
    ),
    body: [
      'In practice that is the email you sent me, if you sent one. You can also complain to the Dutch data protection authority, the Autoriteit Persoonsgegevens.',
      'If this page changes, the date at the top changes with it.',
    ],
  },
]

export function Policy() {
  return (
    <>
      {sections.map(({ id, title, tone, lead, body }) => (
        <LabeledSection key={id} id={id} tone={tone}>
          <LabeledSection.Label>{title}</LabeledSection.Label>
          <LabeledSection.Content>
            <div className="flex flex-col gap-8">
              <Typography size="xl">{lead}</Typography>
              {body.map((text, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static copy
                <Typography key={i} size="lg">
                  {text}
                </Typography>
              ))}
            </div>
          </LabeledSection.Content>
        </LabeledSection>
      ))}
    </>
  )
}
