import { useEffect } from "react";
import WelcomeSec from "./components/WelcomeSec";
import HomeBG from "../../assets/home_PNGs/home_bg.jpeg";
import WhatWeOffer from "./components/Offer";
import Receptionist from "../../assets/home_PNGs/receptionist.jpeg";
import WorkoutOptions from "./components/WorkoutOpt";
import Strength from "../../assets/home_PNGs/strength.jpg";
import Cardio from "../../assets/home_PNGs/cardio.jpg";
import Yoga from "../../assets/home_PNGs/yoga.jpeg";

const Home = ({ homeBGImage, setHomeBGImage }) => {
  useEffect(() => {
    const img = new Image();
    img.src = HomeBG;

    img.onload = () => setHomeBGImage(img.src);
  }, []);

  const customBG = {
    backgroundImage: homeBGImage ? `url(${homeBGImage})` : "none",
  };

  return (
    <main className="flex flex-col w-full min-h-svh bg-inherit">
      <WelcomeSec customBG={customBG} />
      <WhatWeOffer Receptionist={Receptionist} />
      <WorkoutOptions Strength={Strength} Cardio={Cardio} Yoga={Yoga} />
    </main>
  );
};

export default Home;
