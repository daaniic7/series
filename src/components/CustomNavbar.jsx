import React from 'react';
import './Navbar.css';

const CustomNavbar = ({ handleMostrarCategorias, handleMostrarPlataformas, busqueda, setBusqueda }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-search-container">
          <input 
            type="text" 
            placeholder="Buscar series..." 
            value={busqueda} 
            onChange={(e) => setBusqueda(e.target.value)} 
            className="navbar-search"
          />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={handleMostrarCategorias}>Categorías</button>
          <button className="navbar-button" onClick={handleMostrarPlataformas}>Plataformas</button>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
