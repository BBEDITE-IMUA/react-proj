import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfilePage.css";

const UserProfilePage = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных пользователя");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <div className="user-profile">
      <h1>Профиль пользователя</h1>
      <div className="profile-card">
        <img
          src={user.image || "https://via.placeholder.com/150"}
          alt="Аватар пользователя"
          className="profile-avatar"
        />
        <div className="profile-info">
          <p><strong>Имя:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Возраст:</strong> {user.age}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
