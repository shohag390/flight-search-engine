import { useContext } from "react";
import { FlightContext } from "../context/FlightContext";

const Filters = () => {
  const { filters, setFilters } = useContext(FlightContext);

  return (
    <div className="space-y-4">
      <div>
        <label>Max Price: ${filters.maxPrice}</label>
        <input
          type="range"
          min="100"
          max="5000"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label>Stops</label>
        <select
          className="border p-2 w-full"
          value={filters.stops}
          onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
        >
          <option value="any">Any</option>
          <option value="0">Non-stop</option>
          <option value="1">1 Stop</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
