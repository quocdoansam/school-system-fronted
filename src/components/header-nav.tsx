import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Navbar } from "@/types/navbar";
import { Link } from "react-router-dom";

interface HeaderNavProps {
  navbars: Navbar[];
}

const HeaderNav = ({ navbars }: HeaderNavProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navbars.map((group, groupIndex) => (
          <NavigationMenuItem key={groupIndex}>
            <NavigationMenuTrigger>{group.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-2 w-md grid-cols-2'>
                {group.items.map((item, itemIndex) => (
                  <NavigationMenuLink key={itemIndex} asChild>
                    <Link to={item.href}>
                      <div className='text-sm font-medium leading-none'>
                        {item.name}
                      </div>
                      <span className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {item.desc}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link to='/docs'>Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNav;
