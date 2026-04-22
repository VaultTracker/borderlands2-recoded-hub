import { MultiSelectFilterPopover } from '@/components/items/MultiSelectFilterPopover';
import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DROP_SOURCES } from '@/constants/items/drop-sources';
import {
  buildDropSourceRows,
  type DropSourcesSortBy,
  type DropSourcesSortOrder,
  getLocationOptions,
  parseSourcesSearchParams,
} from '@/lib/drop-sources-table';
import { cn } from '@/lib/utils';
import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type OnChangeFn,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ArrowDownAZ, ArrowUpAZ, SearchIcon, XIcon } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type DropSourceRow = ReturnType<typeof buildDropSourceRows>[number];
const COLUMN_WIDTHS: Record<string, string> = {
  type: '15%',
  name: '30%',
  location: '20%',
  drops: '45%',
};

function normalizeSort(id: string | undefined, desc: boolean | undefined) {
  const sortBy: DropSourcesSortBy = id === 'location' ? 'location' : 'name';
  const order: DropSourcesSortOrder = desc ? 'desc' : 'asc';
  return { sortBy, order };
}

function getHeaderLabel(columnId: string) {
  if (columnId === 'type') return 'Type';
  if (columnId === 'name') return 'Name';
  if (columnId === 'location') return 'Location';
  if (columnId === 'drops') return 'Drops';
  return columnId;
}

function getCellText(row: DropSourceRow, columnId: string) {
  if (columnId === 'type') return <div className="text-center font-skill">{row.type}</div>;
  if (columnId === 'name') return row.name;
  if (columnId === 'location') {
    const locs = (row.location || 'Unknown').split(',').map((loc) => loc.trim());
    return (
      <div className="flex flex-wrap gap-2">
        {locs.map((loc) => (
          <span key={loc} className="inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-800">
            {loc}
          </span>
        ))}
      </div>
    );
  }
  if (columnId === 'drops')
    return (
      <div className="flex flex-wrap gap-2">
        {row.drops.map((drop) => (
          <a key={drop} href={`/items?name=${drop}`}>
            <span className="inline-block rounded-full bg-violet-50 px-2 py-0.5 text-xs text-violet-800">{drop}</span>
          </a>
        ))}
      </div>
    );
  return '';
}

