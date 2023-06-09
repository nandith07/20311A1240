import React from 'react';

const TrainList = ({ trains }) => {
  // Sorting the trains based on price (ascending), tickets (descending), and departure time (descending)
  const sortedTrains = trains.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    if (a.tickets < b.tickets) return 1;
    if (a.tickets > b.tickets) return -1;
    if (a.departureTime > b.departureTime) return -1;
    if (a.departureTime < b.departureTime) return 1;
    return 0;
  });

  return (
    <div>
      <h2>Train Schedule</h2>
      {sortedTrains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>
          <p>Departure Time: {train.departureTime}</p>
          <p>Seats Available: {train.seats}</p>
          <p>Price: {train.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TrainList;
