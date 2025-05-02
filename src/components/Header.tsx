import HeaderNav from "./header-nav";
import Logo from "./landing/logo";
import { ModeToggle } from "./mode-toggle";
import UserNav from "./user-nav";
import { useIsMobile } from "@/hooks/useMobile";
import { HeaderDrawer } from "./header-drawer";

const Header = () => {
  const isMobile = useIsMobile();
  const navbars = [
    {
      title: "About",
      items: [
        {
          name: "Overview",
          href: "/",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
          name: "Overview",
          href: "/",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
          name: "Edura news",
          href: "/news",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
      ],
    },
    {
      title: "Events",
      items: [
        {
          name: "Event 1",
          href: "/event-1",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
          name: "Event 2",
          href: "/event-2",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
      ],
    },
    {
      title: "Courses",
      items: [
        {
          name: "Courses 1",
          href: "/course-1",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
        {
          name: "Courses 2",
          href: "/course-2",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem",
        },
      ],
    },
  ];
  return (
    <header className='flex flex-row justify-between py-4'>
      {isMobile ? (
        <div className='flex flex-row gap-4'>
          <HeaderDrawer navbars={navbars} />
          <Logo />
        </div>
      ) : (
        <div className='flex flex-row gap-8'>
          <Logo />
          <HeaderNav navbars={navbars} />
        </div>
      )}
      <div className='flex flex-row gap-2'>
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
