// import React from "react";

// const FailedTask = ({ data }) => {
//   return (
//     <div className="flex-shrink-0 h-full w-[350px] p-5 bg-orange-500 rounded-lg">
//       <div className="flex justify-between items-center">
//         <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">
//           {data.category}
//         </h3>
//         <h4 className="text-base">{data.date}</h4>
//       </div>
//       <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
//       <p className="text-sm mt-2">{data.description}</p>
//       <div className="mt-2">
//         <button className="w-full">Failed</button>
//       </div>
//     </div>
//   );
// };

// export default FailedTask;

// src/components/TaskList/FailedTask.jsx
import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-orange-500 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-orange-700 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-base">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>

      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
