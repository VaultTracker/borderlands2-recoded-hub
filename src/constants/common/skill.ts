export const MAX_SKILL_ROW = 6;
export const MAX_SKILL_COL = 3;
export const MAX_SKILL_ITEM_POINTS = 5;
export const TOTAL_SKILL_POINTS = 75;
export const SKILL_BRANCH_KEYS = ['green', 'blue', 'red'] as const;
export const SKILL_TREE_COLORS = {
  green: '#41974D',
  blue: '#2A87C7',
  red: '#A93640',
} as const;

export type SkillBranchKey = (typeof SKILL_BRANCH_KEYS)[number];
