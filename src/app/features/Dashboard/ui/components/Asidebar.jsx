import React from 'react'
import { CirclePile, ClipboardList, LayoutDashboard, MessageSquareText, Settings } from "lucide-react";



const Asidebar = () => {
  return (
    <div className="flex flex-col gap-14 ">
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
          <div className="flex gap-2 text-lg items-center hover:border-r-3 md:px-4 hover:bg-(--bg-hover) p-0.5 px-2">
            <LayoutDashboard /> Dashboard
          </div>
          <div className="flex gap-2 text-lg items-center hover:border-r-3 md:px-4 hover:bg-(--bg-hover) p-0.5 px-2">
            <ClipboardList /> Tasks
          </div>
          <div className="flex gap-2 text-lg items-center hover:border-r-3 md:px-4 hover:bg-(--bg-hover) p-0.5 px-2">
            <CirclePile /> Team
          </div>
          <div className="flex gap-2 text-lg items-center hover:border-r-3 md:px-4 hover:bg-(--bg-hover) p-0.5 px-2">
            <MessageSquareText /> Chat
          </div>
          <div className="flex gap-2 text-lg items-center hover:border-r-3 md:px-4 hover:bg-(--bg-hover) p-0.5 px-2">
            <Settings /> Setting
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asidebar