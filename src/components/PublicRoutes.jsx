import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectisLoggedIn } from "../redux/auth/selectors";

function PublicRoutes({ component: Component }) {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
}

export default PublicRoutes;
