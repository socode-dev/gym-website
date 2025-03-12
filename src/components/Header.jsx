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
    <header className="w-full bg-inherit flex p-2.5 justify-center items-center font- dark:bg-white border-b-2 border-solid border-b-neutral-950 shadow-neutral-950">
      <section
        id="desktopMenu"
        className="flex justify-between items-center w-full px-2.5"
      >
        <Link
          to="/"
          className="text-red-700 font-bold font-[Raleway] text-4xl ml-2.5 md:text-5xl md:ml-5"
        >
          {name}
        </Link>
        <nav
          className="hidden pr-2.5  lg:flex gap-3 items-center font-[Montserrat]"
          aria-label="big-screen"
        >
          <NavLinks flexDirection="flex-row" />
          <Button buttonText="Join Now" navigation="membership" />
        </nav>
        <div
          id="hamburger"
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuTwoToneIcon className="text-white dark:text-black hover:opacity-80" />
        </div>
      </section>
      <nav
        id="mobileMenu"
        onClick={toggleMenu}
        aria-label="mobile-screen"
        className={`w-full flex flex-col font-[Montserrat] gap-5 absolute top-0 h-screen z-50 bg-inherit py-4 px-4 lg:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen
            ? "visible opacity-100 scale-100 translate-y-0"
            : "invisible opacity-0 scale-0 -translate-y-full"
        }`}
      >
        <CloseTwoToneIcon
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
