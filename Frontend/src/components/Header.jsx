import React from "react";

const Header = () => {
  return (
    <header
      className="w-1/2 mx-auto  select-none bg-white text-[#1b1b1b] flex gap-[0.1rem] items-center justify-between py-2 px-4 border-b border-gray-200"
    >
      <img src="/headerIcon.png" alt="Icon Here" className="w-[2rem]" />
      <h3 className="font-bold text-[0.8rem]">MoodWave</h3>
    </header>
  );
};

export default Header;