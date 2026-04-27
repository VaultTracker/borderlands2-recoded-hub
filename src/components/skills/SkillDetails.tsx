import { round } from 'es-toolkit';

import type { SkillDetailData } from '@/constants/skills/types';
import { cn } from '@/lib/utils';

type SkillDetailsProps = {
  className?: string;
  details: SkillDetailData[];
  points?: number;
};

export const SkillDetails = ({ className, details, points = 0 }: SkillDetailsProps) => {
  return (
    <div className={cn('bg-muted text-foreground/85 mt-2 rounded-sm px-2.5 text-sm', className)}>
      <ul className="list-inside list-disc divide-y">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center gap-0.5 py-1.5">
            <span className="font-medium">{detail.name}</span>
            <span className="ml-auto">{detail.prefix}</span>
            {detail.value && <span>{round(detail.value * points, 2)}</span>}
            <span>{detail.suffix}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
