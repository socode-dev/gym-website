import Button from "../../../components/Button";
import services from "./services";

const ServiceCard = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className="flex flex-col gap-y-2 p-4 ring-4 ring-neutral-400 dark:ring-neutral-700 bg-neutral-300 dark:bg-neutral-900 rounded-3xl shadow-lg shadow-neutral-800"
          >
            <h3 className="text-xl text-center font-bold font-raleway">
              {service.heading}
            </h3>
            <p className="text-sm font-montserrat">{service.about}</p>
            <div className="mt-3 pl-3">
              <h4 className=" text-xl font-bold font-raleway">✅ Benefits:</h4>
              <ul className="list-none mt-3">
                {service.benefits.map((benefit, index) => {
                  return (
                    <li key={index + 1} className="text-base font-montserrat">
                      {benefit}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="text-sm italic text-center font-montserrat mt-3">
              {service.ctaHeading}
            </p>
            <div className="flex gap-x-3 mt-3 self-center">
              <Button buttonText={service.ctaButton} navigation="/membership" />
              <Button
                buttonText="Try for Free"
                navigation="/membership/signup?plan=free-trial"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;
