

const Priority = ({ register, errors }) => {
  

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {" "}
      <div>
        {" "}
        <label
          className="mb-2 block text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {" "}
          Priority{" "}
        </label>{" "}
        <select
          {...register("priority", { required: "Priority is required" })}
          className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          {" "}
          <option value="low">Low</option>{" "}
          <option value="medium">Medium</option>{" "}
          <option value="high">High</option>{" "}
        </select>{" "}
        {errors.priority && (
          <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
            {" "}
            {errors.priority.message}{" "}
          </p>
        )}{" "}
      </div>{" "}
      <div>
        {" "}
        <label
          className="mb-2 block text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {" "}
          Status{" "}
        </label>{" "}
        <select
          {...register("status", { required: "Status is required" })}
          className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          {" "}
          <option value="todo">To Do</option>{" "}
          <option value="in-progress">In Progress</option>{" "}
          <option value="completed">Completed</option>{" "}
        </select>{" "}
        {errors.status && (
          <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
            {" "}
            {errors.status.message}{" "}
          </p>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Priority