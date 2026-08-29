import { Bell, Menu, Search, Lightbulb,Moon } from "lucide-react";
import React from 'react'
import DashboardHook from '../../hooks/DashboardHook';

const Navbar = () => {

  let { handleTheme,mode } = DashboardHook()


  return (
    <div className="grid grid-cols-2 ">
      <div className="flex items-center p-2">
        <div className="flex  border-2 border-(--border-color) p-1 rounded gap-2 items-center w-fit bg-(--bg-surface)">
          <Search size={20} />
          <input
            className="w-full outline-0 md:w-62 "
            type="text"
            placeholder="search workspace"
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        {mode === "light" ? (
          <Lightbulb onClick={handleTheme} size={22} />
        ) : (
          <Moon onClick={handleTheme} size={22} />
        )}
        <Bell size={22} />
        <Menu size={22} />
      </div>
    </div>
  );
}

export default Navbar