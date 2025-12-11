import React, { createContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import {
  getLocalStorage,
  seedLocalStorageIfMissing,
  saveEmployeesToLocalStorage,
} from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // -----------------------------------------
  // FIX COUNTERS AUTOMATICALLY FROM TASKS
  // -----------------------------------------
  const calculateTaskNumbers = (tasks) => {
    const numbers = { active: 0, newTask: 0, completed: 0, failed: 0 };

    tasks.forEach((t) => {
      if (t.newTask) numbers.newTask++;
      if (t.active) numbers.active++;
      if (t.completed) numbers.completed++;
      if (t.failed) numbers.failed++;
    });

    return numbers;
  };

  useEffect(() => {
    // Load initial data OR use existing localstorage
    const existingEmployees = localStorage.getItem("employees");
    if (!existingEmployees) {
      setLocalStorage(); // Load seed JSON only if empty
    }

    const { employees, admin } = getLocalStorage();

    // -----------------------------------------
    // FIX ALL EMPLOYEE COUNTERS HERE
    // -----------------------------------------
    const fixedEmployees = employees.map((emp) => ({
      ...emp,
      taskNumbers: calculateTaskNumbers(emp.tasks),
    }));

    setUserData({
      employees: fixedEmployees,
      admin: admin,
    });
  }, []);

  if (!userData) return null; // prevent rendering before data loads

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
