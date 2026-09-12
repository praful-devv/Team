import { CirclePile, ClipboardList, Files, LayoutDashboard, List, MessageSquareText, Paperclip, PersonStanding, Presentation, Settings } from "lucide-react";

export let adminNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "/home/employee",
    title: "Employee",
    icon: <PersonStanding />,
  },
  {
    path: "/home/task",
    title: "Tasks",
    icon: <ClipboardList />,
  },
  {
    path: "/home/documents",
    title: "Documents",
    icon: <Files />,
  },
  {
    path: "/home/setting",
    title: " Setting",
    icon: <Settings />,
  },
];

export let employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "/home/myTask",
    title: "MyTask",
    icon: <List />,
  },
  {
    path: "/home/setting",
    title: "Setting",
    icon: <Settings />,
  },
];
