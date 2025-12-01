import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-indigo-500 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
        <h4 className="text-base">25 Nov 2025</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
      <p className="text-sm mt-2">The quick brown fox jump over the lazy dog</p>
      <div className="mt-2">
        <button className="w-full">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
