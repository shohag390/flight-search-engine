export const formatFlight = (flight) => {
  return {
    price: flight.price.total,
    segments: flight.itineraries[0].segments,
  };
};
