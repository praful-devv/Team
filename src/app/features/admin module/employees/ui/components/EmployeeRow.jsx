import React from "react";

import EmployeeAvatar from "./EmployeeAvatar";
import StatusBadge from "./StatusBadge";

const EmployeeRow = ({ employee }) => {
  const { avatar, name, email, department, role, status, createdAt } = employee;

  const joinedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr
      className="border-b transition-colors"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <EmployeeAvatar avatar={avatar} name={name} />

          <div>
            <p
              className="font-semibold"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {name}
            </p>

            <p
              className="text-sm"
              style={{
                color: "var(--text-third)",
              }}
            >
              {email}
            </p>
          </div>
        </div>
      </td>

      <td
        className="px-5 py-4 text-sm capitalize"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {department}
      </td>

      <td
        className="px-5 py-4 text-sm capitalize"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {role}
      </td>

      <td className="px-5 py-4">
        <StatusBadge status={status} />
      </td>

      <td
        className="px-5 py-4 text-sm"
        style={{
          color: "var(--text-third)",
        }}
      >
        {joinedDate}
      </td>

      <td className="px-5 py-4">
        <button
          className="rounded px-3 py-1.5 text-sm transition hover:opacity-80"
          style={{
            color: "var(--text-four)",
          }}
        >
          View
        </button>
      </td>
      <td className="px-5 py-4">
        <select name="" id="">
          <option className="text-black">update</option>
          <option className="text-black">delete</option>
        </select>
      </td>
    </tr>
  );
};

export default EmployeeRow;
