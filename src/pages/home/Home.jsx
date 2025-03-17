import { useEffect } from "react";
import WelcomeSec from "./WelcomeSec";
import HomeBG from "../../assets/home/home_bg.jpeg";
import WhatWeOffer from "./offers/OfferList";
import WorkoutOptions from "./WorkoutOpt";

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
      <WelcomeSec customBG={customBG} id="home" />
      <WhatWeOffer />
      <WorkoutOptions />
    </main>
  );
};

export default Home;
