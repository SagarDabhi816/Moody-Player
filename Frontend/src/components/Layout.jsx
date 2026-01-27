const Layout = ({ children }) => {
  return (
    <main className="px-[15%] w-3/4 select-none flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
