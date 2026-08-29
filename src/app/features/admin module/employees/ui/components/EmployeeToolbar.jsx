import React from "react";
// import useEmployee from "../../hooks/useEmployee";

const EmployeeToolbar = ({ filter, Searchfilter }) => {
  // let { filter, Searchfilter } = useEmployee();

  return (
    <div
      className="mb-4 flex flex-col gap-3 rounded-[var(--radius-md)] border p-4 md:flex-row md:items-center"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="flex-1">
        <input
          value={filter.search}
          onChange={(e) => {
            Searchfilter("search", e.target.value);
          }}
          type="text"
          placeholder="Search employees..."
          className="w-full rounded-[var(--radius-md)] border px-4 py-2.5 text-sm outline-none"
          style={{
            backgroundColor: "var(--bg-main)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      <select
        value={filter.department}
        onChange={(e) => {
          Searchfilter("department", e.target.value);
        }}
        className="rounded-[var(--radius-md)] border px-4 py-2.5 text-sm outline-none"
        style={{
          backgroundColor: "var(--bg-main)",
          borderColor: "var(--border-color)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="">All Departments</option>
        <option value="marketing">Marketing</option>
        <option value="development">Development</option>
        <option value="hr">HR</option>
      </select>

      <select
        value={filter.role}
        onChange={(e) => {
          Searchfilter("role", e.target.value);
        }}
        className="rounded-[var(--radius-md)] border px-4 py-2.5 text-sm outline-none"
        style={{
          backgroundColor: "var(--bg-main)",
          borderColor: "var(--border-color)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="">Role</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>

      <select
        value={filter.status}
        onChange={(e) => {
          Searchfilter("status", e.target.value);
        }}
        className="rounded-[var(--radius-md)] border px-4 py-2.5 text-sm outline-none"
        style={{
          backgroundColor: "var(--bg-main)",
          borderColor: "var(--border-color)",
          color: "var(--text-secondary)",
        }}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default EmployeeToolbar;
