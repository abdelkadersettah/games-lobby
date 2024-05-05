'use client';
import { GamesMenu } from '@/models/fetch/type';
import { MenubarTrigger } from '@radix-ui/react-menubar';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from './menubar';

type Props = { navItems: Array<GamesMenu> };

export function Navigation({ navItems }: Props) {
  if (navItems?.length === 0) return;
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="flex items-center gap-2 group bg-transparent">
          Game categories{' '}
          <IoIosArrowForward className="font-bold group-data-[state=open]:rotate-90 transition-all ease-linear" />
        </MenubarTrigger>
        <MenubarContent>
          {navItems.map((item) => {
            return (
              <MenubarItem key={item.id}>
                <Link href={`/category/${item.slug}`}>{item.gameText}</Link>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
