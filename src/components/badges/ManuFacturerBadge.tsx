import { ITEM_MANUFACTURERS } from '@/constants/items/item';
import { cn } from '@/lib/utils';
import { kebabCase } from 'es-toolkit';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type ManuFacturerBadgeProps = {
  manufacturer?: (typeof ITEM_MANUFACTURERS)[number];
} & React.ComponentProps<'span'>;

export const ManuFacturerBadge = ({ manufacturer = '', className, style, ...props }: ManuFacturerBadgeProps) => {
  const isValid = ITEM_MANUFACTURERS.includes(manufacturer);
  const src = `/images/manufacturer/${kebabCase(manufacturer)}.webp`;
  if (!isValid || !manufacturer) return null;
  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <span
          className={cn('inline-block h-6 w-12', className)}
          style={{
            ...style,
            backgroundImage: `url(${src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          {...props}
        ></span>
      </TooltipTrigger>
      <TooltipContent side="right">{manufacturer}</TooltipContent>
    </Tooltip>
  );
};
