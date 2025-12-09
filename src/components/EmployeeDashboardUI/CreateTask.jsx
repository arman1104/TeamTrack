// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// const CreateTask = () => {
//   const { userData, setUserData } = useContext(AuthContext);

//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   const [asignTo, setAsignTo] = useState("");
//   const [category, setCategory] = useState("");

//   // ---------------- HANDLE CREATE TASK ----------------
//   const submitHandler = (e) => {
//     e.preventDefault();

//     // new task object based on your JSON structure
//     const newTask = {
//       title: taskTitle,
//       description: taskDescription,
//       date: taskDate,
//       category: category,
//       active: false,
//       newTask: true,
//       completed: false,
//       failed: false,
//     };

//     // update employees array
//     const updatedEmployees = userData.employees.map((emp) => {
//       if (emp.firstName.toLowerCase() === asignTo.toLowerCase()) {
//         return {
//           ...emp,
//           tasks: [...emp.tasks, newTask],
//           taskNumbers: {
//             ...emp.taskNumbers,
//             newTask: emp.taskNumbers.newTask + 1,
//           },
//         };
//       }
//       return emp;
//     });
//     console.log(updatedEmployees);

//     // update context state
//     setUserData({
//       ...userData,
//       employees: updatedEmployees,
//     });

//     // reset fields
//     setTaskTitle("");
//     setTaskDescription("");
//     setTaskDate("");
//     setAsignTo("");
//     setCategory("");
//   };

//   return (
//     <>
//       {/* ---------------- MOBILE LAYOUT ---------------- */}
//       <div className="w-full max-w-md bg-zinc-800 rounded-xl p-8 mt-10 shadow-lg mx-auto sm:max-w-2xl lg:hidden">
//         <div className="flex items-center mb-8">
//           <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
//             ←
//           </button>
//           <h2 className="text-2xl font-semibold text-white">Create Task</h2>
//         </div>

//         <form onSubmit={submitHandler} className="space-y-6">
//           <div>
//             <label className="block text-sm text-gray-300 mb-1">
//               Task Title
//             </label>
//             <input
//               type="text"
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               placeholder="Make a UI design"
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-1">
//               Description
//             </label>
//             <textarea
//               rows={4}
//               value={taskDescription}
//               onChange={(e) => setTaskDescription(e.target.value)}
//               placeholder="Detailed description..."
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-1">Date</label>
//             <input
//               type="date"
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-1">
//               Assign To
//             </label>
//             <input
//               type="text"
//               value={asignTo}
//               onChange={(e) => setAsignTo(e.target.value)}
//               placeholder="Employee Name"
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-1">Category</label>
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               placeholder="Design, Development..."
//               className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//             />
//           </div>

//           <button className="w-full bg-black hover:bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl">
//             Create Task
//           </button>
//         </form>
//       </div>

//       {/* ---------------- DESKTOP / TABLET LAYOUT ---------------- */}
//       <div className="hidden lg:flex w-full justify-center py-12">
//         <div className="w-full bg-zinc-800 rounded-lg p-8 shadow-lg">
//           <div className="flex items-center mb-8">
//             <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
//               ←
//             </button>
//             <h2 className="text-2xl font-semibold text-white">Create Task</h2>
//           </div>

//           <form onSubmit={submitHandler} className="w-full flex gap-10">
//             {/* LEFT COLUMN */}
//             <div className="w-1/2 space-y-6">
//               <div>
//                 <label className="block text-md text-gray-300 mb-1">
//                   Task Title
//                 </label>
//                 <input
//                   type="text"
//                   value={taskTitle}
//                   onChange={(e) => setTaskTitle(e.target.value)}
//                   placeholder="Make a UI design"
//                   className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
//                 />
//               </div>

//               <div>
//                 <label className="block text-md text-gray-300 mb-1">Date</label>
//                 <input
//                   type="date"
//                   value={taskDate}
//                   onChange={(e) => setTaskDate(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//                 />
//               </div>

//               <div>
//                 <label className="block text-md text-gray-300 mb-1">
//                   Assign To
//                 </label>
//                 <input
//                   type="text"
//                   value={asignTo}
//                   onChange={(e) => setAsignTo(e.target.value)}
//                   placeholder="Employee Name"
//                   className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//                 />
//               </div>

//               <div>
//                 <label className="block text-md text-gray-300 mb-1">
//                   Category
//                 </label>
//                 <input
//                   type="text"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   placeholder="Design, Development..."
//                   className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
//                 />
//               </div>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="w-1/2 flex flex-col justify-between">
//               <div className="mb-6">
//                 <label className="block text-md text-gray-300 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   rows={8}
//                   value={taskDescription}
//                   onChange={(e) => setTaskDescription(e.target.value)}
//                   placeholder="Detailed description..."
//                   className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
//                 />
//               </div>

//               <button className="w-full bg-[#0BB882] hover:bg-emerald-600 text-white py-3 rounded-xl">
//                 Create Task
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateTask;

// src/components/EmployeeDashboardUI/CreateTask.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const clearForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle.trim() || !asignTo.trim()) {
      alert("Please add Task Title and Assign To (employee firstName).");
      return;
    }

    const newTask = {
      title: taskTitle.trim(),
      description: taskDescription.trim(),
      date: taskDate || new Date().toISOString().split("T")[0],
      category: category.trim(),
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // assign by firstName case-insensitive (first match)
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.firstName.toLowerCase() === asignTo.trim().toLowerCase()) {
        // push new task and increment newTask count
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskNumbers: {
            ...emp.taskNumbers,
            newTask: (emp.taskNumbers.newTask || 0) + 1,
          },
        };
      }
      return emp;
    });

    setUserData({ ...userData, employees: updatedEmployees });
    clearForm();
  };

  return (
    <>
      {/* MOBILE */}
      <div className="w-full max-w-md bg-zinc-800 rounded-xl p-8 mt-10 shadow-lg mx-auto sm:max-w-2xl lg:hidden">
        <div className="flex items-center mb-8">
          <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
            ←
          </button>
          <h2 className="text-2xl font-semibold text-white">Create Task</h2>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
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
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Detailed description..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Assign To
            </label>
            <input
              type="text"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              placeholder="Employee First Name (e.g. John)"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Design, Development..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            />
          </div>

          <button className="w-full bg-black hover:bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl">
            Create Task
          </button>
        </form>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex w-full justify-center py-12">
        <div className="w-full bg-zinc-800 rounded-lg p-8 shadow-lg">
          <div className="flex items-center mb-8">
            <button className="w-10 h-10 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:bg-zinc-700 transition mr-4">
              ←
            </button>
            <h2 className="text-2xl font-semibold text-white">Create Task</h2>
          </div>

          <form onSubmit={submitHandler} className="w-full flex gap-10">
            <div className="w-1/2 space-y-6">
              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder="Make a UI design"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">Date</label>
                <input
                  type="date"
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Assign To
                </label>
                <input
                  type="text"
                  value={asignTo}
                  onChange={(e) => setAsignTo(e.target.value)}
                  placeholder="Employee First Name (e.g. John)"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-md text-gray-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Design, Development..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white"
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between">
              <div className="mb-6">
                <label className="block text-md text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={8}
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder="Detailed description..."
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
                />
              </div>

              <button className="w-full bg-[#0BB882] hover:bg-emerald-600 text-white py-3 rounded-xl">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
