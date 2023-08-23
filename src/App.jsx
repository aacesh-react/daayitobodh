import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getMe } from "./app/features/auth/authSlice";
import { getHomepageNews } from "./app/features/news/newsSlice";
import ProtectedRoutesComponent from "./components/ProtectedRouteComponent";
import CategoryPage from "./pages/CategoryPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";
import { getCookie } from "./pkg/universalCookies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/layouts/Footer";
import HamroTeam from "./components/HamroTeam";
import HamroBare from "./components/HamroBare";

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
        // if (accessToken) {
        //   const result = await dispatch(getMe(accessToken)).unwrap();
        // }
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/news/:categoryName" element={<CategoryPage />} />
          <Route path="/news/:categoryName/:newsId" element={<NewsPage />} />
          <Route element={<ProtectedRoutesComponent reader={true} />}>
            <Route path="/user/:id" element={<Profile />} />
          </Route>
          <Route path="/page/हाम्रो-टीम" element={<HamroTeam />} />
          <Route path="/page/हाम्राे-बारेमा" element={<HamroBare />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
