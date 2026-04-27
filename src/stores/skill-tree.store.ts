import { flattenDeep, isString, sum } from 'es-toolkit';
import { create } from 'zustand';

import type { Bl2ClassType } from '@/constants/common/classes';
import {
  CHARACTER_SKILL_TIER_BREAKPOINTS_MAP,
  MAX_SKILL_ROW,
  SKILL_TREE_KEYS,
  SkillTreeItemPosition,
  type SkillTreeKey,
} from '@/constants/skills';

export type SkillTreePoints = Array<number[]>;
export type SkillTrees = Record<SkillTreeKey, SkillTreePoints>;
export type SkillTreeStoreState = {
  skillTrees: SkillTrees;
};
export type SkillTreeStoreActions = {
  setSkillTreePoints: (character: Bl2ClassType, skillTreeKey: SkillTreeKey, points: SkillTreePoints) => void;
  setSkillTreePoint: (
    character: Bl2ClassType,
    skillTreeKey: SkillTreeKey,
    position: SkillTreeItemPosition,
    value: number,
  ) => void;
  hydrateStore: (character: Bl2ClassType) => void;
};
export type SkillTreeStore = SkillTreeStoreState & SkillTreeStoreActions;

const initializeSkillTrees = () =>
  SKILL_TREE_KEYS.reduce((acc, key) => {
    acc[key] = Array.from({ length: MAX_SKILL_ROW }, () => [0, 0, 0]);
    return acc;
  }, {} as SkillTrees);

export const useSkillTreeStore = create<SkillTreeStore>((set) => ({
  skillTrees: initializeSkillTrees(),
  hydrateStore: (character) => {
    const key = getStorageKey(character);
    try {
      const raw = localStorage.getItem(key);
      if (!raw) throw new Error('No data found');
      const data = JSON.parse(raw);
      set({ skillTrees: data });
    } catch {
      set({ skillTrees: initializeSkillTrees() });
    }
  },
  setSkillTreePoints: (skillTreeKey, points) => {
    set((state) => ({
      skillTrees: { ...state.skillTrees, [skillTreeKey]: points },
    }));
  },
  setSkillTreePoint: (character, skillTreeKey, position, value) => {
    set((state) => {
      const { skillTrees } = state;
      const skillTree = skillTrees[skillTreeKey];
      const currentTier = getSkillTreeTier(character, skillTreeKey, skillTree);

      const currentValue = state.skillTrees[skillTreeKey][position.row][position.col];
      const isPointDown = value < currentValue;
      const newSkillTree = state.skillTrees[skillTreeKey].map((row, rowIndex) => {
        if (rowIndex !== position.row) return row;
        return row.map((col, colIndex) => {
          if (colIndex !== position.col) return col;
          return value;
        });
      });

      if (isPointDown) {
        const newTier = getSkillTreeTier(character, skillTreeKey, newSkillTree);
        if (newTier < currentTier) {
          newSkillTree.forEach((row, rowIndex) => {
            if (rowIndex <= newTier) return;
            row.forEach((_, colIndex) => (newSkillTree[rowIndex][colIndex] = 0));
          });
        }
      }

      return { skillTrees: { ...state.skillTrees, [skillTreeKey]: newSkillTree } };
    });
  },
}));

const STORE_KEY = 'BORDERLANDS2_RECODED_HUB_SKILL_TREE_STORE';
const getStorageKey = (character: Bl2ClassType) => `${STORE_KEY}_${character}`;

/** Persist the skill trees to the local storage */
export function persistSkillTrees(character: Bl2ClassType, skillTrees?: SkillTrees) {
  const data = skillTrees ?? useSkillTreeStore.getState().skillTrees;
  const key = getStorageKey(character);
  console.log(data);
  localStorage.setItem(key, JSON.stringify(data));
}

/** Sum the points in the skill tree */
export function sumSkillTreePoints(skillTreeKey: SkillTreeKey): number;
export function sumSkillTreePoints(skillTree: SkillTreePoints): number;
export function sumSkillTreePoints(skillTreeKey: SkillTreeKey | SkillTreePoints) {
  const data = isString(skillTreeKey) ? useSkillTreeStore.getState().skillTrees[skillTreeKey] : skillTreeKey;
  if (!data) return 0;
  return sum(flattenDeep(data));
}

/** Calculate the total points in the skill trees */
export function calculateTotalSkillPoints(skillTrees?: SkillTrees): number {
  const data = skillTrees ?? useSkillTreeStore.getState().skillTrees;
  return sum(Object.values(data).map(sumSkillTreePoints));
}

/** Get the tier of the skill tree */
export function getSkillTreeTier(
  character: Bl2ClassType,
  skillTreeKey: SkillTreeKey,
  skillTree: SkillTreePoints,
): number {
  const sums = skillTree.map(sum);
  const tierBreakpoints = CHARACTER_SKILL_TIER_BREAKPOINTS_MAP[character][skillTreeKey];

  let acc = 0;
  for (let tier = 0; tier < MAX_SKILL_ROW; tier++) {
    acc += sums[tier];
    const isNext = acc >= tierBreakpoints[tier];
    if (isNext) continue;
    else return tier;
  }
  return MAX_SKILL_ROW - 1;
}

export function resetSkillTrees() {
  useSkillTreeStore.setState({ skillTrees: initializeSkillTrees() });
}
