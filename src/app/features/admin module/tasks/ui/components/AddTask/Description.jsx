


const Description = ({ register, errors }) => {
  return (
    <div>
      {" "}
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {" "}
        Description{" "}
      </label>{" "}
      <textarea
        rows={4}
        placeholder="Describe the task"
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Description must be at least 10 characters",
          },
        })}
        className="w-full resize-none rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      />{" "}
      {errors.description && (
        <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
          {" "}
          {errors.description.message}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default Description