import Button from "../../../components/Button";
import offerData from "./offerData";
import Receptionist from "../../../assets/home/receptionist.jpeg";

const WhatWeOffer = () => {
  return (
    <section className="w-full tablet:h-[550px] flex px-0 my-7 space-y-10 flex-col tablet:flex-row bg-inherit text-black dark:text-white">
      <div className=" px-3 pt-5 tablet:w-1/2 mx-0 flex flex-col space-y-5">
        <h2 className="text-3xl font-bold font-raleway text-center">
          What We Offer
        </h2>
        <p className="text-base text-center font-montserrat">
          At <strong>XtremeFit</strong>, we don't just offer workouts-we deliver
          an <strong>experience that fuels your drive!</strong>{" "}
        </p>
        <ul className="my-5 space-y-2">
          {offerData.map((offer) => (
            <li key={offer.id} className="text-base font-montserrat">
              ✅ <strong>{offer.title}</strong> &mdash; {offer.content}
            </li>
          ))}
        </ul>
        <Button
          buttonText="Explore Our Services"
          buttonWidth="w-fit"
          navigation="services"
        />
      </div>

      <div className="w-full tablet:w-1/2 tablet:h-full tablet:rounded-l-3xl overflow-hidden shadow-3xl">
        <img
          src={Receptionist}
          alt="Receptionist Welcoming Members"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
