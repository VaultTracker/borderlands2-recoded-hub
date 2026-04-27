'use client';

import { pascalCase, uniq } from 'es-toolkit';
import { ArrowDownAZ, ArrowUpAZ, SearchIcon, XIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useLayoutEffect, useMemo } from 'react';

import { MultiSelectFilterPopover } from '@/components/common/MultiSelectFilterPopover';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useItemFilterStore, useItemStore } from '@/stores/items.store';

interface ItemsFilterProps extends React.ComponentProps<'div'> {
  category: string;
}

const ITEM_SORT_KEYS = ['name', 'rarity', 'manufacturer'] as const;
type ItemSortKey = (typeof ITEM_SORT_KEYS)[number];

export const ItemsFilter = ({ category, className, ...props }: ItemsFilterProps) => {
  const searchParams = useSearchParams();
  const items = useItemStore((state) => state.categoryItems);

  const {
    searchValue,
    rarityFilters,
    manufacturerFilters,
    weaponTypeFilters,
    sortKey,
    isDescending,
    setSearchValue,
    setRarityFilters,
    setManufacturerFilters,
    setWeaponTypeFilters,
    setSortKey,
    toggleSortDirection,
    setCategory,
  } = useItemFilterStore((state) => state);

  useLayoutEffect(() => {
    const name = searchParams.get('name');
    setCategory(category);
    if (name) {
      setSearchValue(name);
      window.history.replaceState(null, '', window.location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const rarityOptions = useMemo(() => {
    return uniq(items.map((item) => item.rarity)).map((rarity) => ({ value: rarity, label: rarity }));
  }, [items]);
  const manufacturerOptions = useMemo(() => {
    return uniq(items.map((item) => item.manufacturer).filter((manufacturer) => manufacturer !== '')).map(
      (manufacturer) => ({ value: manufacturer, label: manufacturer }),
    );
  }, [items]);
  const weaponTypeOptions = useMemo(() => {
    return uniq(items.map((item) => item.itemType)).map((itemType) => ({ value: itemType, label: itemType }));
  }, [items]);

  return (
    <div className={cn('space-y-4', className)} {...props}>
      <div className="flex items-center gap-2">
        <InputGroup className="mr-auto max-w-3xs min-w-[12rem] flex-1">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            type="text"
            maxLength={100}
            value={searchValue || ''}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by name"
            aria-label="Search by name"
          />
          {searchValue.length > 0 && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost" onClick={() => setSearchValue('')}>
                <XIcon className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>

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
        {weaponTypeOptions.length > 1 && (
          <MultiSelectFilterPopover
            label="Weapon Type"
            options={weaponTypeOptions}
            selected={weaponTypeFilters}
            onChange={setWeaponTypeFilters}
          />
        )}

        <Select value={sortKey} onValueChange={(v) => setSortKey(v as ItemSortKey)} aria-label="Sorting Criteria">
          <SelectTrigger size="sm" className="min-w-[7.5rem]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent align="end">
            {ITEM_SORT_KEYS.map((key) => (
              <SelectItem key={key} value={key}>
                {pascalCase(key)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="size-8 shrink-0 p-0"
          onClick={toggleSortDirection}
          aria-label={isDescending ? 'Ascending, Switch to Descending' : 'Descending, Switch to Ascending'}
          title={isDescending ? 'Ascending' : 'Descending'}
        >
          {isDescending ? <ArrowUpAZ className="size-4" /> : <ArrowDownAZ className="size-4" />}
        </Button>
      </div>
    </div>
  );
};
