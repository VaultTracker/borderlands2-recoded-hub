import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import type { SkillTreeItemType } from '@/constants/classes/types';
import type { SkillBranchKey } from '@/constants/common/skill';
import { cn } from '@/lib/utils';
import { useSkillDataStore } from '@/store/skill-data.store';
import { getSkillBranchTier, useSkillPointsStore } from '@/store/skill-points.store';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { SkillDetails } from './SkillDetails';

type SkillItemProps = {
  data: SkillTreeItemType;
  branchKey: SkillBranchKey;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SkillItem = ({ data, branchKey, className, style, ...props }: SkillItemProps) => {
  const { character } = useSkillDataStore();
  const branchPoints = useSkillPointsStore(character)(useShallow((state) => state.getSkillBranch(branchKey)));
  const currentTier = getSkillBranchTier(branchPoints, { character, branchKey });
  const isAvailable = data.position.row <= currentTier;

  const currentPoint = branchPoints[data.position.row][data.position.col];
  const setItemPoint = useSkillPointsStore(character)(useShallow((state) => state.setSkillBranchItemPoint));

  const updatePoint = (adder: number) => {
    const newPoint = Math.min(Math.max(currentPoint + adder, 0), data.maxPoints || 5);
    setItemPoint(branchKey, data.position, newPoint);
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
            backgroundImage: `url(${import.meta.env.BASE_URL}/images/common/${data.killSkill ? 'kill' : 'common'}-skill.png)`,
            backgroundSize: 'cover',
          }}
          {...props}
        >
          <img
            className="size-full object-contain"
            src={`${import.meta.env.BASE_URL}/images/classes/${character}/skills/${branchKey}-${data.position.row}-${data.position.col}.png`}
            alt={data.name}
          />
          {isAvailable && (
            <div
              className="absolute -right-1 -bottom-1 flex h-[21px] w-[39px] items-center justify-center pt-0.5 text-sm"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/images/common/skill-points-overlay.png)` }}
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
