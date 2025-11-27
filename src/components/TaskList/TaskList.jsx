import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className=" flex items-center justify-start gap-6 flex-nowrap overflow-x-auto h-[50%] w-full py-5 mt-10 rounded-lg"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">
          The quick brown fox jump over the lazy dog
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">
          The quick brown fox jump over the lazy dog
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">
          The quick brown fox jump over the lazy dog
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-indigo-500 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">
          The quick brown fox jump over the lazy dog
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">
          The quick brown fox jump over the lazy dog
        </p>
      </div>
      {/* <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-base">25 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a Project</h2>
        <p className="text-sm mt-2">The quick brown fox jump over the lazy dog</p>
      </div> */}
    </div>
  );
};

export default TaskList;
