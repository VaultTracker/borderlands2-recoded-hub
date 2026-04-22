import { computeGridColumnCount } from '@/lib/items-list-pipeline';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

type ItemsVirtualizedGridProps<T> = {
  items: readonly T[];
  itemKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  /** Pixel width matching grid `minmax(..., 1fr)` minimum (default 240). */
  minCardPx?: number;
  /** Gap between cells in px (default 16, same as `gap-4`). */
  gapPx?: number;
  className?: string;
  estimateSize?: (index: number) => number;
};

export function ItemsVirtualizedGrid<T>({
  items,
  itemKey,
  renderItem,
  minCardPx = 240,
  gapPx = 16,
  className,
  estimateSize = () => 360,
}: ItemsVirtualizedGridProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rowRefsMap = useRef(new Map<number, HTMLDivElement>());

  const [columnCount, setColumnCount] = useState(1);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const read = () => {
      setColumnCount(computeGridColumnCount(el.clientWidth, minCardPx, gapPx));
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [minCardPx, gapPx]);

  const rowCount = Math.max(0, Math.ceil(items.length / columnCount));

  // TanStack Virtual: React Compiler skips memoization for this hook (library limitation).
  // eslint-disable-next-line react-hooks/incompatible-library -- useVirtualizer returns non-memoizable refs; TanStack-supported pattern.
  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollRef.current,
    estimateSize,
    overscan: 2,
    onChange: (instance) => {
      innerRef.current!.style.height = `${instance.getTotalSize()}px`;
      instance.getVirtualItems().forEach((virtualRow) => {
        const rowRef = rowRefsMap.current.get(virtualRow.index);
        if (!rowRef) return;
        rowRef.style.transform = `translateY(${virtualRow.start}px)`;
      });
    },
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
              className="grid gap-4 pb-4"
              style={{
                gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: columnCount }, (_, colIndex) => {
                const item = items[virtualRow.index * columnCount + colIndex];
                if (!item) {
                  return <div key={`empty-${virtualRow.index}-${colIndex}`} />;
                }
                return <div key={itemKey(item)}>{renderItem(item)}</div>;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
