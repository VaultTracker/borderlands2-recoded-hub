'use client';

import { TooltipProvider } from '@/components/ui/tooltip';

const Providers = ({ children }: React.PropsWithChildren) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export default Providers;
