import React from "react";

const Header = ({ data, handleLogout }) => {
  // If admin, no data is passed → show "Admin"
  const userName = data ? data.firstName : "Admin";

  // const logOutUser = () => {
  //   localStorage.removeItem("loggedInUser");
  //   window.location.reload();
  // };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>

      <button
        className="px-5 py-1 md:px-6 md:py-[6px] bg-[#0BB882] rounded-sm text-md font-medium"
        // onClick={logOutUser}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
