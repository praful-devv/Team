
const Date = ({ register, errors }) => {

  return (
    <div>
      {" "}
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {" "}
        Due Date{" "}
      </label>{" "}
      <input
        type="date"
        {...register("dueDate", { required: "Due date is required" })}
        className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      />{" "}
      {errors.dueDate && (
        <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
          {" "}
          {errors.dueDate.message}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default Date