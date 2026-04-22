import { ActionSkill } from '@/components/skills/ActionSkill';
import { SkillBrench } from '@/components/skills/SkillBrench';
import { SkillSummary } from '@/components/skills/SkillSummary';
import { Button } from '@/components/ui/button';
import type { Bl2ClassType } from '@/constants/common/classes';
import { TOTAL_SKILL_POINTS } from '@/constants/common/skill';
import { skillDataStore, useSkillDataStore } from '@/store/skill-data.store';
import { calculateTotalSkillPoints, useSkillPointsStore } from '@/store/skill-points.store';
import { pascalCase } from 'es-toolkit';
import { useLayoutEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useShallow } from 'zustand/react/shallow';

export const SkillPage = ({ character }: { character: Bl2ClassType }) => {
  useLayoutEffect(() => {
    skillDataStore.getState().changeCharacter(character);
  }, [character]);

  const { data } = useSkillDataStore();
  const { actionSkill } = data;

  const [totalSkillPoints, setTotalSkillPoints] = useLocalStorage(
    'BORDERLANDS2_RECODED_TOTAL_SKILL_POINTS',
    TOTAL_SKILL_POINTS
  );

  const skillPointsStore = useSkillPointsStore(character);
  const resetSkillPoints = skillPointsStore(useShallow((state) => state.resetSkillPoints));
  const branches = skillPointsStore(useShallow((state) => state.branches));

  const spentPoints = useMemo(() => calculateTotalSkillPoints(branches), [branches]);

  const handleResetSkillPoints = () => {
    if (confirm('Are you sure you want to reset all skill points?')) {
      resetSkillPoints();
    }
  };

  const handleTotalSkillPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isPointed = spentPoints > 0;
    if (
      isPointed &&
      !confirm('Are you sure you want to change the total skill points?\nAll spent points will be lost.')
    )
      return;
    resetSkillPoints();
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    e.target.value = value;
    setTotalSkillPoints(parseInt(value || '0'));
  };

  return (
    <main className="flex flex-col items-center justify-center gap-6 py-12">
      <h1 className="text-center text-2xl font-bold">{pascalCase(character)}</h1>

      <div
        className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm"
        aria-live="polite"
      >
        <span>
          Total Points:{' '}
          <strong className="tabular-nums">
            <input
              type="text"
              className="w-10 rounded border bg-muted px-2 py-0.5 text-center focus:outline-none"
              value={totalSkillPoints}
              onChange={handleTotalSkillPointsChange}
            />
          </strong>
        </span>
        <span className="text-muted-foreground">·</span>
        <span>
          Spent Points: <strong className="tabular-nums">{spentPoints}</strong>
        </span>
        <span className="text-muted-foreground">·</span>
        <span>
          Remaining Points: <strong className="tabular-nums">{totalSkillPoints - spentPoints}</strong>
        </span>
        <Button type="button" variant="outline" size="sm" className="ml-2" onClick={handleResetSkillPoints}>
          Reset Skill Points
        </Button>
      </div>

      <ActionSkill character={character} data={actionSkill}></ActionSkill>

      <div className="flex items-center gap-4">
        <SkillBrench branchKey="green" />
        <SkillBrench branchKey="blue" />
        <SkillBrench branchKey="red" />
      </div>

      <SkillSummary className="mt-12" />
    </main>
  );
};
