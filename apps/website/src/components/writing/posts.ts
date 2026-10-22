// TODO: mock data, replace with real content
export const posts = [
  { year: '2026', date: '14 Oct', title: 'Designing for 4am', tag: 'Health', minutes: '9 min' },
  { year: '2026', date: '22 Aug', title: 'Timetables are interfaces', tag: 'Transit', minutes: '6 min' },
  { year: '2026', date: '10 Jun', title: 'The case for fewer settings', tag: 'Process', minutes: '4 min' },
  { year: '2026', date: '02 Mar', title: 'A year of designing in the browser', tag: 'Engineering', minutes: '11 min' },
  { year: '2025', date: '18 Nov', title: 'Writing for tired readers', tag: 'Process', minutes: '5 min' },
  { year: '2025', date: '30 Jul', title: 'One glance, no menus', tag: 'Transit', minutes: '7 min' },
  { year: '2025', date: '04 Apr', title: 'Support at 2am', tag: 'Health', minutes: '6 min' },
  { year: '2024', date: '12 Sep', title: 'Front-end for designers, slowly', tag: 'Engineering', minutes: '8 min' },
] as const

export type Post = (typeof posts)[number]

// only the first essay exists so far
export const postHref = (p: Post) => (p === posts[0] ? '/writing/designing-for-4am' : '#')
