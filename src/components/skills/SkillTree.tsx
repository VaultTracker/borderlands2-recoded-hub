'use client';

import { round } from 'es-toolkit';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { BASE_PATH } from '~/next.config';

import { Bl2ClassType } from '@/constants/common/classes';
import {
  CHARACTER_SKILL_TIER_BREAKPOINTS_MAP,
  CharacterSkillTreeData,
  MAX_SKILL_COL,
  MAX_SKILL_ROW,
  SKILL_TREE_COLORS,
  SKILL_TREE_SIZES,
  SkillTreeKey,
} from '@/constants/skills';
import { cn } from '@/lib/utils';
import { getSkillTreeTier, sumSkillTreePoints, useSkillTreeStore } from '@/stores/skill-tree.store';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { SkillItem } from './SkillItem';

type SkillTreeProps = {
  skillTreeKey: SkillTreeKey;
  data: CharacterSkillTreeData;
} & React.ComponentProps<'section'>;

export function calculateVisibleHeight(
  totalBranchPoints: number,
  { character, branchKey }: { character: Bl2ClassType; branchKey: SkillTreeKey },
) {
  const tierBreakpoints = CHARACTER_SKILL_TIER_BREAKPOINTS_MAP[character][branchKey];
  const rowIndex = tierBreakpoints.findIndex((point) => point > totalBranchPoints);
  if (rowIndex === -1 || rowIndex >= MAX_SKILL_ROW - 1) return '100%';
  const basePercentage = 16.66;
  const rowPercentage = rowIndex * basePercentage;
  const currentTierPoints = tierBreakpoints[rowIndex - 1] || 0;
  const nextTierPoints = tierBreakpoints[rowIndex];
  const breakGap = nextTierPoints - currentTierPoints;
  const pointPercentage = ((totalBranchPoints - currentTierPoints) / breakGap) * basePercentage;
  const percentage = round(basePercentage + rowPercentage + pointPercentage, 2);
  return `${SKILL_TREE_SIZES.paddingY + (SKILL_TREE_SIZES.contentHeight * percentage) / 100}px`;
}

export const SkillTree = ({ data, skillTreeKey, className, style, ...props }: SkillTreeProps) => {
  const skillTreeData = data.skills[skillTreeKey];
  const color = SKILL_TREE_COLORS[skillTreeKey];

  const skillTree = useSkillTreeStore(useShallow((state) => state.skillTrees[skillTreeKey]));
  const totalSkillTreePoints = useMemo(() => sumSkillTreePoints(skillTree), [skillTree]);
  const visibleHeight = useMemo(
    () => calculateVisibleHeight(totalSkillTreePoints, { character: data.character, branchKey: skillTreeKey }),
    [totalSkillTreePoints, data.character, skillTreeKey],
  );

  const tier = useMemo(
    () => getSkillTreeTier(data.character, skillTreeKey, skillTree),
    [data.character, skillTree, skillTreeKey],
  );

  return (
    <section
      className={cn('relative grid', className)}
      style={{
        ...style,
        padding: `${SKILL_TREE_SIZES.paddingY}px ${SKILL_TREE_SIZES.paddingX}px`,
        width: `${SKILL_TREE_SIZES.bgWidth}px`,
        height: `${SKILL_TREE_SIZES.bgHeight}px`,
        backgroundImage: `url(${BASE_PATH}/images/common/skill-bg-gray-${skillTreeKey}.webp)`,
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          width: `${SKILL_TREE_SIZES.bgWidth}px`,
          height: visibleHeight,
          backgroundImage: `url(${BASE_PATH}/images/common/skill-bg-${skillTreeKey}.webp)`,
        }}
      ></div>

      <div
        className="grid"
        style={{
          gap: `${SKILL_TREE_SIZES.gridGap}px`,
          gridTemplateRows: `repeat(${MAX_SKILL_ROW}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${MAX_SKILL_COL}, minmax(0, 1fr))`,
        }}
      >
        {skillTreeData.items.map((item) => (
          <SkillItem
            key={item.position.row + '-' + item.position.col}
            character={data.character}
            data={item}
            branchKey={skillTreeKey}
            tier={tier}
          />
        ))}
      </div>

      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            className="font-skill absolute inset-x-10 bottom-0 flex translate-y-1.5 grid-cols-2 items-start gap-2 text-3xl font-semibold"
            style={{ textShadow: '0 0 6px black' }}
          >
            <span
              className="inline-block flex-1 overflow-hidden text-left text-ellipsis whitespace-nowrap"
              style={{ color, textShadow: '0 0 6px black' }}
            >
              {skillTreeData.name}
            </span>
            <span className="ml-auto shrink-0">{totalSkillTreePoints}</span>
          </button>
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <p dangerouslySetInnerHTML={{ __html: skillTreeData.description }}></p>
        </HoverCardContent>
      </HoverCard>
    </section>
  );
};
