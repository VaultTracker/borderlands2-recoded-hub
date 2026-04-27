'use client';

import { useLayoutEffect } from 'react';

import { Bl2ClassType } from '@/constants/common/classes';
import { persistSkillTrees, useSkillTreeStore } from '@/stores/skill-tree.store';

export const SkillSync = ({ character }: { character: Bl2ClassType }) => {
  const hydrateStore = useSkillTreeStore((state) => state.hydrateStore);
  useLayoutEffect(() => {
    hydrateStore(character);
    return () => {
      persistSkillTrees(character);
    };
  }, [character, hydrateStore]);
  return null;
};
