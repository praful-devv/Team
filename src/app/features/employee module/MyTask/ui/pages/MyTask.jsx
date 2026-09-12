import React from "react";
import useEmpTask from "../../hooks/useEmpTask";

const MyTask = () => {
  const { data, isPending, isError } = useEmpTask();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Failed to load tasks</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {data?.tasks?.length > 0 ? (
        data.tasks.map((task) => (
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
              className="mt-2 break-all text-sm"
              style={{ color: "var(--text-third)" }}
            >
              {task.description || "No description"}
            </p>

            
            <div className="mt-4 flex items-center justify-between">
              <span
                className="rounded-full px-3 py-1 text-xs font-medium capitalize"
                style={{
                  backgroundColor:
                    task.status === "completed"
                      ? "rgba(34,197,94,0.12)"
                      : task.status === "in-progress"
                        ? "rgba(59,130,246,0.12)"
                        : "rgba(245,158,11,0.12)",

                  color:
                    task.status === "completed"
                      ? "var(--success)"
                      : task.status === "in-progress"
                        ? "rgb(59,130,246)"
                        : "var(--warning)",
                }}
              >
                {task.status}
              </span>

              <span
                className="rounded-full px-3 py-1 text-xs font-medium capitalize"
                style={{
                  backgroundColor: "var(--primary-soft)",
                  color: "var(--primary)",
                }}
              >
                {task.priority}
              </span>
            </div>

          
            <p
              className="mt-4 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Assigned to:{" "}
              <span className="font-medium">
                {task.assignedTo?.name || "You"}
              </span>
            </p>

            
            <p className="mt-2 text-sm" style={{ color: "var(--text-third)" }}>
              Due:{" "}
              {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
            </p>
          </div>
        ))
      ) : (
        <div
          className="col-span-full rounded-[var(--radius-lg)] border p-10 text-center"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <p className="text-sm" style={{ color: "var(--text-third)" }}>
            No tasks assigned to you.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyTask;
