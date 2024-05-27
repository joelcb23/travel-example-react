import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full relative top-0 left-0">
      <div className="bg-white items-center justify-between px-7 py-4 text-2xl md:flex md:px-10 md:text-xl">
        <h4 className="font-bold cursor-pointer">
          <Link to="/">LOGO</Link>
        </h4>
        <div
          onClick={() => setOpen(!open)}
          className="text-gray-600 absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <FaWindowClose /> : <FaBars />}
        </div>
        <ul
          className={`bg-white text-gray-600 w-full absolute left-0 pl-7 pb-5 md:w-auto md:static md:pl-3 md:pb-0 md:flex md:items-center md:gap-x-4 lg:gap-x-10 ${
            open ? "top-19" : "top-[-490px]"
          }`}
        >
          <li className="cursor-pointer my-5">
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className="cursor-pointer my-5">
            <NavLink to="/about">Acerca de</NavLink>
          </li>
          <li className="cursor-pointer my-5">
            <NavLink to="/destinations">Destinos</NavLink>
          </li>
          <li className="cursor-pointer my-5">
            <NavLink to="/rooms">Habitaciones</NavLink>
          </li>
          <li className="cursor-pointer my-5">
            <NavLink to="/terms">Aviso legal</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
