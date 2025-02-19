import React from "react";
import "./Detalles.css";

const Detalles = ({ serie, onClose }) => {
  if (!serie) return null; 

  return (
    <div className="detalles-overlay">
      <div className="detalles-container">
        <button className="detalles-close" onClick={onClose}>✖</button>
        <h2 className="detalles-title">{serie.name}</h2>
        <img src={serie.image} alt={serie.name} className="detalles-image" />
        <p><strong>Año:</strong> {serie.releaseDate}</p>
        <p><strong>Descripción:</strong> {serie.description}</p>
        <a 
          href={serie.video} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="detalles-link"
        > Ver
        </a>
        <button className="detalles-volver" onClick={onClose}>Volver</button>
      </div>
    </div>
  );
};

export default Detalles;
