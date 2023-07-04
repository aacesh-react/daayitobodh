import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Caraousel from "./components/shared/Caraousel";
import Pagination from "./components/shared/Paginaton";
import CategoryPage from "./pages/CategoryPage";
import DashboardPage from "./pages/DashboardPage";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import Profile from "./pages/Profile";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/user/:id" element={<Profile />} />
          <Route path="/news/:category" element={<CategoryPage />} />
          <Route path="/news/:category/:newsId" element={<NewsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
