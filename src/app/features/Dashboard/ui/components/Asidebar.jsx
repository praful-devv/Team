import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../constant/navigation";

const Asidebar = () => {
  

  let { employee } = useSelector((store) => store.auth);

  let navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex flex-col gap-2 p-4 ">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-(--text-four)">
          Team Management
        </h2>
        <p className="text-xs md:text-sm text-(--text-third)">
          Enterprise WorkSpace
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 ">
          {navigations.map((nav, idx) => {
            return (
              <NavLink 
                className={({ isActive }) =>
                  `flex gap-2 text-lg items-center  md:pl-4  p-0.5 px-2 ${isActive ? "border-r-3 bg-(--bg-hover)" : ""}`
                }
                key={idx}
                to={nav.path}
                end="/"
              >
                {nav.icon}
                {nav.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Asidebar;
