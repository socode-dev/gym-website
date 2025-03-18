import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full h-auto bg-neutral-950 border-t-2 border-solid border-t-neutral-950 shadow-neutral-950">
      <div className="px-5 py-5 w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex flex-col gap-y-4 w-fit">
          <h2 className="text-4xl text-red-600 font-bold font-raleway">
            XtremeFit
          </h2>
          <p className="text-base text-gray-400 font-montserrat">
            Your journey to fitness starts here!
          </p>
        </div>

        <div className="flex flex-col items-center gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-raleway">Quick Links</h3>

          <ul className="flex flex-col gap-y-1">
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-white transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-white transition duration-300">
              <Link to="about">About</Link>
            </li>
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-white transition duration-300">
              <Link to="services">Services</Link>
            </li>
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-white transition duration-300">
              <Link to="membership">Membership</Link>
            </li>
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-gray-200 transition duration-300">
              <Link to="trainers">Trainers</Link>
            </li>
            <li className="text-base text-gray-400 font-montserrat cursor-pointer hover:text-gray-200 transition duration-300">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-raleway">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-600 p-2 rounded-full shadow-xl"
            >
              <FaInstagram className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-600 p-2 rounded-full shadow-xl"
            >
              <FaTwitter className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-600 p-2 rounded-full shadow-xl"
            >
              <FaFacebook className="text-xl text-white" />
            </a>
            <a
              href="#"
              className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-600 p-2 rounded-full shadow-xl"
            >
              <FaLinkedin className="text-xl text-white" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 pt-4 w-fit">
          <h3 className="text-2xl text-white font-raleway">Contact Us</h3>
          <p className="text-base text-gray-400 font-montserrat">
            123 Fitness, New York City, <br />
            New York, United States.
          </p>
        </div>
      </div>
      <div className="w-full bg-black ">
        <p className="text-base text-gray-300 text-center italic font-montserrat">
          &copy; {year} XtremeFit. All Rights Reserved. By{" "}
          <a
            href="https://github.com/Sammytee98?tab=repositories"
            className="text-red-600 font-bold not-italic underline decoration-2"
          >
            BigSam.
          </a>
        </p>
        <div className="flex justify-center mt-1 gap-x-4">
          <p className="text-sm font-montserrat text-white flex items-center gap-x-2">
            <span className="h-2 w-2 rounded-full bg-red-600"></span> Privacy
            Policy
          </p>
          <p className="text-sm font-montserrat text-white flex items-center gap-x-2">
            <span className="h-2 w-2 rounded-full bg-red-600"></span> Terms &
            Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
