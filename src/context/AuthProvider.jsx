// import React, { createContext, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
// import { useEffect } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   //   localStorage.clear();
//   const [userData, setUserData] = useState(null);
//   useEffect(() => {
//     setLocalStorage();
//     const { employees, admin } = getLocalStorage();
//     setUserData({ employees, admin });
//   }, []);

//   //   const data = getLocalStorage();
//   //   console.log(data.employees);
//   return (
//     <div>
//       <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
//     </div>
//   );
// };

// export default AuthProvider;

// import React, { createContext, useState, useEffect } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Load initial data only once
//     setLocalStorage();
//     const { employees, admin } = getLocalStorage();
//     setUserData({ employees, admin });
//   }, []);

//   return (
//     <AuthContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// src/context/AuthProvider.jsx
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
