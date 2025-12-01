import React from "react";
import Header from "../EmployeeDashboardUI/Header";
import StatsSection from "../EmployeeDashboardUI/StatsSection";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="p-10 sm:p-14 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <StatsSection data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
