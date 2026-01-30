import { useContext, useState } from "react";
import { searchFlights } from "../api/amadeus";
import { FlightContext } from "../context/FlightContext";
import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import FlightCard from "../components/FlightCard";
import PriceChart from "../components/PriceChart";
import Loader from "../components/Loader";

const Home = () => {
  const { filteredFlights, setFlights } = useContext(FlightContext);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // track if search happened

  const handleSearch = async (params) => {
    setLoading(true);
    setSearched(true); // mark search started
    const data = await searchFlights(params);
    setFlights(data.data || []);
    setLoading(false);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-4">
        <SearchForm onSearch={handleSearch} />
      </div>

      <div>
        <Filters />
      </div>

      <div className="md:col-span-2 space-y-4">
        {loading && <Loader />}

        {!loading && !searched && (
          <div className="text-center text-gray-500 py-6 font-semibold">
            Search for flight!
          </div>
        )}

        {!loading && searched && filteredFlights.length === 0 && (
          <div className="text-center text-gray-500 py-6 font-semibold">
            We cannot get any flight!
          </div>
        )}

        {!loading &&
          filteredFlights.length > 0 &&
          filteredFlights.map((flight, i) => (
            <FlightCard key={i} flight={flight} />
          ))}
      </div>

      <div>
        {filteredFlights.length > 0 && <PriceChart flights={filteredFlights} />}
      </div>
    </div>
  );
};

export default Home;
