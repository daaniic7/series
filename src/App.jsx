import React, { useState, useEffect } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import './components/Navbar.css';
import ListSeries from './components/ListSeries';

function App() {
  const [series, setSeries] = useState([]); 

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch('http://localhost:3000/series');
        const allSeries = await response.json();
        setSeries(allSeries); 
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchSeries(); 
  }, []); 

  return (
    <>
      <CustomNavbar />
      <ListSeries series={series} />
    </>
  );
}

export default App;
