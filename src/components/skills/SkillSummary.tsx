import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SKILL_TREE_COLORS } from '@/constants/common/skill';
import { cn } from '@/lib/utils';
import { useSkillDataStore } from '@/store/skill-data.store';
import { sumSkillBranchPoints, useSkillPointsStore } from '@/store/skill-points.store';
import { mapValues } from 'es-toolkit';
import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { SkillDetails } from './SkillDetails';

export const SkillSummary = ({ className, ...props }: React.ComponentProps<typeof Card>) => {
  const { data, character } = useSkillDataStore();
  type SkillBranchKey = keyof typeof data.skills;

  const branches = useSkillPointsStore(character)(useShallow((state) => state.branches));

  const branchesActiveMap = useMemo(
    () => mapValues(branches, (branch) => sumSkillBranchPoints(branch) > 0),
    [branches]
  );

  return (
    <Card className={cn('max-auto w-full max-w-[720px] flex-1 p-4', className)} {...props}>
      <h2 className="text-2xl font-semibold">Skill Summary</h2>
      <Tabs>
        {Object.values(branchesActiveMap).some(Boolean) && (
          <TabsList>
            {(Object.keys(data.skills) as SkillBranchKey[]).map((key) => (
              <TabsTrigger value={key} key={key} disabled={!branchesActiveMap[key]}>
                {data.skills[key].name}
              </TabsTrigger>
            ))}
          </TabsList>
        )}
        {(Object.entries(data.skills) as [SkillBranchKey, (typeof data.skills)[SkillBranchKey]][]).map(
          ([key, branchData]) => {
            const branchPoints = branches[key];
            const color = SKILL_TREE_COLORS[key];
            if (!branchesActiveMap[key]) return null;
            return (
              <TabsContent key={key} value={key} className="rounded-lg bg-muted px-3 py-1.5">
                <h3 className="font-skill text-2xl font-semibold" style={{ color }}>
                  {branchData.name}
                </h3>
                <div className="divide-y pt-1">
                  {branchData.items.map((item) => {
                    const point = branchPoints[item.position.row][item.position.col];
                    if (!point) return null;
                    return (
                      <div key={item.name} className="pt-1 pb-1.5">
                        <h3 className="text-lg font-semibold">
                          <skill>{item.name}</skill>
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <SkillDetails className="bg-card" details={item.details} points={point} />
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            );
          }
        )}
      </Tabs>
    </Card>
  );
};
