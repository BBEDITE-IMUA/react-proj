// import React, { useState } from "react";
// import "./LoginPage.css";
// import { useNavigate } from "react-router-dom";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       id: 1,
//       firstName: "Иван",
//     };
//     onLogin(userData);
//     navigate("/");
//   };
  

//   return (
//     <div className="login-page">
//       <h1>Вход</h1>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label>
//           Логин:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <button type="submit">Войти</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, firstName: "Иван", email: "ivan@example.com", password: "ivan123" },
  { id: 2, firstName: "Анна", email: "anna@example.com", password: "anna123" },
  { id: 3, firstName: "Пётр", email: "petr@example.com", password: "petr123" },
];

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Неверный email или пароль");
      return;
    }

    onLogin(user);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email"
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
