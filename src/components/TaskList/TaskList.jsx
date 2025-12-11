import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { userData, setUserData } = useContext(AuthContext);

  if (!data || !data.tasks) return null;

  // Use indices to uniquely update tasks
  const handleAccept = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex ? { ...t, newTask: false, active: true } : t
      );
      // update counters
      const taskNumbers = { ...emp.taskNumbers };
      taskNumbers.newTask = (taskNumbers.newTask || 0) - 1;
      taskNumbers.active = (taskNumbers.active || 0) + 1;
      return { ...emp, tasks: newTasks, taskNumbers };
    });
    setUserData({ ...userData, employees: updatedEmployees });
    // Also update loggedInUser in localStorage if needed (App restores from localStorage on refresh)
    const saved = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (
      saved &&
      saved.role === "employee" &&
      saved.data &&
      saved.data.id === empId
    ) {
      const freshEmp = updatedEmployees.find((e) => e.id === empId);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: freshEmp })
      );
    }
  };

  const handleComplete = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex
          ? { ...t, active: false, completed: true, newTask: false }
          : t
      );
      // update counters: decrement active or newTask whichever had it, increment completed
      const taskNumbers = { ...emp.taskNumbers };
      const task = emp.tasks[taskIndex];
      if (task) {
        if (task.active) taskNumbers.active = (taskNumbers.active || 0) - 1;
        if (task.newTask) taskNumbers.newTask = (taskNumbers.newTask || 0) - 1;
      }
      taskNumbers.completed = (taskNumbers.completed || 0) + 1;
      return { ...emp, tasks: newTasks, taskNumbers };
    });
    setUserData({ ...userData, employees: updatedEmployees });
    const saved = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (
      saved &&
      saved.role === "employee" &&
      saved.data &&
      saved.data.id === empId
    ) {
      const freshEmp = updatedEmployees.find((e) => e.id === empId);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: freshEmp })
      );
    }
  };

  const handleFail = (empId, taskIndex) => {
    const updatedEmployees = (userData.employees || []).map((emp) => {
      if (emp.id !== empId) return emp;
      const newTasks = emp.tasks.map((t, idx) =>
        idx === taskIndex
          ? { ...t, active: false, failed: true, newTask: false }
          : t
      );
      const taskNumbers = { ...emp.taskNumbers };
      const task = emp.tasks[taskIndex];
      if (task) {
        if (task.active) taskNumbers.active = (taskNumbers.active || 0) - 1;
        if (task.newTask) taskNumbers.newTask = (taskNumbers.newTask || 0) - 1;
      }
      taskNumbers.failed = (taskNumbers.failed || 0) + 1;
      return { ...emp, tasks: newTasks, taskNumbers };
    });
    setUserData({ ...userData, employees: updatedEmployees });
    const saved = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (
      saved &&
      saved.role === "employee" &&
      saved.data &&
      saved.data.id === empId
    ) {
      const freshEmp = updatedEmployees.find((e) => e.id === empId);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: freshEmp })
      );
    }
  };

  // Render in priority: new -> active -> completed -> failed
  const ordered = [];
  data.tasks.forEach((t, idx) => {
    if (t.newTask) ordered.push({ t, idx });
  });
  data.tasks.forEach((t, idx) => {
    if (t.active) ordered.push({ t, idx });
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
