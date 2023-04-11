import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuardedRoute = () => {
  const isAuth = localStorage.getItem('token');

  return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default GuardedRoute;