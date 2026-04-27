import { FilterIcon } from 'lucide-react';
import { useId } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export type FilterOption = { value: string; label: string };

type MultiSelectFilterPopoverProps = {
  label: string;
  options: readonly FilterOption[];
  selected?: ReadonlySet<string>;
  onChange: (next: Set<string>) => void;
  disabled?: boolean;
  buttonProps?: React.ComponentProps<typeof Button>;
  contentProps?: React.ComponentProps<typeof PopoverContent>;
  iconAlign?: 'start' | 'end';
};

export function MultiSelectFilterPopover({
  label,
  options,
  selected = new Set(),
  onChange,
  disabled,
  iconAlign = 'start',
  buttonProps,
  contentProps,
}: MultiSelectFilterPopoverProps) {
  const id = useId();
  const count = selected.size;

  const toggle = (value: string) => {
    const next = new Set(selected);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    onChange(next);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={disabled || options.length === 0}
          className="gap-1.5"
          aria-label={`${label} filter${count ? `, ${count} selected` : ''}`}
          {...buttonProps}
        >
          {iconAlign === 'start' && <FilterIcon className="size-4" />}
          <span>{count ? `${label} (${count})` : label}</span>
          {iconAlign === 'end' && <FilterIcon className="size-4" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-64 gap-3 p-3" {...contentProps}>
        <p className="text-muted-foreground text-xs">No selection, show all.</p>
        <ul className="max-h-64 space-y-2 pr-1">
          {options.map((opt) => {
            const cid = `${id}-${opt.value}`;
            return (
              <li key={opt.value} className="flex items-center gap-2">
                <Checkbox id={cid} checked={selected.has(opt.value)} onCheckedChange={() => toggle(opt.value)} />
                <Label htmlFor={cid} className="cursor-pointer font-normal">
                  {opt.label}
                </Label>
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
