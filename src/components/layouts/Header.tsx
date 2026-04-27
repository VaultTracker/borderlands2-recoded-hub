'use client';

import { capitalize, pascalCase } from 'es-toolkit';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BASE_PATH } from '~/next.config';

import { Button } from '@/components/ui/button';
import { BL2_CLASSES } from '@/constants/common/classes';
import { ITEM_CATEGORIES } from '@/constants/items';
import { cn } from '@/lib/utils';

const MAIN_NAVIGATIONS = [
  {
    label: 'Skill Calculator',
    to: '/skills',
  },
  {
    label: 'Items',
    to: '/items/weapons',
  },
  {
    label: 'Drop Sources',
    to: '/sources',
  },
  {
    label: 'Vendors',
    to: '/vendors',
  },
];

const ACTIVE_CLASSNAME = cn('border-foreground/50 bg-foreground/20 text-foreground');

export const Header = () => {
  const pathname = usePathname();

  const isSkillCalculator = pathname.includes('/skills');
  const isItems = pathname.includes('/items');

  return (
    <header className="sticky top-0 z-50 flex shrink-0 flex-col gap-2 py-4 backdrop-blur-xs">
      <div className="mx-auto flex items-center gap-2">
        <Button variant="secondary" asChild>
          <Link href={'/'}>
            <HouseIcon />
          </Link>
        </Button>
        {MAIN_NAVIGATIONS.map((navigation) => (
          <Button
            key={navigation.to}
            variant="secondary"
            className={cn(pathname.startsWith(navigation.to) && 'bg-blue-200/25 hover:bg-blue-200/30')}
            asChild
          >
            <Link href={navigation.to}>{navigation.label}</Link>
          </Button>
        ))}
      </div>
      <div className="mx-auto flex items-center gap-2">
        {isSkillCalculator &&
          BL2_CLASSES.map((character) => {
            const to = `/skills/${character}`;
            const isActive = pathname.includes(to);
            return (
              <Button
                key={character}
                variant="outline"
                className={cn(
                  'text-foreground/85 inline-flex cursor-pointer items-center justify-center gap-2 px-2 py-1 text-base font-semibold',
                  isActive && ACTIVE_CLASSNAME,
                )}
                asChild
              >
                <Link href={to}>
                  <img
                    src={`${BASE_PATH}/images/classes/${character}/thumbnail.webp`}
                    alt={character}
                    className="size-5 object-cover"
                  />
                  <span>{pascalCase(character)}</span>
                </Link>
              </Button>
            );
          })}
        {isItems &&
          ITEM_CATEGORIES.map((category) => {
            const to = `/items/${category}`;
            const isActive = pathname.includes(to);
            return (
              <Button key={category} variant="outline" className={cn(isActive && ACTIVE_CLASSNAME)} asChild>
                <Link href={to} key={category}>
                  {capitalize(category.replace('-', ' '))}
                </Link>
              </Button>
            );
          })}
      </div>
    </header>
  );
};
