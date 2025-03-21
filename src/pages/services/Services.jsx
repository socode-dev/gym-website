import Button from "../../components/Button";
import ServiceCard from "./serviceCard/ServiceCard";
import FreeTrial from "./freetrial_xplain/FreeTrial";
import Testimonials from "./testimonials/Testimonials";

const Services = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center bg-inherit text-black dark:text-white py-10 px-5 space-y-15">
      <div className="px-5">
        <h2 className="text-center text-3xl font-bold font-raleway">
          Train You Way to Greatness
        </h2>
        <p className="text-base text-center text-wrap max-w-xl font-montserrat mt-5">
          At <strong>XtremeFit</strong>, we offer a variety of training programs
          tailored for strength, endurance, and flexibility. No matter your
          fitness level, we have the perfect workout for you!
        </p>
      </div>
      <ServiceCard />
      <FreeTrial />
      <Button
        buttonText="Claim Your Free Trial"
        navigation="/membership/signup?plan=free-trial"
      />
      <Testimonials />

      <h4 className=" text-xl text-center font-bold font-raleway mt-10">
        Ready to Transform Your Fitness?
      </h4>
      <p className=" text-sm text-center italic font-montserrat my-4">
        Find the right program for you and start your journey today!
      </p>
      <Button buttonText="See All Training Programs" navigation="/membership" />
    </main>
  );
};

export default Services;
