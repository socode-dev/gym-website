import Button from "../../../components/Button";
import services from "./services";

const ServiceCard = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className="flex flex-col gap-y-2 px-3.5 py-3.5 border-2 border-solid border-neutral-900 bg-neutral-950 shadow-2xl"
          >
            <h3 className="text-xl text-white text-center font-bold font-raleway">
              {service.heading}
            </h3>
            <p className="text-sm text-gray-200 font-montserrat">
              {service.about}
            </p>
            <div className="mt-2.5 pl-2.5">
              <h4 className="text-white text-xl font-bold font-raleway">
                ✅ Benefits:
              </h4>
              <ul className="list-none mt-2.5">
                {service.benefits.map((benefit, index) => {
                  return (
                    <li
                      key={index + 1}
                      className="text-gray-200 text-sm font-montserrat"
                    >
                      {benefit}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="text-gray-200 text-sm italic text-center font-montserrat mt-2.5">
              {service.ctaHeading}
            </p>
            <div className="flex gap-x-2.5 mt-2.5 self-center">
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
