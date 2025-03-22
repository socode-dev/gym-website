import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Nav";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import Button from "./Button";

const Header = ({ menuOpen, setMenuOpen, DumbbellIcon }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const name = "XtremeFit";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white dark:bg-black flex py-2.5 justify-center items-center shadow-3xl transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <section
        id="desktopMenu"
        className="flex justify-between items-center w-full"
      >
        <Link
          to="/"
          className="inline-flex items-center text-red-600 font-bold font-raleway text-4xl md:text-5xl md:ml-5"
        >
          <img src={DumbbellIcon} alt="dumbbell icon" className="w-20 h-12" />
          {name}
        </Link>
        <nav
          className="hidden pr-2.5 laptop:flex gap-1 items-center font-montserrat"
          aria-label="big-scren-navigation"
        >
          <NavLinks flexDirection="flex-row" />
          <Button buttonText="Join Now" navigation="membership" />
        </nav>
        <div
          id="hamburger"
          className="laptop:hidden cursor-pointer mr-5"
          onClick={toggleMenu}
        >
          <MenuTwoToneIcon
            fontSize="large"
            className="text-black dark:text-white hover:opacity-70"
          />
        </div>
      </section>
      <nav
        id="mobileMenu"
        onClick={toggleMenu}
        aria-label="mobile-navigation"
        className={`w-full flex flex-col overflow-auto font-montserrat gap-8 fixed top-0 bottom-0 h-screen z-50 bg-inherit py-3 px-4 lg:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen
            ? "visible opacity-100 scale-100 translate-y-0"
            : "invisible opacity-0 scale-0 -translate-y-full"
        }`}
      >
        <CloseTwoToneIcon
          fontSize="large"
          className="text-black dark:text-white self-end cursor-pointer hover:opacity-70
        "
        />
        <NavLinks flexDirection="flex-col" />
        <hr className="w-full border-2  border-neutral-600 dark:border-neutral-500" />
        <Button
          buttonText="Join Now"
          buttonWidth="w-full"
          buttonAlign="self-center"
          navigation="membership"
        />
      </nav>
    </header>
  );
};

export default Header;
