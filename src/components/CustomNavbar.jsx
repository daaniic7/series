import { useState } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const CustomNavbar = ({ onSearch }) => {
    const [showCategorias, setShowCategorias] = useState(false);
    const [showPlataformas, setShowPlataformas] = useState(false);

    const toggleCategorias = () => setShowCategorias(!showCategorias);
    const togglePlataformas = () => setShowPlataformas(!showPlataformas);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <SearchBar onSearch={onSearch} />
                    <div className="navbar-buttons">
                        <button className="navbar-button" onClick={toggleCategorias}>Categorías</button>
                        <button className="navbar-button" onClick={togglePlataformas}>Plataformas</button>
                    </div>
                </div>
            </nav>

            
            <div className="dropdown-container">
                {showCategorias && (
                    <div className="dropdown">
                        <label><input type="checkbox" /> Acción</label>
                        <label><input type="checkbox" /> Drama</label>
                        <label><input type="checkbox" /> Comedia</label>
                    </div>
                )}

                {showPlataformas && (
                    <div className="dropdown">
                        <label><input type="checkbox" /> Netflix</label>
                        <label><input type="checkbox" /> HBO Max</label>
                        <label><input type="checkbox" /> Amazon Prime</label>
                    </div>
                )}
            </div>
        </>
    );
};

export default CustomNavbar;
