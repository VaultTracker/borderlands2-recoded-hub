import { cn } from '@/lib/utils';
import React from 'react';

export const RedText = ({ className, children, ...props }: React.ComponentProps<'p'>) => {
  return (
    <p className={cn('border-l-4 border-l-red-500 bg-background/10 px-2 text-red-700', className)} {...props}>
      {children}
    </p>
  );
};
