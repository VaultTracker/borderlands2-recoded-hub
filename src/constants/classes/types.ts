import type { Bl2ClassType } from '@/constants/common/classes';
import type { SkillBranchKey } from '@/constants/common/skill';

export type SkillDetailType = {
  name: string;
  value?: number;
  prefix?: string;
  suffix?: string;
};

export type SkillTreeItemPositionType = { row: number; col: number };

export type SkillTreeItemType = {
  position: SkillTreeItemPositionType;
  name: string;
  description: string;
  details: SkillDetailType[];
  maxPoints: number;
  killSkill?: boolean;
  augment?: boolean;
  melee?: boolean;
};

export type SkillBranchType = {
  name: string;
  description: string;
  items: SkillTreeItemType[];
};

export type ChracterSkillDataType = {
  character: Bl2ClassType;
  actionSkill: {
    name: string;
    description: string;
    details: SkillDetailType[];
  };
  skills: Record<SkillBranchKey, SkillBranchType>;
};
