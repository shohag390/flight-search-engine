import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 md:px-8 lg:px-20 2xl:px-37.5 py-7 md:py-8 lg:py-10">
      {/* Logo */}
      <a className="flex items-center gap-2" href="#">
        <img src={logo} alt="logo" />
        <h4 className="text-[20px] font-medium">FlightFinder</h4>
      </a>
    </footer>
  );
};

export default Footer;
