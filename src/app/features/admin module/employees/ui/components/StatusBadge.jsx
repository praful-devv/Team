import React from "react";


const StatusBadge = ({ status }) => {
  const isActive = status === "active";

  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize"
      style={{
        backgroundColor: isActive
          ? "rgba(34, 197, 94, 0.12)"
          : "rgba(239, 68, 68, 0.12)",

        color: isActive ? "var(--success)" : "var(--danger)",
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
