import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // Если нужна дополнительная стилизация

const Navigation = () => (
  <nav className="navigation">
    <NavLink 
      to="/" 
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      Главная страница
    </NavLink>
    <NavLink 
      to="/services" 
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      Услуги компании
    </NavLink>
    <NavLink 
      to="/login" 
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      Вход
    </NavLink>
  </nav>
);

export default Navigation;
