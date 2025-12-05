import React from "react";
import Header from "../EmployeeDashboardUI/Header";
import StatsSection from "../EmployeeDashboardUI/StatsSection";
import TaskList from "../TaskList/TaskList";

// const EmployeeDashboard = ({ data, handleLogout }) => {
//   return (
//     <div className="p-10 sm:p-14 bg-[#1C1C1C] h-screen">
//       <Header data={data} handleLogout={handleLogout} />
//       <StatsSection data={data} />
//       <TaskList data={data} />
//     </div>
//   );
// };

// export default EmployeeDashboard;

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeDashboard = ({ handleLogout, data }) => {
  const { userData } = useContext(AuthContext);

  if (!userData) return null;

  // Find current logged-in employee by email or id
  const employee = userData.employees.find((e) => e.email === data.email);

  return (
    <div className="p-10 sm:p-14 bg-[#1C1C1C] h-screen">
      <Header data={employee} handleLogout={handleLogout} />
      <StatsSection data={employee} />
      <TaskList data={employee} />
    </div>
  );
};

export default EmployeeDashboard;
