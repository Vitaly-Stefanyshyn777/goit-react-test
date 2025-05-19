import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectisLoggedIn } from "../redux/auth/selectors";

function PrivateRoutes({ component: Component }) {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? Component : <Navigate to="/login" />;
}

export default PrivateRoutes;
