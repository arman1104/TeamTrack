// import React from "react";
// import Header from "../EmployeeDashboardUI/Header";

// const AdminDashboard = () => {
//   return (
//     <div className="h-screen w-full p-10">
//       <Header />
//       <div>
//         <form className="flex w-full flex-wrap bg-indigo-300 items-start justify-between">
//           <div className="w-1/2">
//             <div>
//               <h3>Task Title</h3>
//               <input type="text" placeholder="Write Something" />
//             </div>
//             <div>
//               <h3>Date</h3>
//               <input type="date" />
//             </div>
//             <div>
//               <h3>Assign to</h3>
//               <input type="text" placeholder="Employee Name" />
//             </div>
//             <div>
//               <h3>Category</h3>
//               <input type="text" placeholder="design,dev,etc" />
//             </div>
//           </div>
//           {/* ///////////////////////////////////////// */}
//           <div className="w-1/2">
//             <h3>Description</h3>
//             <textarea name="" id="" cols="30" rows="10"></textarea>
//           </div>

//           <button className="w-full bg-black hover:bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl">
//             Create Task
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import Header from "../EmployeeDashboardUI/Header";
import CreateTask from "../EmployeeDashboardUI/CreateTask";
import AllTask from "../EmployeeDashboardUI/AllTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-5 md:p-10 ">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
