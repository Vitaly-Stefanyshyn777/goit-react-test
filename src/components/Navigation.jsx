import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectisLoggedIn } from "../redux/auth/selectors";
function Navigation() {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      {isLoggedIn ? (
        <NavLink to="/contacts"> Contacts </NavLink>
      ) : (
        <>
          <NavLink to="/register"> Register </NavLink>
          <NavLink to="/login"> login </NavLink>
        </>
      )}
    </div>
  );
}

export default Navigation;
