import membershipPlans from "./pricingData";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();

  const handleClick = (plan) => {
    navigate(`signup?plan=${plan}`);
  };

  return (
    <section className="w-full text-black dark:text-white flex flex-col items-center px-2.5 space-y-5">
      <h3 className="text-2xl text-center font-raleway font-bold">
        Choose Your Membership Plan
      </h3>
      <p className="text-center text-base font-montserrat">
        Flexible plans designed to match your fitness goal. Choose your path and
        start today!
      </p>
      <div className="py-16 w-full grid grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-3 place-items-center space-y-9">
        {membershipPlans.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`w-72 md:w-[400px] px-3 ${
                plan.id === "basic" && "pt-7"
              } py-4 space-y-2 flex flex-col items-center ${
                plan.BGColor
              } ring-4 ${plan.ring} shadow-lg rounded-3xl shadow-neutral-950`}
            >
              {plan.popular && (
                <span className="text-base text-center text-neutral-300 font-montserrat italic">
                  🔥 Most Popular Choice!
                </span>
              )}
              {plan.best && (
                <span className="text-base text-center text-neutral-300 font-montserrat italic">
                  🏆 Best for Serious Athletes!
                </span>
              )}
              <h4 className="text-2xl text-center text-white font-bold font-raleway">
                {plan.name}
              </h4>
              <p className="text-7xl text-center text-neutral-400 ">{`$${plan.price}`}</p>
              <ul className="w-full space-y-1">
                {plan.features.map((list, index) => (
                  <li
                    key={index + 1}
                    className="text-base text-neutral-200 font-montserrat"
                  >{`✅ ${list}`}</li>
                ))}
              </ul>
              <button
                onClick={() => handleClick(plan.id)}
                className={`${
                  plan.popular
                    ? "bg-white text-black hover:bg-neutral-300 active:bg-neutral-400"
                    : "bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
                } px-5 py-2 rounded-3xl font-bold text-lg font-montserrat transition-all transform duration-200 active:scale-90 cursor-pointer`}
              >
                Join Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plan;
