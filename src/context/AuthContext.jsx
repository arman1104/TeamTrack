import React, { useEffect } from "react";

const AuthContext = ({ children }) => {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // });
  return <div>{children}</div>;
};

export default AuthContext;
