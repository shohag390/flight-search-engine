const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        {/* Brand */}
        <div>
          <h2 className="font-bold text-blue-600 mb-2">✈️ FlightFinder</h2>
          <p>A modern flight search engine built using Amadeus API.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li>Search Flights</li>
            <li>Price Trends</li>
            <li>Filters</li>
          </ul>
        </div>

        {/* Credits */}
        <div>
          <h3 className="font-semibold mb-2">Developer</h3>
          <p>
            Built by <strong>Shohag</strong>
          </p>
          <p>React • Vite • Tailwind • Amadeus API</p>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} FlightFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
