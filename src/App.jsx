import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./pages/Authorization/Login/Login";
import Register from "./pages/Authorization/Register/Register";
import ForgotPassword from "./pages/Authorization/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/Authorization/ResetPassword/ResetPassword";
import { Toaster } from "react-hot-toast";
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userExists } from "./redux/reducer/authReducer";
import ProtectedRoute from "./utils/protectedRoute/ProtectedRoute";
import Profile from "./pages/Authorization/Profile/Profile";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/profile",
          { withCredentials: true }
        );
        dispatch(userExists(response.data.user));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  const { isAdmin, user } = useSelector((state) => state.auth);

  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route
              path="/login"
              element={
                <ProtectedRoute user={!user} redirect="/">
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute user={!user} redirect="/">
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user} redirect="/login">
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
};

export default App;
