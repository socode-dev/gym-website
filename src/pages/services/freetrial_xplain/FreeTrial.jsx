import freeTrialXPlain from "./trialLists";

const FreeTrial = () => {
  return (
    <div className="px-5 flex flex-col items-center mb-7">
      <h3 className="text-xl text-center font-bold font-raleway">
        How the Free Trial Works
      </h3>
      <ul className="space-y-2.5 mt-5">
        {freeTrialXPlain.map((list, index) => {
          return (
            <li key={index + 1} className="text-base font-montserrat">
              <strong>{list.title}</strong> &mdash; {list.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FreeTrial;
