import React from "react";

const LoginPage = () => (
  <div className="login-page">
    <form className="login-form">
      <label>Логин</label>
      <input type="text" placeholder="Введите логин" />
      <label>Пароль</label>
      <input type="password" placeholder="Введите пароль" />
      <button type="submit">Вход</button>
    </form>
  </div>
);

export default LoginPage;
