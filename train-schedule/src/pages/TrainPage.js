import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from '../components/TrainDetails';
import trainService from '../services/trainService';

const TrainPage = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      const data = await trainService.getTrainDetails(id);
      setTrain(data);
    };

    fetchTrainDetails();
  }, [id]);

  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Train Details Page</h1>
      {train ? <TrainDetails train={train} /> : <p>Loading train details...</p>}
    </div>
  );
};

export default TrainPage;
