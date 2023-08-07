import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

function ProtectedRoutesComponent({ admin, author, reader, children }) {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  if (admin && user) {
    if (!user.roles.includes("admin")) return <Navigate to={"/"} />;
  }
  if (author && user) {
    if (!user.roles.includes("author")) return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

export default ProtectedRoutesComponent;
