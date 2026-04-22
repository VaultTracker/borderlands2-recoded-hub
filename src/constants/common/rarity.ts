export const RARITY_COLORS = {
  common: 'rgb(150, 150, 150)',
  uncommon: 'rgb(61,210,11)',
  rare: 'rgb(47,120,255)',
  cursed: 'rgb(0,204,204)',
  epic: 'rgb(171,70,255)',
  etech: 'fuchsia',
  gemstone: 'rgb(171,70,255)',
  legendary: 'rgb(255,150,0)',
  seraph: 'rgb(255,105,180)',
  pearlescent: 'rgb(0,255,255)',
  'very rare': 'rgb(180,167,214)',
  effervescent: 'rgb(147,196,125)',
  moxxi: 'rgb(255,0,0)',
} as const;

export const RARITY_KEYS = Object.keys(RARITY_COLORS) as Array<keyof typeof RARITY_COLORS>;

export type RarityKey = (typeof RARITY_KEYS)[number];
