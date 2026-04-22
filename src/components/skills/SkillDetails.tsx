import type { SkillDetailType } from '@/constants/classes/types';
import { cn } from '@/lib/utils';
import { round } from 'es-toolkit';

type SkillDetailsProps = {
  className?: string;
  details: SkillDetailType[];
  points?: number;
};

export const SkillDetails = ({ className, details, points = 0 }: SkillDetailsProps) => {
  return (
    <div className={cn('mt-2 rounded-sm bg-muted px-2.5 text-sm text-foreground/85', className)}>
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
