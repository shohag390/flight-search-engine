import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Logo */}
      <a className="flex items-center gap-2" href="#">
        <img src={logo} alt="logo" />
        <h4 className="text-[20px] font-medium">FlightFinder</h4>
      </a>
    </footer>
  );
};

export default Footer;
