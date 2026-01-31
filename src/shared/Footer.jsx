import {
  FaArrowCircleRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

const navManu = [
  {
    id: 1,
    path: "#home",
    display: "Home",
  },
  {
    id: 2,
    path: "#flight",
    display: "Flight List",
  },
  {
    id: 3,
    path: "#about",
    display: "About Us",
  },
  {
    id: 4,
    path: "#contacts",
    display: "Contacts Us",
  },
];
const support = [
  {
    id: 1,
    display: "Support",
  },
  {
    id: 2,
    display: "Term of Services",
  },
  {
    id: 3,
    display: "Cookie Policy",
  },
  {
    id: 4,
    display: "Privacy Policy",
  },
];
const contactInfo = [
  {
    id: 1,
    display: "Hutchinson,KS 67502, United States",
  },
  {
    id: 2,
    display: "support@gmail.com",
  },
  {
    id: 3,
    display: "+1 620-662-0581",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 md:px-8 lg:px-20 2xl:px-37.5 py-7 md:py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-15">
      {/* Logo */}
      <div>
        <a
          className="flex items-center gap-2 pb-2 md:pb-3 lg:pb-4 2xl:pb-5"
          href="#"
        >
          <img src={logo} alt="logo" />
          <h4 className="text-[20px] font-medium">FlightFinder</h4>
        </a>
        <p className="text-justify text-[14px] md:text-[16px] text-[#757575] font-normal lg:font-medium ">
          We help travelers find the best flight options by comparing prices
          from trusted airlines worldwide. Our platform offers real-time
          availability,not the search.
        </p>
      </div>

      {/* Link */}
      <div>
        <h4 className="font-medium text-[18px] pb-2 md:pb-3 lg:pb-4 2xl:pb-5">
          Manu Links
        </h4>
        <ul className="flex flex-col gap-3">
          {navManu?.map((item) => (
            <li key={item?.id}>
              <a className="flex items-center gap-2" href={item?.path}>
                <FaArrowCircleRight />
                <span>{item?.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Link */}
      <div>
        <h4 className="font-medium text-[18px] pb-2 md:pb-3 lg:pb-4 2xl:pb-5">
          Support Links
        </h4>
        <ul className="flex flex-col gap-3">
          {support?.map((item) => (
            <li key={item?.id}>
              <a className="flex items-center gap-2" href="#">
                <FaArrowCircleRight />
                <span>{item?.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Link */}
      <div>
        <h4 className="font-medium text-[18px] pb-2 md:pb-3 lg:pb-4 2xl:pb-5">
          Contacts Info
        </h4>
        <ul className="flex flex-col gap-3">
          {contactInfo?.map((item) => (
            <li key={item?.id}>
              <a className="flex items-center gap-2" href="#">
                <FaArrowCircleRight />
                <span>{item?.display}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 pt-2 md:pt-3 lg:pt-4 2xl:pt-5">
          <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
            <FaFacebookF />
          </div>
          <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
            <FaLinkedinIn />
          </div>
          <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
            <FaWhatsapp />
          </div>
          <div className="h-10 md:h-11 lg:h-12.5 w-10 md:w-11 lg:w-12.5 flex items-center justify-center bg-[#1DC6CB] text-[#ffff] rounded-md text-[20px] hover:bg-[#FEBB76] duration-500">
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
