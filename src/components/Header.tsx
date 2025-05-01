import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
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
