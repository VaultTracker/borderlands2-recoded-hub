'use client';

import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { BASE_PATH } from '~/next.config';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Bl2ClassType } from '@/constants/common/classes';
import type { SkillTreeItem, SkillTreeKey } from '@/constants/skills';
import { cn } from '@/lib/utils';
import { useSkillTreeStore } from '@/stores/skill-tree.store';

import { SkillDetails } from './SkillDetails';

type SkillItemProps = {
  character: Bl2ClassType;
  data: SkillTreeItem;
  branchKey: SkillTreeKey;
  tier: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ACTIVE_COLOR_MAP = {
  green: 'saturate(2.5) hue-rotate(-85deg)',
  blue: 'saturate(2.5) hue-rotate(-15deg)',
  red: 'saturate(2.5) hue-rotate(148deg)',
};

export const SkillItem = ({ character, data, branchKey, tier, className, style, ...props }: SkillItemProps) => {
  const skillTreePoints = useSkillTreeStore(useShallow((state) => state.skillTrees[branchKey]));
  const isAvailable = data.position.row <= tier;

  const currentPoint = skillTreePoints[data.position.row][data.position.col];
  const isActive = currentPoint > 0;
  const setItemPoint = useSkillTreeStore(useShallow((state) => state.setSkillTreePoint));

  const updatePoint = (adder: number) => {
    const newPoint = Math.min(Math.max(currentPoint + adder, 0), data.maxPoints || 5);
    setItemPoint(character, branchKey, data.position, newPoint);
  };

  const [open, setOpen] = useState(false);

  return (
    <HoverCard open={open}>
      <HoverCardTrigger asChild>
        <button
          className={cn('relative aspect-square', className)}
          onClick={() => updatePoint(1)}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            updatePoint(-1);
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{
            ...style,
            gridColumn: data.position.col + 1,
            gridRow: data.position.row + 1,
            backgroundImage: `url(${BASE_PATH}/images/common/${data.killSkill ? 'kill' : 'common'}-skill.webp)`,
            backgroundSize: 'cover',
            filter: isActive ? ACTIVE_COLOR_MAP[branchKey] : 'none',
          }}
          {...props}
        >
          <img
            className="size-full object-contain"
            src={`${BASE_PATH}/images/classes/${character}/skills/${branchKey}-${data.position.row}-${data.position.col}.webp`}
            alt={data.name}
          />
          {isAvailable && (
            <div
              className="absolute -right-1 -bottom-1 flex h-[21px] w-[39px] items-center justify-center pt-0.5 text-sm"
              style={{ backgroundImage: `url(${BASE_PATH}/images/common/skill-points-overlay.webp)` }}
            >
              <span>{currentPoint}</span>/<span>{data.maxPoints}</span>
            </div>
          )}
        </button>
      </HoverCardTrigger>
      <HoverCardContent align="center" side="right">
        <skill className="text-2xl font-semibold">{data.name}</skill>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        <SkillDetails details={data.details} points={currentPoint} />
      </HoverCardContent>
    </HoverCard>
  );
};
