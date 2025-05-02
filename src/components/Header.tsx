import HeaderNav from "./header-nav";
import Logo from "./landing/logo";
import { ModeToggle } from "./mode-toggle";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header className='flex flex-row justify-between py-4'>
      <div className='flex flex-row gap-8'>
        <Logo />
        <HeaderNav />
      </div>

      <div className='flex flex-row gap-2'>
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
