import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Asidebar from "../features/Dashboard/ui/components/Asidebar";
import Navbar from "../features/Dashboard/ui/components/Navbar";

const DashboardLayout = () => {

 let {mode} = useSelector(store=> store.theme)

  useEffect(()=>{
    if(mode ==='light'){
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
    }
  },[mode])

  return (
    <div className="h-screen grid grid-cols-[1fr_6fr]">
      <div className="border-r border-gray-500 "><Asidebar/></div>
      <div className="flex flex-col gap-5 p-4 overflow-auto">
        <Navbar/>
        <div className="overflow-y-auto ">

        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
