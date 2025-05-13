import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <NavLink to="/"> </NavLink>
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> login </NavLink>
      <NavLink to="/contacts"> Contacts </NavLink>
    </div>
  );
}

export default Navigation;
