import { describe, expect, it } from 'vitest';
import {
  computeGridColumnCount,
  normalizeToken,
  processItemsList,
  rarityTierIndex,
  uniqueSortedByNormalized,
} from './items-list-pipeline';

const sample = [
  { name: 'Zeta', rarity: 'Legendary', manufacturer: 'Maliwan', itemType: 'SMG' },
  { name: 'Alpha', rarity: 'Seraph', manufacturer: 'Jakobs', itemType: 'Sniper Rifle' },
  { name: 'Beta', rarity: 'Legendary', manufacturer: 'Atlas', itemType: 'Pistol' },
] as const;

describe('normalizeToken', () => {
  it('lowercases and trims', () => {
    expect(normalizeToken('  Very Rare  ')).toBe('very rare');
  });
});

describe('rarityTierIndex', () => {
  it('orders legendary before seraph in ascending tier', () => {
    expect(rarityTierIndex('Legendary')).toBeLessThan(rarityTierIndex('Seraph'));
  });

  it('treats unknown rarity as last tier', () => {
    expect(rarityTierIndex('Unknown Rarity X')).toBeGreaterThan(rarityTierIndex('Effervescent'));
  });
});

describe('computeGridColumnCount', () => {
  it('returns 1 for narrow width', () => {
    expect(computeGridColumnCount(100, 240, 16)).toBe(1);
  });

  it('fits multiple columns when width allows', () => {
    expect(computeGridColumnCount(800, 240, 16)).toBe(3);
  });
});

describe('processItemsList', () => {
  it('filters by name substring case-insensitive', () => {
    const r = processItemsList(sample, {
      search: 'alp',
      rarityFilters: new Set(),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(),
      applyItemTypeFilter: false,
      sortKey: 'name',
      sortDir: 'asc',
    });
    expect(r.map((x) => x.name)).toEqual(['Alpha']);
  });

  it('applies multi-select rarity filter', () => {
    const r = processItemsList(sample, {
      search: '',
      rarityFilters: new Set(['seraph']),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(),
      applyItemTypeFilter: false,
      sortKey: 'name',
      sortDir: 'asc',
    });
    expect(r).toHaveLength(1);
    expect(r[0].name).toBe('Alpha');
  });

  it('ignores itemType filter when applyItemTypeFilter is false', () => {
    const r = processItemsList(sample, {
      search: '',
      rarityFilters: new Set(),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(['smg']),
      applyItemTypeFilter: false,
      sortKey: 'name',
      sortDir: 'asc',
    });
    expect(r).toHaveLength(3);
  });

  it('applies itemType filter when enabled', () => {
    const r = processItemsList(sample, {
      search: '',
      rarityFilters: new Set(),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(['smg']),
      applyItemTypeFilter: true,
      sortKey: 'name',
      sortDir: 'asc',
    });
    expect(r.map((x) => x.name)).toEqual(['Zeta']);
  });

  it('sorts by manufacturer asc with name tie-break', () => {
    const two = [
      { name: 'B', rarity: 'Legendary', manufacturer: 'Zed', itemType: 'SMG' },
      { name: 'A', rarity: 'Legendary', manufacturer: 'Atlas', itemType: 'SMG' },
    ] as const;
    const r = processItemsList(two, {
      search: '',
      rarityFilters: new Set(),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(),
      applyItemTypeFilter: false,
      sortKey: 'manufacturer',
      sortDir: 'asc',
    });
    expect(r.map((x) => x.name)).toEqual(['A', 'B']);
  });

  it('sorts by rarity asc then name', () => {
    const r = processItemsList(sample, {
      search: '',
      rarityFilters: new Set(),
      manufacturerFilters: new Set(),
      itemTypeFilters: new Set(),
      applyItemTypeFilter: false,
      sortKey: 'rarity',
      sortDir: 'asc',
    });
    expect(r.map((x) => x.name)).toEqual(['Beta', 'Zeta', 'Alpha']);
  });
});

describe('uniqueSortedByNormalized', () => {
  it('dedupes by normalized key and preserves first label', () => {
    const items = [
      { name: 'a', rarity: 'Legendary', manufacturer: 'JAKOBS', itemType: 'SMG' },
      { name: 'b', rarity: 'Legendary', manufacturer: 'Jakobs', itemType: 'Pistol' },
    ];
    const u = uniqueSortedByNormalized(items, (i) => i.manufacturer);
    expect(u).toEqual([{ value: 'jakobs', label: 'JAKOBS' }]);
  });
});
