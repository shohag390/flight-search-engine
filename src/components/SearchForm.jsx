import { useState } from "react";

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
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        className="border p-2 rounded"
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
        className="border p-2 rounded"
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
        className="border p-2 rounded"
        onChange={(e) => setForm({ ...form, departureDate: e.target.value })}
        required
      />
      <button className="bg-blue-600 text-white rounded p-2">Search</button>
    </form>
  );
};

export default SearchForm;
