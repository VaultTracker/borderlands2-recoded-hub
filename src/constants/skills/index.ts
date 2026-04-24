import { DATA as AXTON_SKILL_DATA } from './axton';
import { DATA as GAIGE_SKILL_DATA } from './gaige';
import { DATA as KRIEG_SKILL_DATA } from './krieg';
import { DATA as MAYA_SKILL_DATA } from './maya';
import { DATA as SALVADOR_SKILL_DATA } from './salvador';
import { DATA as ZERO_SKILL_DATA } from './zero';

export type * from './types.d';
export * from './core';
export * from './tiers';

const SKILL_SKILL_DATA_MAP = {
  axton: AXTON_SKILL_DATA,
  gaige: GAIGE_SKILL_DATA,
  maya: MAYA_SKILL_DATA,
  krieg: KRIEG_SKILL_DATA,
  salvador: SALVADOR_SKILL_DATA,
  zer0: ZERO_SKILL_DATA,
};

export {
  SKILL_SKILL_DATA_MAP,
  AXTON_SKILL_DATA,
  GAIGE_SKILL_DATA,
  KRIEG_SKILL_DATA,
  MAYA_SKILL_DATA,
  SALVADOR_SKILL_DATA,
  ZERO_SKILL_DATA,
};
