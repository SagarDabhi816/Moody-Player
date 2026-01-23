import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="px-[15%]  text-[#1b1b1b] w-2/3 select-none flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;