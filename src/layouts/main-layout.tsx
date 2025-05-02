import Header from "@/components/header";
import React from "react";

type Props = { children: React.ReactNode };

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
