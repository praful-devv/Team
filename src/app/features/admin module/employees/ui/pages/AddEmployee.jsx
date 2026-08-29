import React from "react";
import useaddEmployee from "../../hooks/useaddEmployee";

const AddEmployee = () => {
  let { register, handleSubmit, errors, formSubmit } = useaddEmployee();

  return (
    <div
      className="rounded-[var(--radius-md)] border p-6"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="mb-6">
        <h2
          className="text-xl font-bold"
          style={{
            color: "var(--text-primary)",
          }}
        >
          Add Employee
        </h2>

        <p
          className="mt-1 text-sm"
          style={{
            color: "var(--text-third)",
          }}
        >
          Add a new employee to your organization.
        </p>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Avatar
            </label>

            <input
              type="text"
              placeholder="Avatar URL"
              {...register("avatar")}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none "
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Name
            </label>

            <input
              type="text"
              placeholder="Enter employee name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must contain at least 2 characters",
                },
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: errors.name
                  ? "var(--danger)"
                  : "var(--border-color)",
                color: "var(--text-primary)",
              }}
            />

            {errors.name && (
              <p className="mt-1 text-xs" style={{ color: "var(--danger)" }}>
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: errors.email
                  ? "var(--danger)"
                  : "var(--border-color)",
                color: "var(--text-primary)",
              }}
            />

            {errors.email && (
              <p className="mt-1 text-xs" style={{ color: "var(--danger)" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: errors.password
                  ? "var(--danger)"
                  : "var(--border-color)",
                color: "var(--text-primary)",
              }}
            />

            {errors.password && (
              <p
                className="mt-1 text-xs"
                style={{
                  color: "var(--danger)",
                }}
              >
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Department
            </label>

            <select
              {...register("department", {
                required: "Department is required",
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <option value="">Select department</option>
              <option value="administrative">Administrative</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
              <option value="hr">HR</option>
            </select>

            {errors.department && (
              <p className="mt-1 text-xs" style={{ color: "var(--danger)" }}>
                {errors.department.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Role
            </label>

            <select
              {...register("role", {
                required: "Role is required",
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>

            {errors.role && (
              <p className="mt-1 text-xs" style={{ color: "var(--danger)" }}>
                {errors.role.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Status
            </label>

            <select
              {...register("status", {
                required: "Status is required",
              })}
              className="w-full rounded-[var(--radius-md)] border px-4 py-3 text-sm outline-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            {errors.status && (
              <p className="mt-1 text-xs" style={{ color: "var(--danger)" }}>
                {errors.status.message}
              </p>
            )}
          </div>
        </div>

        <div
          className="mt-6 flex flex-col justify-end gap-3 border-t pt-5 sm:flex-row"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          <button
            type="submit"
            className="rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium text-white"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
