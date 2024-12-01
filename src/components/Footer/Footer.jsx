import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  
    return (
    <footer className="footer">
      <button onClick={() => navigate("/")}>Главная страница</button>
      <button onClick={() => navigate("/services")}>Услуги компании</button>
      <p>© 2024 Моя компания</p>
    </footer>
  );
};
export default Footer;
