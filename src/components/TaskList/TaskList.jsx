import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";
import { saveEmployeesToLocalStorage } from "../../utils/LocalStorage";

const TaskList = ({ data }) => {
  const { userData, setUserData } = useContext(AuthContext);

  if (!data || !data.tasks) return null;

  // Helper to recalculate task numbers from tasks array
  const calculateTaskNumbers = (tasks) => {
    const numbers = { active: 0, newTask: 0, completed: 0, failed: 0 };
    tasks.forEach((t) => {
      if (t.newTask) numbers.newTask++;
      if (t.active) numbers.active++;
      if (t.completed) numbers.completed++;
      if (t.failed) numbers.failed++;
    });
    return numbers;
  };

  const updateEmployeeAndSync = (updatedEmployees, empId) => {
    setUserData({ ...userData, employees: updatedEmployees });
    
    // Update loggedInUser in localStorage
    const saved = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (saved && saved.role === "employee" && saved.data && saved.data.id === empId) {
      const freshEmp = updatedEmployees.find((e) => e.id === empId);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: freshEmp }));
    }
  };

  const handleAccept = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex ? { ...t, newTask: false, active: true } : t
      );
      return { ...emp, tasks: newTasks, taskNumbers: calculateTaskNumbers(newTasks) };
    });
    updateEmployeeAndSync(updatedEmployees, empId);
  };

  const handleComplete = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex ? { ...t, active: false, completed: true, newTask: false } : t
      );
      return { ...emp, tasks: newTasks, taskNumbers: calculateTaskNumbers(newTasks) };
    });
    updateEmployeeAndSync(updatedEmployees, empId);
  };

  const handleFail = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex ? { ...t, active: false, failed: true, newTask: false } : t
      );
      return { ...emp, tasks: newTasks, taskNumbers: calculateTaskNumbers(newTasks) };
    });
    updateEmployeeAndSync(updatedEmployees, empId);
  };

  // Render in priority: new -> active -> completed -> failed
  const ordered = [];
  data.tasks.forEach((t, idx) => {
    if (t.newTask) ordered.push({ t, idx });
  });
  data.tasks.forEach((t, idx) => {
    if (t.active && !t.newTask) ordered.push({ t, idx });
  });
  data.tasks.forEach((t, idx) => {
    if (t.completed) ordered.push({ t, idx });
  });
  data.tasks.forEach((t, idx) => {
    if (t.failed) ordered.push({ t, idx });
  });

  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-8 flex-nowrap overflow-x-auto h-[50%] w-full py-5 mt-10 rounded-lg"
    >
      {ordered.map(({ t, idx }) => {
        if (t.newTask)
          return (
            <NewTask
              key={idx}
              data={t}
              onAccept={() => handleAccept(data.id, idx)}
            />
          );
        if (t.active)
          return (
            <AcceptTask
              key={idx}
              data={t}
              onComplete={() => handleComplete(data.id, idx)}
              onFail={() => handleFail(data.id, idx)}
            />
          );
        if (t.completed) return <CompleteTask key={idx} data={t} />;
        if (t.failed) return <FailedTask key={idx} data={t} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
