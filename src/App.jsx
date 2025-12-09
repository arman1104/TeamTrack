// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { setLocalStorage } from "./utils/LocalStorage";
// import { getLocalStorage } from "./utils/LocalStorage";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   // useEffect(() => {
//   //   setLocalStorage();
//   //   // getLocalStorage();
//   // });

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     // console.log(loggedInUser);
//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const authData = useContext(AuthContext);
//   // console.log(
//   //   authData.employees.find((e) => email == e.email && e.password == password)
//   // );
//   // console.log(authData);

//   // useEffect(() => {
//   //   if (authData) {
//   //     const loggedInUser = localStorage.getItem("loggedInUser");
//   //     if (loggedInUser) {
//   //       setUser(loggedInUser.role);
//   //     }
//   //   }
//   // }, [authData]);

//   const handleLogin = (email, password) => {
//     if (email == "admin@me.com" && password == "12345678") {
//       setUser("admin");
//       localStorage.setItem(
//         "loggedInUser",
//         // JSON.stringify({ role: "admin", data: employee })
//         JSON.stringify({ role: "admin", data: authData.admin })
//       );
//       // console.log("This is Admin");
//     } else if (authData) {
//       const employee = authData.employees.find(
//         (e) => email == e.email && e.password == password
//       );
//       if (employee) {
//         setUser("employee");
//         setLoggedInUserData(employee);
//         localStorage.setItem(
//           "loggedInUser",
//           JSON.stringify({ role: "employee" })
//         );
//       }

//       // console.log("This is User");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   // handleLogin("user@me.com", 12345678);
//   // handleLogin("admin@me.com", 12345678);

//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard />
//       ) : (
//         <EmployeeDashboard data={loggedInUserData} />
//       )}

//       {/* {!user ? <Login handleLogin={handleLogin} /> : ""} */}
//       {/* {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />} */}
//       {/* <EmployeeDashboard /> */}
//       {/* <AdminDashboard /> */}
//     </>
//   );
// };

// export default App;

// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const { userData } = useContext(AuthContext);

//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("loggedInUser");

//     if (saved) {
//       const parsed = JSON.parse(saved);
//       setUser(parsed.role);
//       setLoggedInUserData(parsed.data || null);
//     }
//   }, []);

//   if (!userData) return <h1 className="text-white">Loading...</h1>;

//   const handleLogin = (email, password) => {
//     // Admin Login
//     if (email === "admin@example.com" && password === "12345678") {
//       setUser("admin");

//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ role: "admin", data: userData.admin[0] })
//       );

//       return;
//     }

//     // Employee Login
//     const found = userData.employees.find(
//       (e) => e.email === email && e.password === password
//     );

//     if (found) {
//       setUser("employee");
//       setLoggedInUserData(found);

//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ role: "employee", data: found })
//       );

//       return;
//     }

//     alert("Invalid Credentials");
//   };

//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard />
//       ) : (
//         <EmployeeDashboard data={loggedInUserData} />
//       )}
//     </>
//   );
// };

// export default App;

// App.jsx
// import React, { useContext, useEffect, useState } from "react";
// import Login from "./components/Auth/Login";
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
// import AdminDashboard from "./components/Dashboard/AdminDashboard";
// import { AuthContext } from "./context/AuthProvider";

// const App = () => {
//   const { userData } = useContext(AuthContext);

//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);

//   // ---- RESTORE LOGIN IF PAGE REFRESHED ----
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");

//     if (loggedInUser) {
//       const parsed = JSON.parse(loggedInUser);

//       setUser(parsed.role);
//       setLoggedInUserData(parsed.data || null);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setUser(null); // This will show login screen
//     setLoggedInUserData(null);
//   };

//   // ---- LOGIN HANDLER ----
//   const handleLogin = (email, password) => {
//     // Admin Login
//     if (email === "admin@me.com" && password === "12345678") {
//       setUser("admin");

//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({
//           role: "admin",
//           data: userData.admin, // admin data stored
//         })
//       );

//       return;
//     }

//     // Employee login
//     const employee = userData.employees.find(
//       (e) => e.email === email && e.password === password
//     );

//     if (employee) {
//       setUser("employee");
//       setLoggedInUserData(employee);

//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({
//           role: "employee",
//           data: employee,
//         })
//       );

//       return;
//     }

//     alert("Invalid Credentials");
//   };

//   // ---- RENDER UI ----
//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === "admin" ? (
//         <AdminDashboard handleLogout={handleLogout} />
//       ) : (
//         <EmployeeDashboard
//           data={loggedInUserData}
//           handleLogout={handleLogout}
//         />
//       )}
//     </>
//   );
// };

// export default App;

// !#################################################

// src/App.jsx
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
