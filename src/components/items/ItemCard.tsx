'use client';

import { BASE_PATH } from '~/next.config';

import { ManuFacturerBadge } from '@/components/badges/ManuFacturerBadge';
import { RairityBadge } from '@/components/badges/RairityBadge';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RARITY_COLORS, RarityKey } from '@/constants/common/rarity';
import type { Item } from '@/stores/items.store';

import { ItemRedText } from './ItemRedText';

export const ItemCard = ({ item }: { item: Item }) => {
  const rarityColor = RARITY_COLORS[item.rarity.toLowerCase() as RarityKey] ?? RARITY_COLORS.common;
  return (
    <Card className="h-full gap-2 p-4">
      <CardHeader className="p-0">
        <div className="flex items-start justify-between">
          <CardTitle style={{ color: rarityColor }}>{item.name}</CardTitle>
          <RairityBadge className="my-0.5" rarity={item.rarity} />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{item.itemType}</Badge>
          {item.manufacturer && <ManuFacturerBadge manufacturer={item.manufacturer} />}
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-0">
        {item.redText && <ItemRedText>{item.redText}</ItemRedText>}
        <p className="text-foreground/85">{item.effect}</p>
      </CardContent>
      <Separator />
      <CardFooter className="block space-y-2 p-0">
        <div className="text-muted-foreground flex items-center gap-2 text-xs">Original Item: {item.origin}</div>
        {item.sources && item.sources.length > 0 && (
          <div className="flex flex-col gap-0.5">
            {item.sources.map((source) => (
              <a key={source} href={`${BASE_PATH}/sources?name=${source}`}>
                <Badge variant="outline" className="bg-blue-500/65 hover:bg-blue-500/80">
                  {source}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
