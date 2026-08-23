import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  let { employee, isLoading } = useSelector((store) => {
    return store.auth;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (employee) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
