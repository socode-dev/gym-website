import { NavLink } from "react-router-dom";

const NavLinks = ({ flexDirection }) => {
  return (
    <ul className={`flex ${flexDirection}`}>
      <li className="text-base lg:text-sm text-white dark:text-black w-fit py-2.5 px-4 rounded-4xl transition duration-300 hover:bg-red-700">
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li className="text-base lg:text-sm text-white dark:text-black w-fit py-2.5 px-4 rounded-4xl transition duration-300 hover:bg-red-700">
        <NavLink to="about">About</NavLink>{" "}
      </li>
      <li className="text-base lg:text-sm text-white dark:text-black w-fit py-2.5 px-4 rounded-4xl transition duration-300 hover:bg-red-700">
        <NavLink to="services">Services</NavLink>{" "}
      </li>
      <li className="text-base lg:text-sm text-white dark:text-black w-fit py-2.5 px-4 rounded-4xl transition duration-300 hover:bg-red-700">
        <NavLink to="membership">Membership</NavLink>{" "}
      </li>
      <li className="text-base lg:text-sm text-white dark:text-black w-fit py-2.5 px-4 rounded-4xl transition duration-300 hover:bg-red-700">
        <NavLink to="contact">Contact</NavLink>{" "}
      </li>
    </ul>
  );
};

export default NavLinks;
