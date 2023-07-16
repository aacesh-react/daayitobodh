import {
  Outlet,
  Navigate,
  useNavigate,
  useLocation,
  redirect,
} from "react-router-dom";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../app/features/auth/authSlice";
import { getCookie } from "../pkg/universalCookies";
import LoginPage from "../pages/LoginPage";

function ProtectedRoutesComponent({ admin, author, reader, children }) {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const [isAuth, setIsAuth] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //   const [isLoggedIn, setIsloggedIn] = useState(loggedIn);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  console.log("protected route");
  // useEffect(() => {
  //   console.log("use effect protected route");
  //   const accessToken = getCookie("accessToken");
  //   // console.log("access token:", accessToken);
  //   if (!accessToken) {
  //     navigate("/login", {
  //       state: { from: location },
  //     });
  //   }
  //   if (accessToken && !loggedIn) {
  //     (async function me() {
  //       try {
  //         const data = await dispatch(getMe(accessToken)).unwrap();
  //         // console.log("data:", data.data.roles);
  //         setIsAuth(true);
  //       } catch (error) {
  //         // console.log("err:", error);
  //         navigate("/login");
  //       }
  //     })();
  //   }
  //   setIsLoading(false);
  // }, [isAuth]);

  // if (isLoading) {
  //   console.log("loading");
  //   return <div>Loading...</div>;
  // }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  if (admin && user) {
    // console.log("admin", user.roles.includes("admin"));
    if (!user.roles.includes("admin")) return <Navigate to={"/"} />;
  }
  if (author && user) {
    if (!user.roles.includes("author")) return <Navigate to={"/"} />;
  }

  return <Outlet />;
}

export default ProtectedRoutesComponent;

// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';

// import { useAppSelector } from '$/hooks';

// interface ProtectedRouteProps {
//   exact?: boolean;
//   path: string;
//   component?: React.ComponentType;
//   render?: () => React.ReactNode;
//   requiredRoles: string[];
// }

// function ProtectedRoute(props: ProtectedRouteProps) {
//   const {
//     exact = false,
//     path,
//     component,
//     requiredRoles: requiredPermissions,
//     render
//   } = props;

//   const { value: userInformation } = useAppSelector(
//     (state) => state.userInformation
//   );

//   const { permissions: currentUserPermissions } = userInformation;

//   const isAuthorized =
//     currentUserPermissions &&
//     requiredPermissions.some((permission) =>
//       currentUserPermissions.includes(permission)
//     );

//   if (!isAuthorized) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <Route exact={exact} path={path} component={component} render={render} />
//   );
// }

// export default ProtectedRoute;
