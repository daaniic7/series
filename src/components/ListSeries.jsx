import React from 'react';

const ListSeries = ({ series }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {
                series.map((serie, index) => (
                    <div key={index} style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "15px",
                        margin: "10px",
                        maxWidth: "400px",
                        textAlign: "center",
                        background: "#fff",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                    }}>
                        <img src={serie.image} alt={serie.name} style={{ width: "100%", borderRadius: "10px" }} />
                        <h3>{serie.name}</h3>
                        <p><strong>Año:</strong> {serie.releaseDate}</p>
                        <p><strong>Descripción:</strong> {serie.description}</p>
                        <iframe 
                            width="100%" 
                            height="200" 
                            src={serie.video} 
                            title={serie.name} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                ))
            }
        </div>
    );
}

export default ListSeries;
