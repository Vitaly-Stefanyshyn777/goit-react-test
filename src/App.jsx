import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import HomePage from "./page/HomePage";
import ContactPage from "./page/ContactPage";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operation";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRoutes component={<ContactPage />} />}
        />
        <Route
          path="/login"
          element={<PublicRoutes component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoutes component={<RegisterPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
