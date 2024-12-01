import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetailsPage.css";

const serviceData = {
  1: { name: "Услуга 1", description: "Подробное описание услуги 1" },
  2: { name: "Услуга 2", description: "Подробное описание услуги 2" },
  3: { name: "Услуга 3", description: "Подробное описание услуги 3" },
};

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="service-details">
        <p className="error-message">Услуга не найдена</p>
      </div>
    );
  }

  return (
    <div className="service-details">
      <h2 className="service-title">{service.name}</h2>
      <p className="service-description">{service.description}</p>
    </div>
  );
};

export default ServiceDetailsPage;
