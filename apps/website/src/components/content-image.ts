import type { ImageRef } from '@/content/content'
import { mockImage } from '@/mock/image'

// TODO: drop the mock fallback once every image has a src
export const imageSrc = ({ src, alt }: ImageRef, width = 1600, height = 900) => src ?? mockImage(alt, width, height)
