import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** How many grid columns fit in `containerWidth` for fixed min card width and gap (CSS minmax grid). */
export function computeGridColumnCount(containerWidth: number, minCardPx: number, gapPx: number): number {
  if (minCardPx <= 0) return 1;
  if (containerWidth <= 0) return 1;
  const n = Math.floor((containerWidth + gapPx) / (minCardPx + gapPx));
  return Math.max(1, n);
}
