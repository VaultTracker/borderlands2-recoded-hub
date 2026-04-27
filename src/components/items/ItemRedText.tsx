import React from 'react';

import { cn } from '@/lib/utils';

export const ItemRedText = ({ className, children, ...props }: React.ComponentProps<'p'>) => {
  return (
    <p className={cn('bg-background/10 border-l-4 border-l-red-500 px-2 text-red-700', className)} {...props}>
      {children}
    </p>
  );
};
