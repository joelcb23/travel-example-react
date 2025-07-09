import { NavLink } from "react-router-dom";

function ContactInfo() {
  return (
    <div className="bg-[#ed5c3f] text-white text-center mt-32 p-10 flex flex-col gap-y-5 lg:pt-20">
      <h4>TravelAgency</h4>
      <ul className="hidden md:flex md:flex-row md:gap-x-8 md:justify-center cursor-pointer">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/destinations">Destinations</NavLink>
        </li>
        <li>
          <NavLink to="/rooms">Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/terms">Legal Notice</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
      </ul>
      <h4>Copyright. All rights reserved.</h4>
      <a href="" className="underline">
        Privacy Policy
      </a>
    </div>
  );
}

export default ContactInfo;
