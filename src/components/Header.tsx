import HeaderNav from "./header-nav";
import Logo from "./landing/logo";
import { ModeToggle } from "./mode-toggle";
import UserNav from "./user-nav";
import { useIsMobile } from "@/hooks/useMobile";
import { HeaderDrawer } from "./header-drawer";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className='flex flex-row justify-between py-4'>
      {
        isMobile
          ?
          <div className='flex flex-row gap-4'>
            <HeaderDrawer />
            <Logo />
          </div>
          :
          <div className='flex flex-row gap-8'>
            <Logo />
            <HeaderNav />
          </div>
      }
      <div className='flex flex-row gap-2'>
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
