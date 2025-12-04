import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-red-500 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-base">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm">
          mark as Completed
        </button>
        <button className="bg-gray-500 py-1 px-2 text-sm">
          mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
