import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">Arman👋</span>
      </h1>
      <button className="px-6 py-[6px] bg-[#0BB882] rounded-sm text-md font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
