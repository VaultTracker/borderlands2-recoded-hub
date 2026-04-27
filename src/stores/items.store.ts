import { groupBy } from 'es-toolkit';
import { create } from 'zustand';

import { DROP_SOURCES, ITEMS, ITEM_CATEGORIES, ITEM_CATEGORY_MAP } from '@/constants/items';

const ITEM_GROUPED_SOURCES_MAP = groupBy(
  DROP_SOURCES.flatMap((source) => source.drops.map((drop) => ({ drop, source: source.name }))),
  (item) => item.drop,
);

const SOURCES_MATCHED_ITEMS = ITEMS.map((item) => {
  const target = ITEM_GROUPED_SOURCES_MAP[item.name];
  const sources = !target ? undefined : target.map(({ source }) => source);
  return { ...item, sources };
});

const CATEGORY_ITEMS_MAP = groupBy(SOURCES_MATCHED_ITEMS, (item) => {
  const key = item.itemType.toLowerCase();
  return key in ITEM_CATEGORY_MAP ? ITEM_CATEGORY_MAP[key as keyof typeof ITEM_CATEGORY_MAP] : ITEM_CATEGORIES[0];
});

export type Item = (typeof SOURCES_MATCHED_ITEMS)[number];

type ItemStoreState = {
  items: readonly Item[];
  categoryItems: readonly Item[];
  visibleItems: readonly Item[];
};

export const useItemStore = create<ItemStoreState>(() => {
  return {
    items: SOURCES_MATCHED_ITEMS,
    categoryItems: [],
    visibleItems: [],
  };
});

type ItemFilterStoreState = {
  category: string;
  searchValue: string;
  rarityFilters: Set<string>;
  manufacturerFilters: Set<string>;
  weaponTypeFilters: Set<string>;
  sortKey: 'name' | 'rarity' | 'manufacturer';
  isDescending: boolean;
};

type ItemFilterStoreActions = {
  setCategory: (category: string) => void;
  setSearchValue: (searchValue: string) => void;
  setRarityFilters: (rarityFilters: Set<string>) => void;
  setManufacturerFilters: (manufacturerFilters: Set<string>) => void;
  setWeaponTypeFilters: (weaponTypeFilters: Set<string>) => void;
  setSortKey: (sortKey: 'name' | 'rarity' | 'manufacturer') => void;
  toggleSortDirection: () => void;
  resetFilters: () => void;
};

type ItemFilterStore = ItemFilterStoreState & ItemFilterStoreActions;

export const useItemFilterStore = create<ItemFilterStore>((set, get) => {
  return {
    category: 'weapons',
    searchValue: '',
    rarityFilters: new Set(),
    manufacturerFilters: new Set(),
    weaponTypeFilters: new Set(),
    sortKey: 'name' as const,
    isDescending: false,

    setCategory: (category) => {
      set({
        category,
        searchValue: '',
        rarityFilters: new Set(),
        manufacturerFilters: new Set(),
        weaponTypeFilters: new Set(),
        sortKey: 'name',
        isDescending: false,
      });
    },
    setSearchValue: (searchValue) => set({ searchValue: searchValue.slice(0, 100) }),
    setRarityFilters: (rarityFilters) => set({ rarityFilters }),
    setManufacturerFilters: (manufacturerFilters) => set({ manufacturerFilters }),
    setWeaponTypeFilters: (weaponTypeFilters) => set({ weaponTypeFilters }),
    setSortKey: (sortKey) => set({ sortKey }),
    toggleSortDirection: () => set((state) => ({ isDescending: !state.isDescending })),
    resetFilters: () => {
      const { setCategory, category } = get();
      setCategory(category);
    },
  };
});

useItemFilterStore.subscribe((state) => {
  const { category, searchValue, rarityFilters, manufacturerFilters, weaponTypeFilters, sortKey, isDescending } = state;

  const categoryItems = CATEGORY_ITEMS_MAP[category];

  const filteredItems = categoryItems.filter((item) => {
    const matchesSearch = searchValue.length === 0 || item.name.toLowerCase().includes(searchValue.toLowerCase());
    const matchesRarity = rarityFilters.size === 0 || rarityFilters.has(item.rarity);
    const matchesManufacturer = manufacturerFilters.size === 0 || manufacturerFilters.has(item.manufacturer);
    const matchesWeaponType = weaponTypeFilters.size === 0 || weaponTypeFilters.has(item.itemType);
    return matchesSearch && matchesRarity && matchesManufacturer && matchesWeaponType;
  });

  const filterFn = isDescending
    ? (a: Item, b: Item) => b[sortKey].localeCompare(a[sortKey])
    : (a: Item, b: Item) => a[sortKey].localeCompare(b[sortKey]);
  const sortedItems = filteredItems.sort(filterFn);

  useItemStore.setState({ visibleItems: sortedItems, categoryItems });
});
