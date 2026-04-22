export type DropSource = {
  type: string;
  name: string;
  location?: string;
  drops: readonly string[];
};

export type DropSourceRow = {
  type: string;
  name: string;
  location: string;
  drops: readonly string[];
  dropsText: string;
};

export type DropSourcesSortBy = 'name' | 'location';
export type DropSourcesSortOrder = 'asc' | 'desc';
export type SourcesSearchParamsInput = {
  q?: string;
  name?: string;
  locations?: string;
  sortBy?: DropSourcesSortBy;
  order?: DropSourcesSortOrder;
};
export type SourcesTableState = {
  query: string;
  locations: Set<string>;
  sortBy: DropSourcesSortBy;
  order: DropSourcesSortOrder;
};

const UNKNOWN_LOCATION = 'Unknown';

function normalizeToken(value: string) {
  return value.toLowerCase().trim();
}

function normalizeLocationsString(locations?: string) {
  if (!locations) return [];
  return locations
    .split(',')
    .map((value) => normalizeToken(value))
    .filter(Boolean);
}

export function buildDropSourceRows(sources: readonly DropSource[]): DropSourceRow[] {
  return sources.map((source) => ({
    type: source.type,
    name: source.name,
    location: source.location?.trim() || UNKNOWN_LOCATION,
    drops: source.drops,
    dropsText: source.drops.join(' ').toLowerCase(),
  }));
}

export function filterByQuery(rows: readonly DropSourceRow[], query: string): DropSourceRow[] {
  const normalizedQuery = normalizeToken(query);
  if (!normalizedQuery) return [...rows];

  return rows.filter((row) => {
    const normalizedName = row.name.toLowerCase();
    return normalizedName.includes(normalizedQuery) || row.dropsText.includes(normalizedQuery);
  });
}

export function filterByLocations(rows: readonly DropSourceRow[], selected: ReadonlySet<string>): DropSourceRow[] {
  if (selected.size === 0) return [...rows];
  return rows.filter((row) => selected.has(normalizeToken(row.location)));
}

export function sortRows(
  rows: readonly DropSourceRow[],
  sortBy: DropSourcesSortBy,
  order: DropSourcesSortOrder
): DropSourceRow[] {
  const direction = order === 'asc' ? 1 : -1;

  return [...rows].sort((a, b) => {
    const primary = a[sortBy].localeCompare(b[sortBy], undefined, { sensitivity: 'base' });
    if (primary !== 0) return primary * direction;
    return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }) * direction;
  });
}

export function getLocationOptions(rows: readonly DropSourceRow[]) {
  const unique = new Map<string, string>();
  rows.forEach((row) => {
    const key = normalizeToken(row.location);
    if (!unique.has(key)) unique.set(key, row.location);
  });

  return [...unique.entries()]
    .sort((a, b) => a[1].localeCompare(b[1], undefined, { sensitivity: 'base' }))
    .map(([value, label]) => ({ value, label }));
}

export function parseSourcesSearchParams(search: SourcesSearchParamsInput): SourcesTableState {
  return {
    query: search.q ?? search.name ?? '',
    locations: new Set(normalizeLocationsString(search.locations)),
    sortBy: search.sortBy ?? 'name',
    order: search.order ?? 'asc',
  };
}

export function buildSourcesSearchParams(state: SourcesTableState): SourcesSearchParamsInput {
  const locations = [...state.locations].sort((a, b) => a.localeCompare(b));
  return {
    q: state.query || undefined,
    name: undefined,
    locations: locations.length ? locations.join(',') : undefined,
    sortBy: state.sortBy,
    order: state.order,
  };
}
