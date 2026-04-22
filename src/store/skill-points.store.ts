import type { SkillTreeItemPositionType } from '@/constants/classes/types';
import { BL2_CLASSES, type Bl2ClassType } from '@/constants/common/classes';
import {
  MAX_SKILL_ITEM_POINTS,
  MAX_SKILL_ROW,
  SKILL_BRANCH_KEYS,
  TOTAL_SKILL_POINTS,
  type SkillBranchKey,
} from '@/constants/common/skill';
import { CHARACTER_SKILL_TIER_BREAKPOINTS_MAP } from '@/constants/skill-tiers';
import { flattenDeep, inRange, isString, mapValues, sum } from 'es-toolkit';
import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SkillBranchPoints = Array<number[]>;
export type SkillBranches = {
  green: SkillBranchPoints;
  blue: SkillBranchPoints;
  red: SkillBranchPoints;
};
export type SkillPointsStoreState = {
  branches: SkillBranches;
};
export type SkillPointsStoreActions = {
  getSkillBranch: (tree: SkillBranchKey | number) => SkillBranchPoints;
  setSkillBranchPoints: (tree: SkillBranchKey, skillTreePoints: SkillBranchPoints) => void;
  setSkillBranchItemPoint: (tree: SkillBranchKey, position: SkillTreeItemPositionType, value: number) => void;
  resetSkillPoints: () => void;
};
export type SkillPointsStore = SkillPointsStoreState & SkillPointsStoreActions;

export const createEmptySkillBranch = () => Array.from({ length: MAX_SKILL_ROW }, () => [0, 0, 0]);

/** Sum skill tree points */
export const sumSkillBranchPoints = (branch: SkillBranchPoints) => sum(flattenDeep(branch));
/** Calcualte total skill points of character */
export const calculateTotalSkillPoints = (branch: SkillBranches) =>
  sum(Object.values(branch).map(sumSkillBranchPoints));
/** Get skill tree tier */
export const getSkillBranchTier = (
  branch: SkillBranchPoints,
  { character, branchKey }: { character: Bl2ClassType; branchKey: SkillBranchKey }
) => {
  const tierBreakpoints = CHARACTER_SKILL_TIER_BREAKPOINTS_MAP[character][branchKey];
  const sums = branch.map(sum);
  let acc = 0;
  for (let tier = 0; tier < MAX_SKILL_ROW; tier++) {
    acc += sums[tier];
    const isAvailable = acc >= tierBreakpoints[tier];
    if (!isAvailable) return tier;
  }
  return MAX_SKILL_ROW - 1;
};

const emptyCharacterMap = BL2_CLASSES.reduce(
  (acc, character) => {
    return { ...acc, [character]: {} };
  },
  {} as Record<Bl2ClassType, object>
);
export const SKILL_POINTS_STORE_MAP = mapValues(emptyCharacterMap, (_, character) =>
  create<SkillPointsStore>()(
    persist(
      (set, get) => ({
        branches: {
          green: createEmptySkillBranch(),
          blue: createEmptySkillBranch(),
          red: createEmptySkillBranch(),
        },
        getSkillBranch: (tree) => {
          if (isString(tree)) return get().branches[tree];
          if (tree > 2) throw new Error('Invalid skill tree key');
          return get().branches[SKILL_BRANCH_KEYS[tree]];
        },
        setSkillBranchPoints: (tree, skillTreePoints) =>
          set({ branches: { ...get().branches, [tree]: skillTreePoints } }),
        setSkillBranchItemPoint: (tree, { row, col }, value) => {
          const storageTotalSkillPoints = localStorage.getItem('BORDERLANDS2_RECODED_TOTAL_SKILL_POINTS');
          const totalSkillPoints = storageTotalSkillPoints ? parseInt(storageTotalSkillPoints) : TOTAL_SKILL_POINTS;
          // Validate value
          const isAvailable = inRange(value, 0, MAX_SKILL_ITEM_POINTS + 1);
          if (!isAvailable) return;

          // Get current skill tree
          const branches = get().branches;
          const currentBranch = branches[tree];
          const currentPoint = currentBranch[row][col];
          const currentTier = getSkillBranchTier(currentBranch, { character, branchKey: tree });

          if (row > currentTier) return;

          const pointDiff = value - currentPoint;
          const totalPoints = calculateTotalSkillPoints(branches);
          const isOverMaxTotalPoints = totalPoints + pointDiff > totalSkillPoints;
          if (isOverMaxTotalPoints) return;

          // Create new skill tree
          const newBranch = currentBranch.map((row) => row.map((point) => point));
          newBranch[row][col] = value;
          const newTier = getSkillBranchTier(newBranch, { character, branchKey: tree });

          const isPointDown = pointDiff < 0;
          // Check if tier is down
          if (isPointDown) {
            // Reset outrange tier points
            const isTierDown = newTier < currentTier;
            if (isTierDown) {
              newBranch.forEach((points, tier) => {
                if (tier <= newTier) return;
                return points.forEach((_, colIndex) => (newBranch[tier][colIndex] = 0));
              });
            }
          }
          set({ branches: { ...branches, [tree]: newBranch } });
        },
        resetSkillPoints: () => {
          set({
            branches: {
              green: createEmptySkillBranch(),
              blue: createEmptySkillBranch(),
              red: createEmptySkillBranch(),
            },
          });
        },
      }),
      { name: `BORDERLANDS2_RECODED_${character}_SKILL_STORE` }
    )
  )
);

export const useSkillPointsStore = (character: Bl2ClassType) => {
  return useMemo(() => SKILL_POINTS_STORE_MAP[character], [character]);
};
