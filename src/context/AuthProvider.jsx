import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Only set localStorage ONCE when empty
    const existingEmployees = localStorage.getItem("employees");

    if (!existingEmployees) {
      setLocalStorage(); // Insert initial JSON data
    }

    const { employees, admin } = getLocalStorage();

    // userData structure must match what CreateTask expects
    setUserData({
      employees: employees,
      admin: admin,
    });
  }, []);

  // Do not render app until data is loaded
  if (!userData) return null;

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
