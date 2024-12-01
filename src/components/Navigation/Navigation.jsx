import React from "react";
import "./Navigation.css";

const Navigation = ({ onNavigate }) => (
  <nav className="navigation">
    <button onClick={() => onNavigate("/")}>Главная</button>
    <button onClick={() => onNavigate("/services")}>Услуги</button>
    <button onClick={() => onNavigate("/about")}>О нас</button>
    <button onClick={() => onNavigate("/contact")}>Контакты</button>
  </nav>
);

export default Navigation;
