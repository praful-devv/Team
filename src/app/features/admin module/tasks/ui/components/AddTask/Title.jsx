import React from "react";


const Title = ({ register, errors }) => {
  

  return (
    <div>
      {" "}
      <label
        className="mb-2 block text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {" "}
        Task Title{" "}
      </label>{" "}
      <input
        type="text"
        placeholder="Enter task title"
        {...register("title", {
          required: "Task title is required",
          minLength: {
            value: 3,
            message: "Title must be at least 3 characters",
          },
        })}
        className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 outline-none"
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      />{" "}
      {errors.title && (
        <p className="mt-1 text-sm" style={{ color: "var(--danger)" }}>
          {" "}
          {errors.title.message}{" "}
        </p>
      )}{" "}
    </div>
  );
};

export default Title;
