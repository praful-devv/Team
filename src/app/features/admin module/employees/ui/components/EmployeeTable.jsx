import React from "react";

import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees }) => {
  return (
    <div
      className="overflow-hidden rounded-[var(--radius-md)] border "
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div className="overflow-x-auto ">
        <table className="w-full  text-left">
          <thead>
            <tr
              className="border-b"
              style={{
                borderColor: "var(--border-color)",
                backgroundColor: "var(--bg-surface)",
              }}
            >
              <th
                className="px-5 py-4 text-xs font-semibold uppercase"
                style={{
                  color: "var(--text-third)",
                }}
              >
                Employee
              </th>

              <th
                className="px-5 py-4 text-xs font-semibold uppercase"
                style={{
                  color: "var(--text-third)",
                }}
              >
                Department
              </th>

              <th
                className="px-5 py-4 text-xs font-semibold uppercase"
                style={{
                  color: "var(--text-third)",
                }}
              >
                Role
              </th>

              <th
                className="px-5 py-4 text-xs font-semibold uppercase"
                style={{
                  color: "var(--text-third)",
                }}
              >
                Status
              </th>

              <th
                className="px-5 py-4 text-xs font-semibold uppercase"
                style={{
                  color: "var(--text-third)",
                }}
              >
                Joined
              </th>

              <th className="px-5 py-4" />
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <EmployeeRow key={employee._id} employee={employee}  />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
