// TODO: mock photos from picsum.photos, replace with real images
export const mockImage = (seed: string, width = 1600, height = 1000) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`
