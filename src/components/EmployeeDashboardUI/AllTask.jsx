import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1C1C1C] p-5 mt-6  rounded">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div className="">
        {authData.employees.map((elem, id) => {
          return (
            <div
              key={id}
              className="border border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-400">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
      {/* <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Arman</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}

      {/* <div className="bg-green-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Arman</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}
      {/* <div className="bg-blue-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Arman</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}
      {/* <div className="bg-orange-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Arman</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}
      {/* <div className="bg-indigo-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2>Arman</h2>
        <h3>Make a UI design</h3>
        <h5>Status</h5>
      </div> */}
    </div>
  );
};

export default AllTask;
