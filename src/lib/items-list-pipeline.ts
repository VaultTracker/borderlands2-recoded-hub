/** Lowercase trimmed token for case-insensitive compares and set keys. */
export function normalizeToken(s: string): string {
  return s.trim().toLowerCase();
}

/**
 * Ascending tier index (lower = earlier in sort asc).
 * Unknown rarities sort after known ones.
 */
const RARITY_TIER_ORDER = [
  'common',
  'uncommon',
  'rare',
  'very rare',
  'epic',
  'etech',
  'legendary',
  'moxxi',
  'seraph',
  'pearlescent',
  'effervescent',
  'cursed',
  'gemstone',
] as const;

export function rarityTierIndex(rarity: string): number {
  const k = normalizeToken(rarity);
  const i = (RARITY_TIER_ORDER as readonly string[]).indexOf(k);
  return i === -1 ? RARITY_TIER_ORDER.length : i;
}

/** How many grid columns fit in `containerWidth` for fixed min card width and gap (CSS minmax grid). */
export function computeGridColumnCount(containerWidth: number, minCardPx: number, gapPx: number): number {
  if (minCardPx <= 0) return 1;
  if (containerWidth <= 0) return 1;
  const n = Math.floor((containerWidth + gapPx) / (minCardPx + gapPx));
  return Math.max(1, n);
}

export type ListableItem = {
  name: string;
  rarity: string;
  manufacturer: string;
  itemType: string;
};

export type ItemsSortKey = 'name' | 'rarity' | 'manufacturer';
export type ItemsSortDirection = 'asc' | 'desc';

export type ProcessItemsParams = {
  search: string;
  rarityFilters: ReadonlySet<string>;
  manufacturerFilters: ReadonlySet<string>;
  itemTypeFilters: ReadonlySet<string>;
  applyItemTypeFilter: boolean;
  sortKey: ItemsSortKey;
  sortDir: ItemsSortDirection;
};

function compareItems<T extends ListableItem>(a: T, b: T, sortKey: ItemsSortKey, sortDir: ItemsSortDirection): number {
  const m = sortDir === 'asc' ? 1 : -1;
  if (sortKey === 'name') {
    return m * a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  }
  if (sortKey === 'manufacturer') {
    const c = a.manufacturer.localeCompare(b.manufacturer, undefined, { sensitivity: 'base' });
    if (c !== 0) return m * c;
    return m * a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  }
  const ra = rarityTierIndex(a.rarity);
  const rb = rarityTierIndex(b.rarity);
  if (ra !== rb) return m * (ra - rb);
  return m * a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}

/**
 * Search → multi-select filters → sort. Filters use normalized keys; empty set means “no filter”.
 */
export function processItemsList<T extends ListableItem>(items: readonly T[], params: ProcessItemsParams): T[] {
  const q = normalizeToken(params.search);
  const filtered = items.filter((item) => {
    if (q && !normalizeToken(item.name).includes(q)) return false;
    if (params.rarityFilters.size > 0) {
      const rk = normalizeToken(item.rarity);
      if (!params.rarityFilters.has(rk)) return false;
    }
    if (params.manufacturerFilters.size > 0) {
      const mk = normalizeToken(item.manufacturer);
      if (!params.manufacturerFilters.has(mk)) return false;
    }
    if (params.applyItemTypeFilter && params.itemTypeFilters.size > 0) {
      const tk = normalizeToken(item.itemType);
      if (!params.itemTypeFilters.has(tk)) return false;
    }
    return true;
  });
  return [...filtered].sort((a, b) => compareItems(a, b, params.sortKey, params.sortDir));
}

export function uniqueSortedByNormalized<T>(
  items: readonly T[],
  pick: (item: T) => string
): { value: string; label: string }[] {
  const map = new Map<string, string>();
  for (const item of items) {
    const raw = pick(item);
    const key = normalizeToken(raw);
    if (!map.has(key)) map.set(key, raw);
  }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([value, label]) => ({ value, label }));
}
