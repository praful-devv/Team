import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../features/auth/ui/Login";
import Register from "../features/auth/ui/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../features/Dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { currentLogin } from "../features/auth/state/auth/authThunk";
import PublicRoutes from "../protectedRoutes/PublicRoutes";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";

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
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
