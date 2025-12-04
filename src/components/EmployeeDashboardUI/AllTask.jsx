import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);

  // Protect against null before data is loaded
  if (!userData) return null;

  return (
    <div className="bg-[#1C1C1C] p-5 mt-6 rounded">
      {/* HEADER ROW */}
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>

      {/* EMPLOYEE ROWS */}
      {userData.employees.map((emp) => (
        <div
          key={emp.id}
          className="border border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded"
        >
          <h2 className="text-lg font-medium w-1/5">{emp.firstName}</h2>
          <h3 className="text-lg font-medium w-1/5 text-blue-400">
            {emp.taskNumbers.newTask}
          </h3>
          <h5 className="text-lg font-medium w-1/5 text-yellow-400">
            {emp.taskNumbers.active}
          </h5>
          <h5 className="text-lg font-medium w-1/5 text-green-400">
            {emp.taskNumbers.completed}
          </h5>
          <h5 className="text-lg font-medium w-1/5 text-red-400">
            {emp.taskNumbers.failed}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
