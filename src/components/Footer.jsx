import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-auto py-4 bg-inherit border-t-2 border-solid border-t-neutral-950 shadow-neutral-950">
      <div className="px-5 py-5 w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4 w-fit">
          <h2 className="text-4xl text-red-700 font-bold font-[Raleway]">
            XtremeFit
          </h2>
          <p className="text-sm text-gray-400 font-[Montserrat]">
            Your journey to fitness starts here!
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-[Raleway]">Quick Links</h3>

          <ul className="flex flex-col gap-y-1">
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-white transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-white transition duration-300">
              <Link to="about">About</Link>
            </li>
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-white transition duration-300">
              <Link to="services">Services</Link>
            </li>
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-white transition duration-300">
              <Link to="membership">Membership</Link>
            </li>
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-gray-200 transition duration-300">
              <Link to="trainers">Trainers</Link>
            </li>
            <li className="text-sm text-gray-400 font-[Montserrat] cursor-pointer hover:text-gray-200 transition duration-300">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-[Raleway]">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-200"
            >
              <FaInstagram className="text-red-600 text-3xl " />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-200"
            >
              <FaTwitter className="text-blue-600 text-3xl" />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-200"
            >
              <FaFacebook className="text-blue-800 text-3xl" />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-200"
            >
              <FaLinkedin className="text-blue-800 text-3xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-[Raleway]">Contact Us</h3>
          <p className="text-sm text-gray-400 font-[Montserrat]">
            123 Fitness, New York City, <br />
            New York, United States.
          </p>
        </div>
      </div>
      <div className="pr-3">
        <p className="text-sm text-end text-gray-400 font-[Montserrat]">
          &copy; {year} XtremeFit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
