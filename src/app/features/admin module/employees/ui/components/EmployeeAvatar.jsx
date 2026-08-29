import React from "react";

const EmployeeAvatar = ({ avatar, name }) => {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--text-primary)",
      }}
    >
      {name?.charAt(0).toUpperCase()}
    </div>
  );
};

export default EmployeeAvatar;
