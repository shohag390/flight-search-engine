import { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

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
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] px-4 md:px-8 lg:px-20 2xl:px-37.5 flex items-center justify-between bg-gray-100 sticky top-0 left-0 z-50 shadow">
      {/* Logo */}
      <a className="flex items-center gap-2" href="#">
        <img src={logo} alt="logo" />
        <h4 className="text-[20px] font-medium">FlightFinder</h4>
      </a>
      {/* Large Screen  */}
      <ul className="lg:flex lg:items-center lg:gap-5 hidden font-medium">
        {navManu?.map((navList, index) => (
          <li
            key={navList?.id}
            className={
              index === navManu.length - 1
                ? "bg-[#1DC6CB] text-[#ffff] hover:bg-[#FEBB76] duration-500 active:scale-1.2 px-9 py-3 rounded-full"
                : ""
            }
          >
            <a onClick={() => setOpen(!open)} href={navList?.path}>
              {navList?.display}
            </a>
          </li>
        ))}
      </ul>
      {/* Small Screen  */}
      <ul
        className={`h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full bg-[#ffff] flex flex-col items-center justify-center gap-5 lg:hidden font-medium absolute duration-500 top-[8vh] md:top-[9vh] lg:top-[10vh] 2xl:top-[11vh] ${!open ? "-left-full" : "left-0"}`}
      >
        {navManu?.map((navList, index) => (
          <li key={navList?.id}>
            <a
              className="hover:text-[#FEBB76] duration-500"
              onClick={() => setOpen(!open)}
              href={navList?.path}
            >
              {navList?.display}
            </a>
          </li>
        ))}
      </ul>
      {/* Manu Bar */}
      <button className="text-[30px] lg:hidden" onClick={() => setOpen(!open)}>
        {!open ? <IoMenu /> : <IoIosClose />}
      </button>
    </nav>
  );
};

export default Navbar;
