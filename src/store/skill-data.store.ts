import type { ChracterSkillDataType } from '@/constants/classes/types';
import { BL2_CLASSES, type Bl2ClassType } from '@/constants/common/classes';
import { AXTON_DATA, GAIGE_DATA, KRIEG_DATA, MAYA_DATA, SALVADOR_DATA, ZERO_DATA } from '@/constants/classes';
import { useStore, createStore } from 'zustand';

type SkillDataStore = {
  data: ChracterSkillDataType;
  character: Bl2ClassType;
  changeCharacter: (character: Bl2ClassType) => void;
};

const SKILL_DATA_MAP = {
  axton: AXTON_DATA,
  gaige: GAIGE_DATA,
  maya: MAYA_DATA,
  krieg: KRIEG_DATA,
  salvador: SALVADOR_DATA,
  zer0: ZERO_DATA,
};

export const skillDataStore = createStore<SkillDataStore>((set) => ({
  character: BL2_CLASSES[0],
  data: SKILL_DATA_MAP[BL2_CLASSES[0]],
  changeCharacter: (character) => set({ character, data: SKILL_DATA_MAP[character] }),
}));

export const useSkillDataStore = () => {
  return useStore(skillDataStore);
};
