import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import type { Bl2ClassType } from '@/constants/common/classes';
import { MAX_SKILL_ROW, SKILL_TREE_COLORS, type SkillBranchKey } from '@/constants/common/skill';
import { CHARACTER_SKILL_TIER_BREAKPOINTS_MAP } from '@/constants/skill-tiers';
import { cn } from '@/lib/utils';
import { useSkillDataStore } from '@/store/skill-data.store';
import { sumSkillBranchPoints, useSkillPointsStore } from '@/store/skill-points.store';
import { round } from 'es-toolkit';
import { useShallow } from 'zustand/react/shallow';
import { SkillItem } from './SkillItem';

type SkillBrenchProps = {
  className?: string;
  branchKey: SkillBranchKey;
};

const PADDING_Y = 23;
const PADDING_X = 39;
const BG_HEIGHT = 396;
const BG_WIDTH = 247;
const GRID_GAP = 6;
const CONTENT_HEIGHT = BG_HEIGHT - 2 * PADDING_Y;

function calculateVisibleHeight(
  totalBranchPoints: number,
  { character, branchKey }: { character: Bl2ClassType; branchKey: SkillBranchKey }
) {
  const tierBreakpoints = CHARACTER_SKILL_TIER_BREAKPOINTS_MAP[character][branchKey];
  const rowIndex = tierBreakpoints.findIndex((point) => point > totalBranchPoints);
  if (rowIndex >= MAX_SKILL_ROW - 1) return '100%';
  const basePercentage = 16.66;
  const rowPercentage = Math.max(rowIndex) * basePercentage;
  const currentTierPoints = tierBreakpoints[rowIndex - 1] || 0;
  const nextTierPoints = tierBreakpoints[rowIndex];
  const breakGap = nextTierPoints - currentTierPoints;
  const pointPercentage = ((totalBranchPoints - currentTierPoints) / breakGap) * basePercentage;
  const percentage = round(basePercentage + rowPercentage + pointPercentage, 2);
  return `${PADDING_Y + (CONTENT_HEIGHT * percentage) / 100}px`;
}

export const SkillBrench = ({ className, branchKey }: SkillBrenchProps) => {
  const { data } = useSkillDataStore();
  const { skills } = data;
  const branchData = skills[branchKey];

  const branch = useSkillPointsStore(data.character)(useShallow((state) => state.getSkillBranch(branchKey)));

  const color = SKILL_TREE_COLORS[branchKey];
  const totalBranchPoints = sumSkillBranchPoints(branch);
  const visibleHeight = calculateVisibleHeight(totalBranchPoints, { character: data.character, branchKey });

  return (
    <div
      data-skill-branch
      className={cn('relative grid', className)}
      style={{
        padding: `${PADDING_Y}px ${PADDING_X}px`,
        width: `${BG_WIDTH}px`,
        height: `${BG_HEIGHT}px`,
        backgroundImage: `url(${import.meta.env.BASE_URL}/images/common/skill-bg-gray-${branchKey}.png)`,
      }}
    >
      {/* Skill branch background */}
      <div
        data-skill-branch-background
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          width: `${BG_WIDTH}px`,
          height: visibleHeight,
          backgroundImage: `url(${import.meta.env.BASE_URL}/images/common/skill-bg-${branchKey}.png)`,
        }}
      ></div>

      {/* Skill branch info */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            data-skill-branch-info
            className="absolute inset-x-10 bottom-0 flex translate-y-1.5 grid-cols-2 items-start gap-2 font-skill text-3xl font-semibold"
            style={{ textShadow: '0 0 6px black' }}
          >
            <span
              className="inline-block flex-1 overflow-hidden text-left text-ellipsis whitespace-nowrap"
              style={{ color, textShadow: '0 0 6px black' }}
            >
              {branchData.name}
            </span>
            <span className="ml-auto shrink-0">{totalBranchPoints}</span>
          </button>
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <p dangerouslySetInnerHTML={{ __html: branchData.description }}></p>
        </HoverCardContent>
      </HoverCard>

      <div
        className="relative grid grid-cols-3"
        style={{ gap: `${GRID_GAP}px`, gridTemplateRows: `repeat(${MAX_SKILL_ROW}, minmax(0, 1fr))` }}
      >
        {branchData.items.map((item) => (
          <SkillItem key={item.name} data={item} branchKey={branchKey} />
        ))}
      </div>
    </div>
  );
};
