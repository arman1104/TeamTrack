import React from "react";
import Header from "../EmployeeDashboardUI/Header";
import StatsSection from "../EmployeeDashboardUI/StatsSection";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 sm:p-14 bg-[#1C1C1C] h-screen">
      <Header />
      <StatsSection />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
