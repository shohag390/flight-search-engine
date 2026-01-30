const FlightCard = ({ flight }) => {
  const segments = flight.itineraries[0].segments;
  const airline = segments[0].carrierCode;
  const duration = flight.itineraries[0].duration;

  return (
    <div className="rounded-md p-4 border border-gray-100 transition bg-white h-full cursor-pointer">
      {/* Airline */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src={`https://pics.avs.io/80/40/${airline}.png`}
          alt={airline}
          className="h-6"
        />
        <span className="font-semibold">{airline}</span>
      </div>

      {/* Route */}
      <p className="text-sm text-gray-600">
        {segments[0].departure.iataCode} →{" "}
        {segments[segments.length - 1].arrival.iataCode}
      </p>

      {/* Info */}
      <p className="text-sm">Stops: {segments.length - 1}</p>
      <p className="text-sm">Duration: {duration}</p>

      {/* Price */}
      <p className="mt-3 text-lg font-bold text-[#1DC6CB]">
        ${flight.price.total}
      </p>

      {/* Action */}
      <button className="mt-3 w-full bg-gray-100 text-[#000000] hover:text-[#ffff] duration-500 py-2 rounded-md hover:bg-[#FEBB76]">
        View Details
      </button>
    </div>
  );
};

export default FlightCard;
