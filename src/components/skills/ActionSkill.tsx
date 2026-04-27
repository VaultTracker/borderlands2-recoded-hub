'use client';

import React from 'react';
import { BASE_PATH } from '~/next.config';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import type { ActionSkillData } from '@/constants/skills/types';
import { cn } from '@/lib/utils';

import { SkillDetails } from './SkillDetails';

type ActionSkillProps = {
  character: string;
  active?: boolean;
  data: ActionSkillData;
} & React.HTMLAttributes<HTMLDivElement>;

export const ActionSkill = ({ character, active, data, className, ...props }: ActionSkillProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className={cn('inline-block gap-2 p-4', className)} {...props}>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <skill>{data.name}</skill>
            </CardTitle>
            <CardDescription className="sr-only">{data.description}</CardDescription>
          </CardHeader>
          <div className={cn('relative h-[73px] w-[256px] overflow-visible')} {...props}>
            <img
              className="relative"
              src={`${BASE_PATH}/images/common/action-skill-bg.webp`}
              alt="Action Skill Background"
              style={{ filter: active ? 'saturate(8) hue-rotate(-85deg)' : 'none' }}
            />
            <div className="pointer-events-none absolute -inset-4 select-none">
              <img
                className="mx-auto h-full object-contain"
                src={`${BASE_PATH}/images/classes/${character}/action-skill.webp`}
                alt="Action Skill"
                style={{ filter: active ? 'saturate(0.5) hue-rotate(-85deg)' : 'none' }}
              />
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent align="center" side="right">
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-center text-sm"></p>
        <SkillDetails details={data.details} points={1} />
      </HoverCardContent>
    </HoverCard>
  );
};
