import React from "react";
import "./ServicesPage.css";
import { useNavigate } from "react-router-dom";

const services = [
  { id: 1, name: "Услуга 1", description: "Описание услуги 1" },
  { id: 2, name: "Услуга 2", description: "Описание услуги 2" },
  { id: 3, name: "Услуга 3", description: "Описание услуги 3" },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h1>Услуги компании</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(`/services/${service.id}`)}
          >
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
