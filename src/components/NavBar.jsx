import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import images from "../assets/images";

function NavBar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <h4 className="font-bold cursor-pointer">
        <Link to="/" className="flex items-center">
          <img src={images.logo} alt="logo" className="w-8 md:w-12" />
          <p>TravelAgency</p>
        </Link>
      </h4>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="text-gray-600 cursor-pointer md:hidden"
      >
        {isOpen ? <FaWindowClose /> : <FaBars />}
      </button>
      <ul
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`bg-white text-gray-600 absolute right-0 left-0 flex flex-col gap-5 justify-between items-start transition-all duration-500 ease md:static md:flex-row md:items-center ${
          isOpen ? "top-16" : "top-[-1000%]"
        }`}
      >
        <li>
          <NavLink to="/" className={`p-5 hover:bg-gray-200`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/destinations" className={`p-5 hover:bg-gray-200`}>
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className={`p-5 hover:bg-gray-200`}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms" className={`p-5 hover:bg-gray-200`}>
            Legal Notice
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={`p-5 hover:bg-gray-200`}>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
