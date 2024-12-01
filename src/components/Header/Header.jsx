import "./Header.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <nav className="navigation">
        <div className="nav-left">
          <button
            className={isActive("/") ? "active" : ""}
            onClick={() => navigate("/")}
          >
            Главная страница
          </button>
          {isAuthenticated && (
            <button
              className={isActive("/services") ? "active" : ""}
              onClick={() => navigate("/services")}
            >
              Услуги компании
            </button>
          )}
        </div>
        <div className="nav-right">
          {!isAuthenticated ? (
            <button onClick={() => navigate("/login")}>Вход</button>
          ) : (
            <>
              <span
                className="user-info"
                onClick={() => navigate(`/user/${user.id}`)}
                style={{ cursor: "pointer" }}
              >
                Привет, {user.firstName}!
              </span>
              <button onClick={onLogout}>Выйти</button>
            </>
          )} 
        </div>
      </nav>
    </header>
  );
};

export default Header;
