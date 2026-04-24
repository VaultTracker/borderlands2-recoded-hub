import { MAX_SKILL_ROW } from './core';

const INITIAL = Array.from({ length: MAX_SKILL_ROW }, (_, index) => (index + 1) * 5);
INITIAL[MAX_SKILL_ROW - 1] = MAX_SKILL_ROW * 5 - 4;

export const CHARACTER_SKILL_TIER_BREAKPOINTS_MAP = {
  axton: {
    green: [5, 10, 15, 16, 18, 19],
    blue: [1, 11, 16, 21, 26, 27],
    red: [...INITIAL],
  },
  gaige: {
    green: [5, 10, 15, 20, 21, 22],
    blue: [...INITIAL],
    red: [...INITIAL],
  },
  krieg: {
    green: [1, 11, 16, 21, 26, 27],
    blue: [1, 11, 12, 13, 23, 24],
    red: [1, 11, 12, 17, 22, 24],
  },
  maya: {
    green: [...INITIAL],
    blue: [...INITIAL],
    red: [...INITIAL],
  },
  salvador: {
    green: [1, 6, 11, 16, 26, 27],
    blue: [10, 15, 20, 21, 26, 31],
    red: [...INITIAL],
  },
  zer0: {
    green: [1, 6, 16, 21, 22, 23],
    blue: [5, 10, 11, 16, 21, 22],
    red: [5, 10, 11, 16, 21, 22],
  },
};
