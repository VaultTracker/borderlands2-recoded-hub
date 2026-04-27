import { ItemsVirtualizedGrid } from '@/components/items/ItemVirtualizedGrid';
import { ItemsFilter } from '@/components/items/ItemsFilter';
import { ITEM_CATEGORIES } from '@/constants/items';

export async function generateStaticParams() {
  return ITEM_CATEGORIES.map((category) => ({ category }));
}

export default async function Page({ params }: { params: { category: string } }) {
  const { category } = await params;

  return (
    <main className="py-container mx-auto flex w-full max-w-[1028px] flex-1 flex-col gap-4">
      <ItemsFilter className="shrink-0" category={category}></ItemsFilter>
      <div className="relative flex-1">
        <div className="absolute inset-0 overflow-y-auto">
          <ItemsVirtualizedGrid />
        </div>
      </div>
    </main>
  );
}
