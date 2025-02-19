import React, { useState, useEffect } from "react";
import "./ListSeries.css";
import Detalles from "./Detalles";
import CustomNavbar from "./CustomNavbar";

const ListSeries = ({ series }) => {
    const [seriesList, setSeriesList] = useState(series);
    const [searchQuery, setSearchQuery] = useState(""); 
    const [selectedSerie, setSelectedSerie] = useState(null);

    useEffect(() => {
        console.log("Series iniciales:", series);
        setSeriesList(series);
    }, [series]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredSeries = seriesList.filter(serie =>
        serie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Búsqueda:", searchQuery);
    console.log("Series después del filtro:", filteredSeries);

    return (
        <>
            <CustomNavbar onSearch={handleSearch} />

            <div className="list-series-container">
                {filteredSeries.length > 0 ? (
                    filteredSeries.map((serie, index) => (
                        <div key={index} className="serie-card">
                            <img 
                                src={serie.image ? serie.image : "https://via.placeholder.com/300x450?text=Imagen+No+Disponible"} 
                                alt={serie.name} 
                                className="serie-image" 
                            />
                            <h3 className="serie-title">{serie.name}</h3>
                            <p className="serie-info"><strong>Año:</strong> {serie.releaseDate}</p>

                            {/* Botones */}
                            <div className="serie-buttons">
                                <button className="serie-button" onClick={() => setSelectedSerie(serie)}>
                                    Mostrar detalles
                                </button>
                                <button className="serie-button delete-button">Borrar</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-series">No hay series que coincidan con la búsqueda o los filtros seleccionados.</p>
                )}

               
                {selectedSerie && <Detalles serie={selectedSerie} onClose={() => setSelectedSerie(null)} />}
            </div>
        </>
    );
};

export default ListSeries;
