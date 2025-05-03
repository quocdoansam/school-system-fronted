import React from "react";

type Props = { children: React.ReactNode };

const NoHeaderLayout: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default NoHeaderLayout;
