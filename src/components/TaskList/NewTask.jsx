import React from "react";

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="flex-shrink-0 h-full w-[330px] p-5 bg-indigo-400 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-base">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className="mt-4">
        <button
          onClick={onAccept}
          className="bg-blue-500 rounded font-medium py-1 px-2 text-xs"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
