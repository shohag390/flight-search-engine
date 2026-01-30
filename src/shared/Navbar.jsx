const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">✈️ FlightFinder</h1>

        {/* Links */}
        <div className="space-x-6 hidden md:block">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Search
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Deals
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About
          </a>
        </div>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
