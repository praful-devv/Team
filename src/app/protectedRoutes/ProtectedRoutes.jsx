import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  let { employee, isLoading } = useSelector((store) => {
    return store.auth;
  });

  if (isLoading) { 
    return <h1>Loading...</h1>;
  }

  if (!employee) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
