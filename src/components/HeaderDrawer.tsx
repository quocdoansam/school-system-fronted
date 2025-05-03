"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navbar } from "@/types/Navbar";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderDrawerProps {
  navbars: Navbar[];
}

export function HeaderDrawer({ navbars }: HeaderDrawerProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className='cursor-pointer' size={"icon"}>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='start'>
        <DropdownMenuLabel>Edura Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navbars.map((group, groupIndex) => (
          <>
            <DropdownMenuGroup key={groupIndex}>
              {group.items.map((item, itemIndex) => (
                <DropdownMenuItem key={itemIndex} asChild>
                  <Link to={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            {groupIndex !== navbars.length - 1 && <DropdownMenuSeparator />}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
