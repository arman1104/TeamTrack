import React, { createContext, useEffect, useState } from "react";
import {
  getLocalStorage,
  seedLocalStorageIfMissing,
  saveEmployeesToLocalStorage,
} from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Calculate task numbers from tasks array
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

  // Initial load
  useEffect(() => {
    seedLocalStorageIfMissing();
    const { employees, admin } = getLocalStorage();

    // Fix all employee counters based on actual tasks
    const fixedEmployees = employees.map((emp) => ({
      ...emp,
      taskNumbers: calculateTaskNumbers(emp.tasks || []),
    }));

    setUserData({
      employees: fixedEmployees,
      admin: admin,
    });
  }, []);

  // Sync to localStorage whenever userData.employees changes
  useEffect(() => {
    if (userData && userData.employees) {
      saveEmployeesToLocalStorage(userData.employees);
    }
  }, [userData]);

  // Custom setter that also updates localStorage
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  if (!userData) return null;

  return (
    <AuthContext.Provider value={{ userData, setUserData: updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
