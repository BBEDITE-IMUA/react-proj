import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="navigation">
        <button onClick={() => navigate("/")}>Главная страница</button>
        <button onClick={() => navigate("/services")}>Услуги компании</button>
        <button onClick={() => navigate("/login")}>Вход</button>
      </nav>
    </header>
  );
};

export default Header;
