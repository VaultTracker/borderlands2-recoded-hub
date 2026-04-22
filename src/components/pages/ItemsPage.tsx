import { ManuFacturerBadge } from '@/components/badges/ManuFacturerBadge';
import { RairityBadge } from '@/components/badges/RairityBadge';
import { RedText } from '@/components/common/RedText';
import { ItemsVirtualizedGrid } from '@/components/items/ItemsVirtualizedGrid';
import { MultiSelectFilterPopover } from '@/components/items/MultiSelectFilterPopover';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { RARITY_COLORS, type RarityKey } from '@/constants/common/rarity';
import { DROP_SOURCES } from '@/constants/items/drop-sources';
import { ITEM_CATEGORY_MAP, ITEMS } from '@/constants/items/item';
import {
  processItemsList,
  uniqueSortedByNormalized,
  type ItemsSortDirection,
  type ItemsSortKey,
} from '@/lib/items-list-pipeline';
import { groupBy } from 'es-toolkit';
import { ArrowDownAZ, ArrowUpAZ, SearchIcon, XIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { TooltipProvider } from '../ui/tooltip';

const bl2Items = ITEMS.map((item) => {
  const sources: string[] = [];
  DROP_SOURCES.forEach((source) => {
    const isInSource = source.drops.includes(item.name);
    if (isInSource) {
      sources.push(source.name);
    }
  });
  return { ...item, sources };
});

const itemCategoryByType = ITEM_CATEGORY_MAP as Record<string, string>;

const bl2CategoryItems = groupBy(bl2Items, (item) => {
  const type = item.itemType.toLowerCase();
  return itemCategoryByType[type] ?? 'weapons';
});

type Bl2Item = (typeof bl2Items)[number];

export function ItemsPage({ category }: { category: string }) {
  const items = useMemo(() => bl2CategoryItems[category] ?? [], [category]);

  const [search, setSearch] = useState(new URLSearchParams(window.location.search).get('name') || '');
  const [rarityFilters, setRarityFilters] = useState<Set<string>>(() => new Set());
  const [manufacturerFilters, setManufacturerFilters] = useState<Set<string>>(() => new Set());
  const [itemTypeFilters, setItemTypeFilters] = useState<Set<string>>(() => new Set());
  const [sortKey, setSortKey] = useState<ItemsSortKey>('name');
  const [sortDir, setSortDir] = useState<ItemsSortDirection>('asc');

  const isWeaponsCategory = category === 'weapons';

  const rarityOptions = useMemo(() => uniqueSortedByNormalized(items, (i) => i.rarity), [items]);
  const manufacturerOptions = useMemo(() => uniqueSortedByNormalized(items, (i) => i.manufacturer), [items]);
  const itemTypeOptions = useMemo(() => uniqueSortedByNormalized(items, (i) => i.itemType), [items]);

  const visibleItems = useMemo(() => {
    return processItemsList(items as Bl2Item[], {
      search,
      rarityFilters,
      manufacturerFilters,
      itemTypeFilters,
      applyItemTypeFilter: isWeaponsCategory,
      sortKey,
      sortDir,
    });
  }, [items, search, rarityFilters, manufacturerFilters, itemTypeFilters, isWeaponsCategory, sortKey, sortDir]);

  return (
    <TooltipProvider>
      <div className="flex shrink-0 flex-wrap items-center gap-3">
        <InputGroup className="max-w-3xs min-w-[12rem] flex-1">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            maxLength={100}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
            aria-label="Search by name"
          />
          {search.length > 0 && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost" onClick={() => setSearch('')}>
                <XIcon className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
        <div className="ml-auto flex min-w-0 flex-wrap items-center justify-end gap-2">
          {rarityOptions.length > 1 && (
            <MultiSelectFilterPopover
              label="Rarity"
              options={rarityOptions}
              selected={rarityFilters}
              onChange={setRarityFilters}
            />
          )}
          {manufacturerOptions.length > 1 && (
            <MultiSelectFilterPopover
              label="Manufacturer"
              options={manufacturerOptions}
              selected={manufacturerFilters}
              onChange={setManufacturerFilters}
            />
          )}
          {isWeaponsCategory ? (
            <MultiSelectFilterPopover
              label="Weapon Type"
              options={itemTypeOptions}
              selected={itemTypeFilters}
              onChange={setItemTypeFilters}
            />
          ) : null}
          <Select value={sortKey} onValueChange={(v) => setSortKey(v as ItemsSortKey)} aria-label="Sorting Criteria">
            <SelectTrigger size="sm" className="min-w-[7.5rem]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="rarity">Rarity</SelectItem>
              <SelectItem value="manufacturer">Manufacturer</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="size-8 shrink-0 p-0"
            onClick={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
            aria-label={sortDir === 'asc' ? 'Ascending, Switch to Descending' : 'Descending, Switch to Ascending'}
            title={sortDir === 'asc' ? 'Ascending' : 'Descending'}
          >
            {sortDir === 'asc' ? <ArrowDownAZ className="size-4" /> : <ArrowUpAZ className="size-4" />}
          </Button>
        </div>
      </div>

      <div className="relative min-h-[480px] flex-1">
        <div className="absolute inset-0">
          {visibleItems.length === 0 ? (
            <p className="shrink-0 text-sm text-muted-foreground">No items found.</p>
          ) : (
            <ItemsVirtualizedGrid
              className="h-full"
              items={visibleItems}
              itemKey={(item) => item.name}
              renderItem={(item) => {
                const rarityColor = RARITY_COLORS[item.rarity.toLowerCase() as RarityKey] ?? RARITY_COLORS.common;
                return (
                  <Card className="h-full gap-2 p-4">
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-between">
                        <CardTitle style={{ color: rarityColor }}>{item.name}</CardTitle>
                        <RairityBadge rarity={item.rarity} />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{item.itemType}</Badge>
                        <ManuFacturerBadge manufacturer={item.manufacturer} />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 p-0">
                      {item.redText && <RedText>{item.redText}</RedText>}
                      <p className="text-foreground/85">{item.effect}</p>
                    </CardContent>
                    <Separator />
                    <CardFooter className="block space-y-2 p-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        Original Item: {item.origin}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {item.sources.map((source) => (
                          <a key={source} href={`/sources?name=${source}`}>
                            <Badge variant="outline" className="bg-blue-500/65 hover:bg-blue-500/80">
                              {source}
                            </Badge>
                          </a>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                );
              }}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
