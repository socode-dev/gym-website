import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Services from "../pages/services/Services";
import Membership from "../pages/Membership";
import Trainers from "../pages/Trainers";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeBGImage, setHomeBGImage] = useState("");

  return (
    <div className="min-h-svh w-full bg-black">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
          <Route path="trainers" element={<Trainers />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
