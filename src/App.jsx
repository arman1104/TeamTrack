import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { userData } = useContext(AuthContext);

  const [user, setUser] = useState(null); // 'admin' | 'employee' | null
  const [loggedInUserData, setLoggedInUserData] = useState(null); // full employee/admin object

  // restore session
  useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data || null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  const handleLogin = (email, password) => {
    if (!userData) {
      alert("Data loading, try again");
      return;
    }

    // admin match from stored admin array (no hard-coded email)
    const admin = (userData.admin || []).find(
      (a) => a.email === email && a.password === password
    );
    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      return;
    }

    // employee match
    const employee = (userData.employees || []).find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid Credentials");
  };

  if (!userData) return <div className="text-white">Loading...</div>;

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard
          data={loggedInUserData}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default App;
