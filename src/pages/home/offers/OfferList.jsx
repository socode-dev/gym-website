import Button from "../../../components/Button";
import offerData from "./offerData";
import Receptionist from "../../../assets/home/receptionist.jpeg";

const WhatWeOffer = () => {
  return (
    <section className="flex px-0 my-7 space-y-10 md:space-y-0 flex-col md:flex-row bg-inherit text-white">
      <div className=" px-2.5 pt-5 md:w-1/2 mx-0 flex flex-col space-y-5">
        <h2 className="text-3xl font-bold font-raleway text-center">
          What We Offer
        </h2>
        <p className="text-base text-gray-200 text-center font-montserrat">
          At <strong>XtremeFit</strong>, we don't just offer workouts-we deliver
          an <strong>experience that fuels your drive!</strong>{" "}
        </p>
        <ul className="my-5 space-y-2">
          {offerData.map((offer) => (
            <li
              key={offer.id}
              className="text-base text-gray-200 font-montserrat"
            >
              ✅ <strong>{offer.title}</strong> &mdash; {offer.content}
            </li>
          ))}
        </ul>
        <Button
          buttonText="Explore Our Services"
          buttonWidth="w-fit"
          navigation="membership"
        />
      </div>

      <div className="w-full md:w-1/2 h-full m-0">
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
