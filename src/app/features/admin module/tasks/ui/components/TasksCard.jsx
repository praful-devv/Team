import React from "react";


const TasksCard = ({ data,isPending, deleteTaskMutation }) => {

  
  if(isPending) return <h1>Loading...</h1>
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 ">
      {data?.tasks?.map((task) => (
        <div
          key={task._id}
          className="rounded-[var(--radius-lg)] border p-5"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h2
            className="text-lg font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {task.title}
          </h2>

          <p
            className="mt-2 text-sm break-all"
            style={{ color: "var(--text-third)" }}
          >
            {task.description}
          </p>

          <div className="mt-4 flex justify-between">
            <span>{task.status}</span>

            <span>{task.priority}</span>
          </div>

          <p
            className="mt-4 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Assigned to: {task.assignedTo?.name}
          </p>

          <p className="mt-2 text-sm" style={{ color: "var(--text-third)" }}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
          <button
            onClick={() =>
              deleteTaskMutation.mutate({
                id: task._id,
              })
            }
            className="p-1 mt-2 rounded-(--radius-sm) bg-(--text-third) active:scale-95"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TasksCard;
