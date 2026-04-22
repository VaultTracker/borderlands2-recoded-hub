import { describe, expect, it } from 'vitest';
import {
  buildDropSourceRows,
  buildSourcesSearchParams,
  filterByQuery,
  filterByLocations,
  getLocationOptions,
  parseSourcesSearchParams,
  sortRows,
  type DropSourceRow,
} from './drop-sources-table';

const sample = [
  { type: 'Main', name: 'Knuckle Dragger', location: 'Windshear Waste', drops: ['Desperado'] },
  { type: 'Main', name: 'Boom and Bewm', location: 'Southern Shelf', drops: ['Fuse', 'Payload'] },
  { type: 'Side', name: 'Lascaux Cave Pool', drops: ['Raiju'] },
] as const;

describe('buildDropSourceRows', () => {
  it('normalizes missing location to Unknown and builds dropsText', () => {
    const rows = buildDropSourceRows(sample);

    expect(rows[2].location).toBe('Unknown');
    expect(rows[1].dropsText).toBe('fuse payload');
  });
});

describe('filterByQuery', () => {
  const rows = buildDropSourceRows(sample);

  it('returns all rows for empty query', () => {
    const result = filterByQuery(rows, '   ');
    expect(result).toHaveLength(3);
  });

  it('matches by source name', () => {
    const result = filterByQuery(rows, 'knuckle');
    expect(result.map((row) => row.name)).toEqual(['Knuckle Dragger']);
  });

  it('matches by drop names', () => {
    const result = filterByQuery(rows, 'pay');
    expect(result.map((row) => row.name)).toEqual(['Boom and Bewm']);
  });
});

describe('filterByLocations', () => {
  const rows = buildDropSourceRows(sample);

  it('returns all rows when no locations selected', () => {
    const result = filterByLocations(rows, new Set());
    expect(result).toHaveLength(3);
  });

  it('filters rows by selected locations', () => {
    const result = filterByLocations(rows, new Set(['southern shelf']));
    expect(result.map((row) => row.name)).toEqual(['Boom and Bewm']);
  });
});

describe('sortRows', () => {
  const rows: DropSourceRow[] = buildDropSourceRows(sample);

  it('sorts by name asc', () => {
    const result = sortRows(rows, 'name', 'asc');
    expect(result.map((row) => row.name)).toEqual(['Boom and Bewm', 'Knuckle Dragger', 'Lascaux Cave Pool']);
  });

  it('sorts by location desc', () => {
    const result = sortRows(rows, 'location', 'desc');
    expect(result.map((row) => row.location)).toEqual(['Windshear Waste', 'Unknown', 'Southern Shelf']);
  });

  it('uses name as tie-break when sort field is same', () => {
    const tieRows = buildDropSourceRows([
      { type: 'x', name: 'Bravo', location: 'A', drops: [] },
      { type: 'x', name: 'Alpha', location: 'A', drops: [] },
    ]);
    const result = sortRows(tieRows, 'location', 'asc');
    expect(result.map((row) => row.name)).toEqual(['Alpha', 'Bravo']);
  });
});

describe('getLocationOptions', () => {
  it('dedupes and sorts options', () => {
    const options = getLocationOptions(buildDropSourceRows(sample));
    expect(options).toEqual([
      { value: 'southern shelf', label: 'Southern Shelf' },
      { value: 'unknown', label: 'Unknown' },
      { value: 'windshear waste', label: 'Windshear Waste' },
    ]);
  });
});

describe('search params adapter', () => {
  it('parses legacy name and locations into normalized state', () => {
    const state = parseSourcesSearchParams({
      name: 'knuckle',
      locations: 'Southern Shelf, Unknown',
      sortBy: 'location',
      order: 'desc',
    });

    expect(state.query).toBe('knuckle');
    expect([...state.locations]).toEqual(['southern shelf', 'unknown']);
    expect(state.sortBy).toBe('location');
    expect(state.order).toBe('desc');
  });

  it('uses defaults when params are missing', () => {
    const state = parseSourcesSearchParams({});
    expect(state.query).toBe('');
    expect([...state.locations]).toEqual([]);
    expect(state.sortBy).toBe('name');
    expect(state.order).toBe('asc');
  });

  it('builds compact search params from table state', () => {
    const result = buildSourcesSearchParams({
      query: 'vault',
      locations: new Set(['unknown', 'southern shelf']),
      sortBy: 'location',
      order: 'desc',
    });

    expect(result).toEqual({
      q: 'vault',
      locations: 'southern shelf,unknown',
      sortBy: 'location',
      order: 'desc',
    });
  });
});
