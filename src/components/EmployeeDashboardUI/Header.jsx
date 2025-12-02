import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = () => {
  // console.log(data);
  // const [userName, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">userName👋</span>
      </h1>
      <button
        className="px-5 py-1 md:px-6 md:py-[6px] bg-[#0BB882] rounded-sm text-md font-medium"
        onClick={logOutUser}
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
