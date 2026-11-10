import { mockImage } from '@/mock/image'

// TODO: mock data, replace with real content
export const projects = [
  {
    title: 'Patrickroelofs.com',
    href: '/projects/patrickroelofs',
    category: 'Personal',
    year: '2026',
    description: 'My personal website and portfolio.',
    image: 'handover screen',
    src: mockImage('handover screen', 1200, 900),
    tone: 'light',
    role: 'Designer & Developer',
  },
  {
    title: 'Cascadelist',
    href: '/projects/cascade',
    category: 'Personal',
    year: '2026',
    description: 'An outliner for everyone: one infinite list you can nest, fold, zoom and link.',
    image: 'The Cascadelist homepage',
    src: '/projects/cascade/website.webp',
    tone: 'light',
    role: 'Designer & Developer',
  },
] as const
