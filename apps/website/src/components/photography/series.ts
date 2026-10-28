import type { ImageVariants } from '@/components/ui/image/image'

type Tone = ImageVariants['tone']

// TODO: mock data, replace with real series; only Night ferries has a page so far
export const series: {
  name: string
  year: string
  place: 'Lisbon' | 'Tagus' | 'Porto' | 'Elsewhere'
  film: string
  frames: number
  tones: [Tone, Tone, Tone]
  description: string
}[] = [
  {
    name: 'Tram lines',
    year: '2026',
    place: 'Lisbon',
    film: 'Black & white',
    frames: 6,
    tones: ['azure', 'light', 'navy'],
    description: 'Riding every tram line in Lisbon end to end. Four of six done.',
  },
  {
    name: 'Night ferries',
    year: '2025',
    place: 'Tagus',
    film: 'Colour',
    frames: 8,
    tones: ['navy', 'coral', 'dark'],
    description: 'Five crossings between Cais do Sodré and Barreiro, shot after eleven.',
  },
  {
    name: 'Early Lisbon',
    year: '2025–26',
    place: 'Lisbon',
    film: 'Colour',
    frames: 5,
    tones: ['coral', 'light', 'azure'],
    description: 'The city before it opens. Bakers, trams and the fish market.',
  },
  {
    name: 'Azulejo',
    year: '2024',
    place: 'Lisbon',
    film: 'Colour',
    frames: 4,
    tones: ['azure', 'coral', 'light'],
    description: 'Tiles, repairs in the wrong colour, and doorways in Graça.',
  },
  {
    name: 'Porto in fog',
    year: '2023',
    place: 'Porto',
    film: 'Black & white',
    frames: 4,
    tones: ['light', 'navy', 'dark'],
    description: 'Three days of fog over the Douro in January.',
  },
  {
    name: 'Family, ongoing',
    year: '2019–26',
    place: 'Elsewhere',
    film: 'Colour',
    frames: 32,
    tones: ['dark', 'coral', 'light'],
    description: 'The one series that never ends.',
  },
]
