import Button from "../../../components/Button";

const WhatWeOffer = ({ Receptionist }) => {
  return (
    <section className="flex px-0 my-7 space-y-10 md:space-y-0 flex-col md:flex-row bg-inherit text-white">
      <div className=" px-2.5 pt-5 font-[Montserrat] md:w-1/2 mx-0 flex flex-col space-y-5">
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>
        <p className="text-sm text-gray-200">
          At <span className="font-bold text-xl">XtremeFit</span>, we don't just
          offer workouts-we deliver an{" "}
          <span className="font-bold text-xl">
            experience that fuels your drive!
          </span>{" "}
        </p>
        <ul className="my-7">
          <li className="text-sm text-gray-200 font-light">
            ✅{" "}
            <span className="font-bold text-xl">
              State-of-the-Art Equipment
            </span>{" "}
            - Train with cutting-edge machines{" "}
          </li>
          <li className="text-sm text-gray-200 font-light">
            ✅ <span className="font-bold text-xl">Personalized Coaching</span>{" "}
            - Expert trainers tailor workouts just for you
          </li>
          <li className="text-sm text-gray-200 font-light">
            ✅{" "}
            <span className="font-bold text-xl">
              Highly-intensity Group Classes
            </span>{" "}
            - Stay challenged & engaged
          </li>
          <li className="text-sm text-gray-200 font-light">
            ✅{" "}
            <span className="font-bold text-xl">
              Nutrition & Wellness Coaching
            </span>{" "}
            - Maximize results with expert guidance
          </li>
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
