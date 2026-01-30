const FlightCard = ({ flight }) => {
  const segments = flight.itineraries[0].segments;

  return (
    <div className="border rounded p-4 shadow-sm">
      <p className="font-semibold">Price: ${flight.price.total}</p>
      <p>Stops: {segments.length - 1}</p>
      <p>
        Route: {segments[0].departure.iataCode} →{" "}
        {segments[segments.length - 1].arrival.iataCode}
      </p>
    </div>
  );
};

export default FlightCard;
