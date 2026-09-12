import React from "react";
import TaskHeader from "../components/TaskHeader";
import TasksCard from "../components/TasksCard";
import useTasks from "../../hooks/useTasks";

const Task = () => {
  let { data, isPending, deleteTaskMutation, nextButton, prevButton, page } =
    useTasks();

  return (
    <div className="px-4 flex flex-col h-full ">
      <TaskHeader />
      <div className="overflow-y-auto ">
        <TasksCard
          isPending={isPending}
          data={data}
          deleteTaskMutation={deleteTaskMutation}
        />
      </div>
      <div className="flex  justify-center items-center  gap-4">
        <button onClick={prevButton} className="px-2 py-0.5 ">
          prev
        </button>
        <p>{page}</p>
        <button onClick={nextButton} className="px-2 py-0.5 ">
          next
        </button>
      </div>
    </div>
  );
};

export default Task;
