import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ScrollToTop from "./ScrollToTop";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Services from "../pages/services/Services";
import Membership from "../pages/membership/Membership";
import Contact from "../pages/Contact";
import SignUp from "../pages/signup/Signup";
import Footer from "../components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeBGImage, setHomeBGImage] = useState("");

  return (
    <div className="min-h-screen flex flex-col w-full bg-black">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollToTop />
      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home homeBGImage={homeBGImage} setHomeBGImage={setHomeBGImage} />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="membership/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
