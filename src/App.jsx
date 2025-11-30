import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { getLocalStorage } from "./utils/LocalStorage";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // });

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345678") {
      setUser("admin");
      // console.log("This is Admin");
    } else if (email == "user@me.com" && password == "12345678") {
      setUser("user");
      // console.log("This is User");
    } else {
      alert("Invalid Credentials");
    }
  };

  // handleLogin("user@me.com", 12345678);
  // handleLogin("admin@me.com", 12345678);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}

      {/* {!user ? <Login handleLogin={handleLogin} /> : ""} */}
      {/* {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />} */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
