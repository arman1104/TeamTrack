import React, { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   localStorage.clear();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  //   const data = getLocalStorage();
  //   console.log(data.employees);
  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
