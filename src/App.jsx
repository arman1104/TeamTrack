import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
import { getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   // getLocalStorage();
  // });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(loggedInUser);
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(
  //   authData.employees.find((e) => email == e.email && e.password == password)
  // );
  // console.log(authData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "12345678") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        // JSON.stringify({ role: "admin", data: employee })
        JSON.stringify({ role: "admin", data: authData.admin })
      );
      // console.log("This is Admin");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }

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
        <EmployeeDashboard data={loggedInUserData} />
      )}

      {/* {!user ? <Login handleLogin={handleLogin} /> : ""} */}
      {/* {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />} */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
