import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[330px] p-5 bg-orange-400 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-base">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className="flex justify-between mt-4">
        <button onClick={onComplete} className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button onClick={onFail} className="bg-gray-500 py-1 px-2 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
