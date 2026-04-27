'use client';

import { useLocalStorage } from 'usehooks-ts';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import { MAX_TOTAL_SKILL_POINTS } from '@/constants/skills';
import { calculateTotalSkillPoints, resetSkillTrees, useSkillTreeStore } from '@/stores/skill-tree.store';

const STORE_KEY = 'BORDERLANDS2_RECODED_HUB_MAX_SKILL_POINTS';

export const SkillPoints = () => {
  const totalSpentPoints = useSkillTreeStore(useShallow((state) => calculateTotalSkillPoints(state.skillTrees)));
  const [maxSkillPoints, setMaxSkillPoints] = useLocalStorage(STORE_KEY, MAX_TOTAL_SKILL_POINTS);

  const handleClickReset = () => {
    if (!confirm('Are you sure you want to reset all skill points?')) return;
    resetSkillTrees();
    setMaxSkillPoints(MAX_TOTAL_SKILL_POINTS);
  };

  return (
    <div
      className="border-border bg-card flex flex-wrap items-center justify-center gap-4 rounded-lg border px-4 py-3 text-sm shadow-sm"
      aria-live="polite"
    >
      <span>
        Total Points:{' '}
        <strong className="tabular-nums">
          <input
            id="max-skill-points"
            type="text"
            className="bg-muted w-10 rounded border px-2 py-0.5 text-center focus:outline-none"
            value={maxSkillPoints}
            onChange={(e) => {
              const replaced = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
              if (!replaced) return setMaxSkillPoints(0);
              setMaxSkillPoints(Number(replaced));
            }}
          />
        </strong>
      </span>
      <span className="text-muted-foreground">·</span>
      <span>
        Spent Points:{' '}
        <strong id="spent-skill-points" className="tabular-nums">
          {totalSpentPoints}
        </strong>
      </span>
      <span className="text-muted-foreground">·</span>
      <span>
        Remaining Points:{' '}
        <strong id="remaining-skill-points" className="tabular-nums">
          {maxSkillPoints - totalSpentPoints}
        </strong>
      </span>
      <Button
        id="reset-skill-points"
        type="button"
        variant="outline"
        size="sm"
        className="ml-2"
        onClick={handleClickReset}
      >
        Reset Skill Points
      </Button>
    </div>
  );
};
