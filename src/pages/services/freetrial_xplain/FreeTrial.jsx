import freeTrialXPlain from "./trialLists";

const FreeTrial = () => {
  return (
    <div className="px-5 flex flex-col items-center mb-5">
      <h3 className="text-white text-xl text-center font-bold font-[Raleway]">
        How the Free Trial Works
      </h3>
      <ul className="space-y-2.5 mt-5">
        {freeTrialXPlain.map((list, index) => {
          return (
            <li
              key={index + 1}
              className="text-sm text-gray-200 font-[Montserrat]"
            >
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FreeTrial;
