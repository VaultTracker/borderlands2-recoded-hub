import { pascalCase } from 'es-toolkit';
import React from 'react';

import { RARITY_COLORS, type RarityKey } from '@/constants/common/rarity';
import { cn } from '@/lib/utils';

type RairityBadgeProps = {
  rarity: string;
} & React.ComponentProps<'span'>;

export const RairityBadge = ({ rarity, className, style, ...props }: RairityBadgeProps) => {
  const rarityKey = rarity.toLowerCase() as RarityKey;
  const rarityColor = RARITY_COLORS[rarityKey] ?? RARITY_COLORS.common;
  return (
    <span
      className={cn('rounded-full px-2 py-0.5 text-xs', className)}
      style={{ background: rarityColor, ...style }}
      {...props}
    >
      <span className="mix-blend-difference" style={{ color: rarityColor }}>
        {pascalCase(rarity)}
      </span>
    </span>
  );
};
