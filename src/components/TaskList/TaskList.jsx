import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data || !data.tasks) return null;

  return (
    <div
      id="tasklist"
      className="flex items-center justify-start gap-4 flex-nowrap overflow-x-auto h-[50%] w-full py-5 mt-10 rounded-lg"
    >
      {data.tasks.map((task, idx) => {
        if (task.newTask) return <NewTask key={idx} data={task} />;
        if (task.active) return <AcceptTask key={idx} data={task} />;
        if (task.completed) return <CompleteTask key={idx} data={task} />;
        if (task.failed) return <FailedTask key={idx} data={task} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
