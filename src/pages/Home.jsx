import { useContext, useState } from "react";
import { searchFlights } from "../api/amadeus";
import { FlightContext } from "../context/FlightContext";
import SearchForm from "../components/SearchForm";
import Filters from "../components/Filters";
import FlightCard from "../components/FlightCard";
import PriceChart from "../components/PriceChart";
import Loader from "../components/Loader";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import About from "../components/About";
import Contacts from "../components/Contacts";

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
    <div className="">
      {/* Hero Secdtion */}
      <Hero />
      {/* Filter & Search */}
      <div
        id=""
        className="px-4 md:px-8 lg:px-20 2xl:px-37.5 flex items-center justify-center py-10 md:py-15 lg:py-20"
      >
        <SearchForm onSearch={handleSearch} />
      </div>

      {/* Flight List */}
      <div
        id="flight"
        className="px-4 md:px-8 lg:px-20 2xl:px-37.5 flex flex-col lg:flex-row justify-between gap-5 pb-10 md:pb-15 lg:pb-20"
      >
        <div className="w-full lg:w-[60%]">
          {loading && <Loader />}

          {!loading && !searched && (
            <div className="text-gray-500">Waiting For Search...</div>
          )}

          {!loading && searched && filteredFlights.length === 0 && (
            <div className="text-red-500">We cannot get any flight!</div>
          )}

          {!loading && filteredFlights.length > 0 && (
            <Swiper
              modules={[]}
              navigation
              spaceBetween={16}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredFlights.map((flight, i) => (
                <SwiperSlide key={i}>
                  <FlightCard flight={flight} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        {/* PriceChart Section */}
        <div className="lg:w-[40%] w-full">
          {filteredFlights.length > 0 && (
            <PriceChart flights={filteredFlights} />
          )}
        </div>
      </div>
      {/* About Us */}
      <About />
      {/* Contacts Us */}
      <Contacts />
    </div>
  );
};

export default Home;
