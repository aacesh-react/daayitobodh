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
  
  function ProtectedRoute({ admin, author, reader, children }) {
    const { loggedIn, isLoading, user } = useSelector((state) => state.auth);
    const [isAuth, setIsAuth] = useState();
  
    //   const [isLoggedIn, setIsloggedIn] = useState(loggedIn);
    const navigate = useNavigate();
    const location = useLocation();
  
    const dispatch = useDispatch();
    console.log("protected route");
    useEffect(() => {
      console.log("use effect protected route");
      const accessToken = getCookie("accessToken");
      console.log("access token:", accessToken);
      if (!accessToken) {
        navigate("/login", {
          state: { from: location },
        });
      }
      if (accessToken && !loggedIn) {
        (async function me() {
          try {
            const data = await dispatch(getMe(accessToken)).unwrap();
            console.log("data:", data.data.roles);
            setIsAuth(true);
          } catch (error) {
            console.log("err:", error);
            navigate("/login");
          }
        })();
      }
    }, [isAuth]);
    console.log("*******************");
    console.log(admin, author, user);
    if (admin && user) {
      console.log("admin", user.roles.includes("admin"));
      if (!user.roles.includes("admin")) return <Navigate to={"/"} />;
    }
    if (author && user) {
      if (!user.roles.includes("author")) return <Navigate to={"/"} />;
    }
    // if (isAuth === undefined) return <LoginPage />;
    return children;
  }
  
  export default ProtectedRoute;