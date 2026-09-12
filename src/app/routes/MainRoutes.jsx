import  { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import { useDispatch } from "react-redux";
import { currentLogin } from "../features/auth/state/auth/authThunk";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";
import { commonRoutes } from "./CommonRoutes";
import RolebasedRoutes from "../protectedRoutes/RolebasedRoutes";
import { adminRoutes } from "./AdminRoutes";
import { employeeRoutes } from "./EmployeeRoutes";

const MainRoutes = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(currentLogin());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RolebasedRoutes allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              element: <RolebasedRoutes allowedRoles={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
