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

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-5 md:p-10 ">
      <Header />

      {/* MOBILE LAYOUT (ONLY FOR sm and BELOW) */}
      <div className="w-full max-w-md bg-zinc-800 rounded-xl p-8 mt-10 shadow-lg mx-auto sm:max-w-2xl lg:hidden">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
            ←
          </button>
          <h2 className="text-2xl font-semibold text-white">Create Task</h2>
        </div>

        {/* Mobile form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              placeholder="Detailed description..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              type="date"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Assign To
            </label>
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              type="text"
              placeholder="Design, Development..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <button className="w-full bg-black hover:bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl">
            Create Task
          </button>
        </div>
      </div>

      {/* DESKTOP / TABLET LAYOUT (md AND ABOVE) */}
      <div className="hidden lg:flex w-full justify-center py-12">
        <div className="w-full bg-zinc-800  rounded-lg p-8 shadow-lg">
          {/* Header with back button */}
          <div className="flex items-center mb-8">
            <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
              ←
            </button>
            <h2 className="text-2xl font-semibold text-white">Create Task</h2>
          </div>

          {/* TWO-COLUMN FORM */}
          <div className="w-full flex gap-10">
            {/* LEFT COLUMN */}
            <div className="w-1/2 space-y-6">
              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="Make a UI design"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Assign To
                </label>
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Design, Development..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-1/2 flex flex-col justify-between">
              <div className="mb-6">
                <label className="block text-md text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={8}
                  placeholder="Detailed description..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
                />
              </div>

              <button className="w-full bg-[#0BB882] hover:bg-emerald-600 text-white py-3 rounded-xl">
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
