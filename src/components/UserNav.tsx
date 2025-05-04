import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback } from "./ui/avatar";
import React from "react";

const UserNav = () => {
  const { user, isLoading, isAuthenticated, logout, hasRole } = useAuth();

  const items = [
    [
      { name: "My Profile", href: "/profile" },
      ...(hasRole("STUDENT") ? [{ name: "My courses", href: "/course" }] : []),
    ],
    [
      { name: "Settings", href: "/settings" },
      { name: "Support", href: "/support" },
    ],
    ...(hasRole("ADMIN")
      ? [
          [
            { name: "Admin Dashboard", href: "/admin" },
            { name: "Manage Users", href: "/admin/users" },
          ],
        ]
      : []),
  ];

  if (isLoading) {
    return <Skeleton className='w-[100px] h-[36px] rounded-md' />;
  }
  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='w-9 h-9'>
              <AvatarFallback className='bg-red-400 cursor-pointer'>
                {user?.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel>{`Hi, ${user?.name}`}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items.map((group, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <DropdownMenuGroup>
                  {group.map((item, itemIndex) => (
                    <DropdownMenuItem
                      className='cursor-pointer'
                      key={itemIndex}
                      asChild
                    >
                      <Link to={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                {groupIndex !== items.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className='cursor-pointer'
                onClick={() => logout()}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className='cursor-pointer' asChild>
          <Link to={"/login"}>Login</Link>
        </Button>
      )}
    </>
  );
};

export default UserNav;
