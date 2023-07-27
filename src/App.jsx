import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getMe } from "./app/features/auth/authSlice";
import { getHomepageNews } from "./app/features/news/newsSlice";
import Navbar from "./components/layouts/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRoutesComponent from "./components/ProtectedRouteComponent";
import Caraousel from "./components/shared/Caraousel";
import Pagination from "./components/shared/Paginaton";
import AdminUsers from "./features/dashboard/components/AdminUsers";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";
import { getCookie } from "./pkg/universalCookies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/layouts/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");

  useEffect(() => {
    (async function fetchData() {
      try {
        const limit = 10;
        const homepageNews = await dispatch(getHomepageNews(limit)).unwrap();
        setIsLoading(false);
        if (accessToken) {
          const result = await dispatch(getMe(accessToken)).unwrap();
        }
      } catch (error) {
        console.log("err:", error);
      } finally {
      }
    })();
  }, []);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/news/:categoryName" element={<CategoryPage />} />
          <Route path="/news/:categoryName/:newsId" element={<NewsPage />} />
          <Route element={<ProtectedRoutesComponent reader={true} />}>
            <Route path="/user/:id" element={<Profile />} />
          </Route>
          {/* <Route
            path="/user/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route element={<ProtectedRoutesComponent admin={true} />}> */}
          <Route
            path="/admin/dashboard/:contentId"
            element={<DashboardPage />}
          />
          {/* </Route> */}
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
