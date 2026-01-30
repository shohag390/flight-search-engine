import { useContext } from "react";
import { FlightContext } from "../context/FlightContext";

const Filters = () => {
  const { filters, setFilters } = useContext(FlightContext);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full lg:w-[28%]">
      <div className="flex flex-col justify-between w-full lg:w-[50%]">
        <label>Max Price: ${filters.maxPrice}</label>
        <input
          type="range"
          min="100"
          max="5000"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="cursor-pointer"
        />
      </div>

      <div className="w-full lg:w-[50%]">
        <div className="relative">
          <select
            value={filters.stops}
            onChange={(e) => setFilters({ ...filters, stops: e.target.value })}
            className="h-10 md:h-11 lg:h-12 w-full appearance-none rounded-full px-4 pr-10 bg-white
                 focus:outline-none cursor-pointer"
          >
            <option value="any">Any</option>
            <option value="0">Non-stop</option>
            <option value="1">1 Stop</option>
          </select>

          {/* Arrow */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
