import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Страница не найдена</h1>
      <p>Похоже, вы зашли не туда.</p>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
};

export default NotFoundPage;
