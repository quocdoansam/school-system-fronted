export type Navbar = {
  title: string;
  items: Item[];
};

type Item = {
  name: string;
  href: string;
  desc: string;
};
