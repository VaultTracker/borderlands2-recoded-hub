'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useResizeObserver } from 'usehooks-ts';

import { estimateItemCardHeight } from '@/lib/items';
import { computeGridColumnCount } from '@/lib/utils';
import { useItemStore } from '@/stores/items.store';

import { ItemCard } from './ItemCard';

type ItemsVirtualizedGridProps = {
  /** Pixel width matching grid `minmax(..., 1fr)` minimum (default 240). */
  minCardPx?: number;
  /** Gap between cells in px (default 16, same as `gap-4`). */
  gapPx?: number;
  className?: string;
  estimateSize?: (index: number) => number;
};

export function ItemsVirtualizedGrid({ minCardPx = 240, gapPx = 16, className }: ItemsVirtualizedGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);
  const estimateSizeRef = useRef<Record<number | string, number | undefined>>({});

  const { width } = useResizeObserver({ ref: scrollRef, box: 'content-box' });
  const [columnCount, setColumnCount] = useState(3);
  const [estimateCardWidth, setEstimateCardWidth] = useState(320);

  const items = useItemStore((state) => state.visibleItems);

  useLayoutEffect(() => {
    const containerWidth = (width || Math.min(window.innerWidth, 1028)) - 10;
    const count = computeGridColumnCount(containerWidth, minCardPx, gapPx);
    setColumnCount(count);
    setEstimateCardWidth((containerWidth - gapPx * (count - 1)) / count);
    estimateSizeRef.current = {};
  }, [minCardPx, gapPx, width]);

  const rowCount = Math.max(0, Math.ceil(items.length / columnCount));

  // TanStack Virtual: React Compiler skips memoization for this hook (library limitation).
  // eslint-disable-next-line react-hooks/incompatible-library -- useVirtualizer returns non-memoizable refs; TanStack-supported pattern.
  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollRef.current,
    estimateSize: (index) => {
      const sliceStartIndex = index * columnCount;
      const sliceEndIndex = sliceStartIndex + columnCount;
      const sliceItems = items.slice(sliceStartIndex, sliceEndIndex);

      const heights = sliceItems.map((item) => {
        const existHeight = estimateSizeRef.current[item.name];
        if (existHeight) return existHeight;
        return estimateItemCardHeight({ ...item, cardWidth: estimateCardWidth });
      });
      const estimatedHeight = Math.max(...heights) + gapPx;
      return estimatedHeight;
    },
    overscan: 2,
  });

  useEffect(() => {
    virtualizer.measure();
  }, [columnCount, items.length, virtualizer]);

  return (
    <div
      ref={scrollRef}
      className={className}
      style={{
        height: '100%',
        minHeight: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div
        ref={innerRef}
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                gap: `${gapPx}px`,
                paddingBottom: `${gapPx}px`,
              }}
            >
              {Array.from({ length: columnCount }, (_, colIndex) => {
                const item = items[virtualRow.index * columnCount + colIndex];
                if (!item) {
                  return <div key={`empty-${virtualRow.index}-${colIndex}`} />;
                }
                return <ItemCard key={item.name} item={item} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
