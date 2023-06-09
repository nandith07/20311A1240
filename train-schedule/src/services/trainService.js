const trainService = {
    getTrains: () => {
      // Simulating API call to retrieve train schedule data
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: 'Express Train',
              departureTime: '10:00 AM',
              seats: 50,
              price: '500',
            },
            {
              id: 2,
              name: 'Superfast Train',
              departureTime: '11:30 AM',
              seats: 30,
              price: '750',
              delay: '10 minutes',
            },
            {
              id: 3,
              name: 'Local Train',
              departureTime: '09:45 AM',
              seats: 100,
              price: '300',
            },
          ]);
        }, 1000);
      });
    },
  
    getTrainDetails: (id) => {
      // Simulating API call to retrieve train details by ID
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: id,
            name: 'Express Train',
            departureTime: '10:00 AM',
            seats: 50,
            price: '600',
          });
        }, 1000);
      });
    },
  };
  
  export default trainService;
  