import { Link } from "react-router-dom";
import NavLinks from "./Nav";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Button from "./Button";

const Header = ({ menuOpen, setMenuOpen }) => {
  const name = "XtremeFit";

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="w-full bg-inherit flex p-2.5 justify-center items-center font- dark:bg-white border-b-4 border-solid border-b-neutral-900 shadow-neutral-900">
      <section
        id="desktopMenu"
        className="flex justify-between items-center w-full px-2.5"
      >
        <Link
          to="/"
          className="text-red-600 font-bold font-raleway text-4xl md:text-5xl md:ml-5"
        >
          {name}
        </Link>
        <nav
          className="hidden pr-2.5 lg:flex gap-3 items-center font-montserrat"
          aria-label="big-scren-navigation"
        >
          <NavLinks flexDirection="flex-row" />
          <Button buttonText="Join Now" navigation="membership" />
        </nav>
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuTwoToneIcon
            fontSize="large"
            className="text-white dark:text-black hover:opacity-80"
          />
        </div>
      </section>
      <nav
        id="mobileMenu"
        onClick={toggleMenu}
        aria-label="mobile-navigation"
        className={`w-full flex flex-col font-montserrat gap-8 absolute top-0 h-screen z-50 bg-inherit py-4 px-4 lg:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen
            ? "visible opacity-100 scale-100 translate-y-0"
            : "invisible opacity-0 scale-0 -translate-y-full"
        }`}
      >
        <CloseTwoToneIcon
          fontSize="large"
          className="text-white dark:text-black self-end cursor-pointer hover:opacity-70
        "
        />
        <NavLinks flexDirection="flex-col" />
        <hr className="w-full text-gray-400" />
        <Button
          buttonText="Join Now"
          buttonWidth="w-3xs"
          buttonAlign="self-center"
          navigation="membership"
        />
      </nav>
    </header>
  );
};

export default Header;
