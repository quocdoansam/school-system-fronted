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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";
import { Skeleton } from "./ui/skeleton";

const UserNav = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const items = [
    [
      { name: "My Profile", action: () => navigate("/profile") },
      { name: "My courses", action: () => navigate("/course") },
    ],
    [
      { name: "Settings", action: () => navigate("/settings") },
      { name: "Support", action: () => navigate("/support") },
    ],
    [{ name: "Logout", action: () => logout() }],
  ];

  if (isLoading) {
    return <Skeleton className='w-[100px] h-[36px] rounded-md' />;
  }
  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"default"} className='cursor-pointer'>
              {user?.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items.map((group, groupIndex) => (
              <>
                <DropdownMenuGroup key={groupIndex}>
                  {group.map((item, itemIndex) => (
                    <DropdownMenuItem
                      className='cursor-pointer'
                      key={itemIndex}
                      onClick={() => item.action()}
                    >
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                {groupIndex !== items.length - 1 && <DropdownMenuSeparator />}
              </>
            ))}
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
