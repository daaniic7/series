import React from 'react';
import './Plataformas.css';

const Plataformas = () => {
  const plataformas = ["Netflix", "Amazon Prime", "Hulu", "Disney+", "HBO Max"];

  return (
    <div className="plataformas">
      <h1>Plataformas</h1>
      <ul>
        {plataformas.map((plataforma, index) => (
          <li key={index}>{plataforma}</li>
        ))}
      </ul>
    </div>
  );
};

export default Plataformas;