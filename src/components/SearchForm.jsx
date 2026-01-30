import { useState } from "react";
import Filters from "./Filters";

const SearchForm = ({ onSearch }) => {
  const [form, setForm] = useState({
    originLocationCode: "",
    destinationLocationCode: "",
    departureDate: "",
    adults: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row justify-between items-center gap-5 w-full bg-gray-100 p-8 md:p-9 lg:p-10 rounded-md"
    >
      <input
        className="h-10 md:h-11 lg:h-12 w-full lg:w-[18%] rounded-md px-4 bg-white focus:outline-none"
        placeholder="From (e.g. DAC)"
        onChange={(e) =>
          setForm({
            ...form,
            originLocationCode: e.target.value.toUpperCase().trim(),
          })
        }
        required
      />
      <input
        className="h-10 md:h-11 lg:h-12 w-full lg:w-[18%] rounded-md px-4 bg-white focus:outline-none"
        placeholder="To (e.g. DXB)"
        onChange={(e) =>
          setForm({
            ...form,
            destinationLocationCode: e.target.value.toUpperCase().trim(),
          })
        }
        required
      />
      <input
        type="date"
        className="h-10 md:h-11 lg:h-12 w-full lg:w-[18%] rounded-md px-4 bg-white focus:outline-none cursor-pointer"
        onChange={(e) => setForm({ ...form, departureDate: e.target.value })}
        required
      />
      <Filters />
      <button
        type="submit"
        className="h-10 md:h-11 lg:h-12 w-full lg:w-[18%] bg-[#1DC6CB] text-[#ffff] hover:bg-[#FEBB76] duration-500 active:scale-1.2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
