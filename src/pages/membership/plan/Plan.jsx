import membershipPlans from "./pricingData";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();

  const handleClick = (plan) => {
    navigate(`signup?plan=${plan}`);
  };

  return (
    <section className="w-full flex flex-col items-center px-2.5 space-y-5">
      <h3 className="text-2xl text-center text-white font-[Raleway] font-bold">
        Choose Your Membership Plan
      </h3>
      <p className="text-center text-base text-neutral-300 font-[Montserrat]">
        Flexible plans designed to match your fitness goal. Choose your path and
        start today!
      </p>
      <div className="my-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center space-y-8">
        {membershipPlans.map((plan) => {
          return (
            <div
              key={plan.id}
              className={`w-70 px-2.5 py-4 space-y-6 flex flex-col items-center ${plan.bgColor} border-2 border-solid ${plan.border} shadow-lg rounded-lg shadow-neutral-950`}
            >
              {plan.popular && (
                <span className="text-sm text-center text-neutral-400 font-[Montserrat] italic">
                  🔥 Most Popular Choice!
                </span>
              )}
              {plan.best && (
                <span className="text-sm text-center text-neutral-400 font-[Montserrat] italic">
                  🏆 Best for Serious Athletes!
                </span>
              )}
              <h4 className="text-2xl text-center text-white font-bold font-[Raleway]">
                {plan.name}
              </h4>
              <p className="text-7xl text-center text-neutral-400 ">{`$${plan.price}`}</p>
              <ul className="w-full space-y-1.5">
                {plan.features.map((list, index) => (
                  <li
                    key={index + 1}
                    className="text-base text-neutral-200 font-[Montserrat]"
                  >{`✅ ${list}`}</li>
                ))}
              </ul>
              <button
                onClick={() => handleClick(plan.id)}
                className={`${
                  plan.popular
                    ? "bg-white text-neutral-950 hover:bg-neutral-400"
                    : "bg-red-700 text-white hover:bg-red-900"
                } px-5 py-2.5 rounded-4xl font-bold text-base font-[Montserrat] transition-all duration-200 cursor-pointer`}
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
