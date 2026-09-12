import React from "react";

const EmployeeStats = ({ employees }) => {

  
  
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "active",
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status !== "active",
  ).length;

  const departments = new Set(employees.map((employee) => employee.department))
    .size;

  const stats = [
    {
      label: "Total Employees",
      value: totalEmployees,
    },
    {
      label: "Active",
      value: activeEmployees,
      color: "var(--success)",
    },
    {
      label: "Inactive",
      value: inactiveEmployees,
      color: "var(--danger)",
    },
    {
      label: "Departments",
      value: departments,
      color: "var(--primary)",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
     
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[var(--radius-md)] border p-5"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: "var(--text-third)",
            }}
          >
            {stat.label}
          </p>

          <h2
            className="mt-2 text-2xl font-bold"
            style={{
              color: stat.color || "var(--text-primary)",
            }}
          >
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default EmployeeStats;