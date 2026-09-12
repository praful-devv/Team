import Home from "../features/Dashboard/ui/pages/Home";
import Setting from "../features/settings/ui/pages/Setting";

export let commonRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
