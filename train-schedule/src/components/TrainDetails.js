import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seats Available: {train.seats}</p>
      <p>Price: {train.price}</p>
      {train.delay && <p>Delay: {train.delay}</p>}
    </div>
  );
};

export default TrainDetails;
