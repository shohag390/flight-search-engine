import { createContext, useState } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [filters, setFilters] = useState({
    maxPrice: 2000,
    stops: "any",
  });

  const filteredFlights = flights.filter((flight) => {
    const price = Number(flight.price.total);
    const stops = flight.itineraries[0].segments.length - 1;

    if (price > filters.maxPrice) return false;
    if (filters.stops !== "any" && stops !== Number(filters.stops))
      return false;

    return true;
  });

  return (
    <FlightContext.Provider
      value={{ flights, setFlights, filters, setFilters, filteredFlights }}
    >
      {children}
    </FlightContext.Provider>
  );
};
