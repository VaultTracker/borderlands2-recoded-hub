import type { Bl2ClassType } from '@/constants/common/classes';
import type { SkillTreeKey } from '@/constants/skills/core';

export type SkillDetailData = {
  name: string;
  value?: number;
  prefix?: string;
  suffix?: string;
};

export type SkillTreeItemPosition = { row: number; col: number };

export type SkillTreeItem = {
  position: SkillTreeItemPosition;
  name: string;
  description: string;
  details: SkillDetailData[];
  maxPoints: number;
  killSkill?: boolean;
  augment?: boolean;
  melee?: boolean;
};

export type SkillTreeData = {
  name: string;
  description: string;
  items: SkillTreeItem[];
};

export type SkillTreesData = Record<SkillTreeKey, SkillTreeData>;

export type ActionSkillData = {
  name: string;
  description: string;
  details: SkillDetailData[];
};

export type CharacterSkillTreeData = {
  character: Bl2ClassType;
  actionSkill: ActionSkillData;
  skills: SkillTreesData;
};
