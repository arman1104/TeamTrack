import React from "react";

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5 mt-10 screen">
      <div className="p-10 w-full sm:w-[48%] lg:w-[23%] py-7 px-9 bg-indigo-500 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="p-10 w-full sm:w-[48%] lg:w-[23%] py-7 px-9 bg-green-400 rounded-lg">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="p-10 w-full sm:w-[48%] lg:w-[23%] py-7 px-9 bg-orange-500 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted</h3>
      </div>
      <div className="p-10 w-full sm:w-[48%] lg:w-[23%] px-9 bg-red-500 rounded-lg">
        <h2 className="text-3xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default StatsSection;
