import React from 'react';
import './Categorias.css';

const Categorias = () => {
  const categorias = ["Drama", "Comedia", "Acción", "Ciencia Ficción", "Documental"];

  return (
    <div className="categorias">
      <h1>Categorias</h1>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;