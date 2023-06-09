import React, { useEffect, useState } from 'react';
import TrainList from '../components/TrainList';
import trainService from '../services/trainService';
import '../App.css';


const HomePage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const data = await trainService.getTrains();
      setTrains(data);
    };

    fetchTrains();
  }, []);

  return (
    <div className="home-page">
      <h1>Train Schedule App</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default HomePage;
