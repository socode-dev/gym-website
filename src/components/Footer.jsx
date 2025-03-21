import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ DumbbellIcon, LocationOnIcon, PhoneIcon, EmailIcon }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full h-auto text-black dark:text-white border-t-4 border-solid bg-neutral-100 border-neutral-200
    shadow-xl shadow-neutral-100 dark:bg-neutral-800 dark:border-t-neutral-700 "
    >
      <div className="p-4 lg:flex ">
        <div className="flex flex-col gap-y-4 w-fit ">
          <h2 className="flex items-center text-4xl text-red-600 font-extrabold font-raleway">
            <img src={DumbbellIcon} alt="dumbbell icon" className="w-16 h-10" />
            XtremeFit
          </h2>
          <p className="text-base font-montserrat">
            Your journey to fitness starts here!
          </p>
        </div>

        <div className="px-5 py-5 w-full h-auto grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center gap-y-4 pt-4 w-fit">
            <h3 className="text-2xl font-semibold font-raleway">Quick Links</h3>

            <ul className="flex flex-col gap-y-1">
              <li className="text-base dark:text-gray-400 font-montserrat cursor-pointer hover:underline transition-all duration-400">
                <Link to="/">Home</Link>
              </li>
              <li className="text-base dark:text-gray-400 font-montserrat cursor-pointer hover:underline transition-all duration-400">
                <Link to="about">About</Link>
              </li>
              <li className="text-base dark:text-gray-400 font-montserrat cursor-pointer hover:underline transition-all duration-400">
                <Link to="services">Services</Link>
              </li>
              <li className="text-base dark:text-gray-400 font-montserrat cursor-pointer hover:underline transition-all duration-400">
                <Link to="membership">Membership</Link>
              </li>
              <li className="text-base dark:text-gray-400 font-montserrat cursor-pointer hover:underline transition-all duration-400">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-4 pt-4 w-fit">
            <h3 className="text-2xl font-semibold font-raleway">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full shadow-xl"
              >
                <FaInstagram className="text-xl text-white" />
              </a>
              <a
                href="#"
                className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full shadow-xl"
              >
                <FaTwitter className="text-xl text-white" />
              </a>
              <a
                href="#"
                className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full shadow-xl"
              >
                <FaFacebook className="text-xl text-white" />
              </a>
              <a
                href="#"
                className="cursor-pointer hover:scale-50 hover:rotate-180 transition-transform duration-300 bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full shadow-xl"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 pt-4 w-fit">
            <h3 className="text-2xl font-semibold font-raleway">Contact Us</h3>
            <div className="text-base font-montserrat">
              <p>
                <strong>
                  <PhoneIcon className="text-red-600 text-xl mr-2" /> Phone:
                </strong>{" "}
                +123 456 7890
              </p>
              <p>
                <strong>
                  <EmailIcon className="text-red-600 text-xl mr-2" /> Email:
                </strong>{" "}
                contact@xtremefit.com
              </p>
              <p>
                <strong>
                  <LocationOnIcon className="text-red-600 text-xl mr-2" />{" "}
                  Location:
                </strong>{" "}
                123 Fitness, New York City, New York, United States.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-200 dark:bg-black pt-5 pb-16 px-3">
        <p className="text-base text-center italic font-montserrat">
          &copy; {year} XtremeFit. All Rights Reserved. By{" "}
          <a
            target="_blank"
            href="https://github.com/Sammytee98?tab=repositories"
            className="text-red-600 font-bold not-italic"
          >
            Big Sam.
          </a>
        </p>
        <div className="flex justify-center mt-1 gap-x-4">
          <p className="text-sm font-montserrat flex items-center gap-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span>{" "}
            Privacy Policy
          </p>
          <p className="text-sm font-montserrat flex items-center gap-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span> Terms
            & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
