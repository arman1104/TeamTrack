import React from "react";
import Header from "../EmployeeDashboardUI/Header";
import CreateTask from "../EmployeeDashboardUI/CreateTask";
import AllTask from "../EmployeeDashboardUI/AllTask";

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div className="min-h-screen w-full p-5 md:p-10">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
