import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage/ServiceDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DefaultLayout from "./layouts/default/DefaultLayout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Сохранение данных пользователя
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null); // Очистка данных пользователя
  };

  return (
    <Router>
      <DefaultLayout
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        user={user} // Передача данных пользователя в Header
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/services"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ServicesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/services/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <ServiceDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <UserProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onLogin={(userData) => handleLogin(userData)}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;