export function SourcesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const parsedSearch = useMemo(
    () => parseSourcesSearchParams(Object.fromEntries(new URLSearchParams(window.location.search))),
    []
  );
  const [query, setQuery] = useState(parsedSearch.query);
  const [locationFilters, setLocationFilters] = useState(parsedSearch.locations);
  const [sorting, setSorting] = useState<SortingState>([
    { id: parsedSearch.sortBy, desc: parsedSearch.order === 'desc' },
  ]);

  const rows = useMemo(() => buildDropSourceRows(DROP_SOURCES), []);
  const locationOptions = useMemo(() => getLocationOptions(rows), [rows]);

  const columns = useMemo<ColumnDef<DropSourceRow>[]>(
    () => [
      {
        accessorKey: 'type',
        header: 'Type',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'location',
        header: 'Location',
        filterFn: (row, id, value: string[]) => {
          if (!Array.isArray(value) || value.length === 0) return true;
          return value.includes(String(row.getValue(id)).toLowerCase());
        },
      },
      {
        accessorKey: 'drops',
        header: 'Drops',
        cell: ({ row }) => row.original.drops.join(', '),
      },
    ],
    []
  );

  const columnFilters = useMemo<ColumnFiltersState>(
    () => (locationFilters.size ? [{ id: 'location', value: [...locationFilters] }] : []),
    [locationFilters]
  );

  const onSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      if (!next.length) return [{ id: 'name', desc: false }];
      return [{ id: next[0].id === 'location' ? 'location' : 'name', desc: Boolean(next[0].desc) }];
    });
  };

  const onColumnFiltersChange: OnChangeFn<ColumnFiltersState> = (updater) => {
    const next = typeof updater === 'function' ? updater(columnFilters) : updater;
    const locationFilter = next.find((filter) => filter.id === 'location');
    const normalized = Array.isArray(locationFilter?.value)
      ? locationFilter.value.map((value) => String(value).trim().toLowerCase()).filter(Boolean)
      : [];
    setLocationFilters(new Set(normalized));
  };

  // TanStack Virtual: React Compiler skips memoization for this hook (library limitation).
  // eslint-disable-next-line react-hooks/incompatible-library -- useVirtualizer returns non-memoizable refs; TanStack-supported pattern.
  const table = useReactTable({
    data: rows,
    columns,
    state: {
      globalFilter: query,
      sorting,
      columnFilters,
    },
    onGlobalFilterChange: (value) => setQuery(String(value)),
    onColumnFiltersChange,
    onSortingChange,
    globalFilterFn: (row, _, filterValue) => {
      const value = String(filterValue ?? '')
        .trim()
        .toLowerCase();
      if (!value) return true;
      const item = row.original;
      return item.name.toLowerCase().includes(value) || item.dropsText.includes(value);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  const tableRows = table.getRowModel().rows;

  const rowVirtualizer = useVirtualizer({
    count: tableRows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 46,
    overscan: 8,
  });

  useEffect(() => {
    setQuery(parsedSearch.query);
    setLocationFilters(parsedSearch.locations);
    setSorting([{ id: parsedSearch.sortBy, desc: parsedSearch.order === 'desc' }]);
  }, [parsedSearch]);

  const normalizedSort = normalizeSort(sorting[0]?.id, sorting[0]?.desc);

  const virtualItems = rowVirtualizer.getVirtualItems();

  const isEmpty = tableRows.length === 0;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <InputGroup className="max-w-md min-w-[12rem] flex-1">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            maxLength={100}
            value={query}
            onChange={(e) => table.setGlobalFilter(e.target.value)}
            placeholder="Search by source name or drop name"
            aria-label="Search by source name or drop name"
          />
          {query.length > 0 && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost" onClick={() => table.setGlobalFilter('')}>
                <XIcon className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>

        <div className="ml-auto flex min-w-0 flex-wrap items-center justify-end gap-2">
          <MultiSelectFilterPopover
            label="Location"
            options={locationOptions}
            selected={locationFilters}
            onChange={(next) => table.getColumn('location')?.setFilterValue([...next])}
          />
          <Select
            value={normalizedSort.sortBy}
            onValueChange={(value) =>
              table.setSorting([{ id: value as DropSourcesSortBy, desc: normalizedSort.order === 'desc' }])
            }
            aria-label="Sort by"
          >
            <SelectTrigger size="sm" className="min-w-[8rem]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="size-8 shrink-0 p-0"
            onClick={() => table.setSorting([{ id: normalizedSort.sortBy, desc: normalizedSort.order !== 'desc' }])}
            aria-label={
              normalizedSort.order === 'asc' ? 'Ascending, Switch to Descending' : 'Descending, Switch to Ascending'
            }
            title={normalizedSort.order === 'asc' ? 'Ascending' : 'Descending'}
          >
            {normalizedSort.order === 'asc' ? <ArrowDownAZ className="size-4" /> : <ArrowUpAZ className="size-4" />}
          </Button>
        </div>
      </div>

      <div className={cn('relative flex flex-col overflow-hidden rounded-md', !isEmpty && 'flex-1')}>
        <div className="sticky top-0 shrink-0">
          <table className="w-full">
            <thead className="border-b bg-muted">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="flex w-full">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-2 py-2 text-left font-medium text-foreground"
                      style={{ width: COLUMN_WIDTHS[header.column.id] }}
                    >
                      {header.isPlaceholder ? null : getHeaderLabel(header.column.id)}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
        </div>

        {isEmpty ? (
          <div className="m-auto text-sm text-muted-foreground">No sources found.</div>
        ) : (
          <div className="relative flex-1">
            <div className="absolute inset-0">
              <div ref={scrollRef} className="h-full w-full overflow-auto">
                <table className="w-full table-fixed bg-card text-sm" style={{ minWidth: 960 }}>
                  <tbody
                    className="relative block"
                    style={{
                      height: `${rowVirtualizer.getTotalSize()}px`,
                    }}
                  >
                    {virtualItems.map((virtualRow) => {
                      const row = tableRows[virtualRow.index];
                      return (
                        <tr
                          key={row.id}
                          data-index={virtualRow.index}
                          ref={rowVirtualizer.measureElement}
                          className="absolute left-0 flex w-full border-b hover:bg-muted/40"
                          style={{ transform: `translateY(${virtualRow.start}px)` }}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className="px-2 py-2 align-middle"
                              style={{ width: COLUMN_WIDTHS[cell.column.id] }}
                            >
                              {getCellText(row.original, cell.column.id)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
