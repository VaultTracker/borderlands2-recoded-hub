'use client';

import { ColumnDef } from '@tanstack/react-table';
import { isSet } from 'es-toolkit';
import Link from 'next/link';

import { MultiSelectFilterPopover } from '@/components/common/MultiSelectFilterPopover';
import { DROP_SOURCES, DROP_SOURCES_TYPES, ITEMS, ITEM_CATEGORIES, ITEM_CATEGORY_MAP } from '@/constants/items';

const ITEMS_CATEGORY_MATCHES = ITEMS.reduce(
  (acc, item) => {
    const key = item.itemType.toLowerCase();
    const isCategoryMapKey = key in ITEM_CATEGORY_MAP;
    const category = isCategoryMapKey ? ITEM_CATEGORY_MAP[key as keyof typeof ITEM_CATEGORY_MAP] : ITEM_CATEGORIES[0];
    acc[item.name] = category;
    return acc;
  },
  {} as Record<string, string>,
);

const parseLocation = (location: string) => {
  return location
    .split(',')
    .map((loc) => loc.trim())
    .filter(Boolean);
};

const TYPE_OPTIONS = DROP_SOURCES_TYPES.map((type) => ({ value: type, label: type }));
const LOCATION_OPTIONS = Array.from(new Set(DROP_SOURCES.flatMap((source) => parseLocation(source?.location || ''))))
  .sort()
  .map((location) => ({ value: location, label: location }));

export const columns: ColumnDef<(typeof DROP_SOURCES)[number]>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      const filterValue = column.getFilterValue() as Set<string>;
      return (
        <MultiSelectFilterPopover
          label="Type"
          options={TYPE_OPTIONS}
          buttonProps={{ variant: 'ghost', className: '-mx-3 px-1.5 gap-2' }}
          iconAlign="end"
          selected={filterValue}
          onChange={column.setFilterValue}
        />
      );
    },
    filterFn: (row, _, filterValue) => {
      if (!isSet(filterValue) || filterValue.size === 0) return true;
      return filterValue.has(row.original.type);
    },
    cell: ({ row }) => {
      return <span className="font-skill">{row.original.type}</span>;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'location',
    header: ({ column }) => {
      const filterValue = column.getFilterValue() as Set<string>;
      return (
        <MultiSelectFilterPopover
          label="Location"
          options={LOCATION_OPTIONS}
          buttonProps={{ variant: 'ghost', className: '-mx-3 px-1.5 gap-2' }}
          iconAlign="end"
          selected={filterValue}
          onChange={column.setFilterValue}
        />
      );
    },
    filterFn: (row, _, filterValue) => {
      if (!isSet(filterValue) || filterValue.size === 0) return true;
      const locations = parseLocation(row.original.location || '');
      return locations.some((location) => filterValue.has(location));
    },
    cell: ({ row }) => {
      const location = row.original.location || 'Unknown';
      const locations = parseLocation(location);
      return (
        <div className="flex flex-wrap gap-2">
          {locations.map((loc, index) => (
            <span
              key={loc + index}
              className="inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800"
            >
              {loc}
            </span>
          ))}
        </div>
      );
    },
    enableGlobalFilter: false,
  },
  {
    header: 'Drops',
    accessorKey: 'drops',
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-2">
        {row.original.drops.map((drop) => {
          const category = ITEMS_CATEGORY_MATCHES[drop];
          return (
            <Link key={drop} href={`/items/${category}?name=${drop}`} onClick={(e) => !category && e.preventDefault()}>
              <span className="inline-block rounded-full bg-violet-50 px-2 py-0.5 text-xs text-violet-800">{drop}</span>
            </Link>
          );
        })}
      </div>
    ),
    enableGlobalFilter: true,
  },
];
