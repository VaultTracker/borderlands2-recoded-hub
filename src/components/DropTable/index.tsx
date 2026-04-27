'use client';

import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ArrowDownAZ, ArrowUpAZ, SearchIcon, XIcon } from 'lucide-react';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DROP_SOURCES } from '@/constants/items';
import { cn } from '@/lib/utils';

import { columns } from './columns';

const WIDTH_MAP = {
  type: '15%',
  name: '25%',
  location: '20%',
  drops: '40%',
};

export function DropTable({ className, ...props }: React.ComponentProps<'div'>) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [searchValue, setSearchValue] = useState('');
  const [sorting, setSorting] = useState<SortingState>([{ id: 'name', desc: false }]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useLayoutEffect(() => {
    const name = new URLSearchParams(window.location.search).get('name');
    if (name) {
      setSearchValue(name);
    }
  }, []);

  const data = useMemo(() => {
    if (!searchValue) return DROP_SOURCES;
    return DROP_SOURCES.filter((source) => {
      const compareTexet = `${source.name} ${source.drops.join(' ')}`.toLowerCase();
      return compareTexet.includes(searchValue.toLowerCase());
    });
  }, [searchValue]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters,
    },
  });

  const tableRows = table.getRowModel().rows || [];
  const rowVirtualizer = useVirtualizer({
    count: tableRows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 46,
    overscan: 8,
  });
  const virtualItems = rowVirtualizer.getVirtualItems();
  const isEmpty = tableRows.length === 0;

  return (
    <div className={cn('grid h-full grid-rows-[auto_1fr] space-y-4', className)} {...props}>
      <div className="flex items-center">
        <InputGroup className="max-w-md min-w-[12rem] flex-1">
          <InputGroupAddon align="inline-start">
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            maxLength={100}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by source name or drop name"
            aria-label="Search by source name or drop name"
          />
          {searchValue.length > 0 && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost" className="border-0" onClick={() => setSearchValue('')}>
                <XIcon className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>

        <div className="ml-auto flex items-center gap-2">
          <Select
            value={sorting.at(0)?.id}
            aria-label="Sort by"
            onValueChange={(value) => setSorting([{ id: value, desc: sorting.at(0)?.desc ?? false }])}
          >
            <SelectTrigger size="sm" className="min-w-[8rem]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="type">Type</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
          <Button
            size="icon-sm"
            variant="outline"
            onClick={() => setSorting([{ id: sorting.at(0)?.id || 'name', desc: !sorting.at(0)?.desc }])}
          >
            {sorting.at(0)?.desc ? <ArrowDownAZ size={16} /> : <ArrowUpAZ size={16} />}
          </Button>
        </div>
      </div>
      <section className="relative grid grid-rows-[auto_1fr] overflow-hidden rounded-t text-sm">
        <Table className="w-full table-fixed">
          <TableHeader className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="px-3"
                      style={{ width: WIDTH_MAP[header.column.id as keyof typeof WIDTH_MAP] }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        </Table>

        <div className="relative">
          <div className="absolute inset-0">
            <div ref={scrollRef} className="h-full w-full overflow-auto rounded-b">
              <table className="block w-full overflow-hidden rounded-b">
                <TableBody
                  className="bg-card relative block w-full"
                  style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
                >
                  {!isEmpty ? (
                    virtualItems.map((virtualRow) => {
                      const row = tableRows[virtualRow.index];
                      return (
                        <TableRow
                          key={row.id}
                          ref={rowVirtualizer.measureElement}
                          className="absolute left-0 flex w-full"
                          style={{ transform: `translateY(${virtualRow.start}px)` }}
                          data-index={virtualRow.index}
                          data-state={row.getIsSelected() && 'selected'}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell
                              key={cell.id}
                              className="px-3"
                              style={{ width: WIDTH_MAP[cell.column.id as keyof typeof WIDTH_MAP] }}
                            >
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
