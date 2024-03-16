import React, { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return <main className="flex-center min-h-screen w-full">{children}</main>;
};

export default layout;
