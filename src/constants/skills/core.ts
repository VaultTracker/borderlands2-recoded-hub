export const MAX_SKILL_ROW = 6;
export const MAX_SKILL_COL = 3;
export const MAX_SKILL_ITEM_POINTS = 5;
export const MAX_TOTAL_SKILL_POINTS = 75;
export const SKILL_TREE_KEYS = ['green', 'blue', 'red'] as const;
export const SKILL_TREE_COLORS = {
  green: '#41974D',
  blue: '#2A87C7',
  red: '#A93640',
} as const;

export type SkillTreeKey = (typeof SKILL_TREE_KEYS)[number];

const PADDING_Y = 23;
const PADDING_X = 39;
const BG_HEIGHT = 396;
const BG_WIDTH = 247;
const GRID_GAP = 6;

export const SKILL_TREE_SIZES = {
  paddingY: PADDING_Y,
  paddingX: PADDING_X,
  bgHeight: BG_HEIGHT,
  bgWidth: BG_WIDTH,
  gridGap: GRID_GAP,
  contentHeight: BG_HEIGHT - 2 * PADDING_Y,
};
