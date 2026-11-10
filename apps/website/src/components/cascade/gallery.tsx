import { Shot } from './shot'

const shots = [
  {
    src: '/projects/cascade/menu.webp',
    alt: 'The right-click menu on a line, with the Convert into submenu showing Text and Task',
    caption: 'Right-click any line to convert, indent, zoom, duplicate or delete it.',
  },
  {
    src: '/projects/cascade/palette.webp',
    alt: "The command palette searching for 'chapter', with two matching nodes and an option to create a new one",
    caption: 'The command palette searches every node and jumps straight to it.',
  },
  {
    src: '/projects/cascade/zoom.webp',
    alt: "The 'Sprint 14' line zoomed in as its own page, showing its three tasks",
    caption: 'Zoomed in, a line becomes its own page with its own URL.',
  },
  {
    src: '/projects/cascade/onboarding.webp',
    alt: "Cascade onboarding, titled 'Everything is a line', listing the five gestures that drive the app",
    caption: 'Onboarding explains the whole app in five lines.',
  },
] as const

export function Gallery() {
  return (
    <div className="mt-fluid-4xl grid gap-x-3 gap-y-8 md:grid-cols-2">
      {shots.map((shot) => (
        <Shot key={shot.src} inset="sm" {...shot} />
      ))}
    </div>
  )
}
