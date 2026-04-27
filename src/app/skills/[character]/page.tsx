import { pascalCase } from 'es-toolkit';

import { ActionSkill } from '@/components/skills/ActionSkill';
import { SkillPoints } from '@/components/skills/SkillPoints';
import { SkillTree } from '@/components/skills/SkillTree';
import { BL2_CLASSES, Bl2ClassType } from '@/constants/common/classes';
import { CharacterSkillTreeData, SKILL_DATA_MAP, SKILL_TREE_KEYS } from '@/constants/skills';

export const generateStaticParams = async () => {
  return BL2_CLASSES.map((character) => ({ character }));
};

const Page = async ({ params }: { params: { character: Bl2ClassType; data: CharacterSkillTreeData } }) => {
  const { character } = await params;
  const data = SKILL_DATA_MAP[character];

  return (
    <main className="py-container flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">{pascalCase(character)}</h1>
      <SkillPoints />
      <ActionSkill character={character} data={data.actionSkill} />
      <div className="flex items-center justify-center gap-4">
        {SKILL_TREE_KEYS.map((key) => (
          <SkillTree key={key} skillTreeKey={key} data={data} />
        ))}
      </div>
    </main>
  );
};

export default Page;
