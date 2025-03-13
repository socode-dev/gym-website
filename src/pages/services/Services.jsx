import Button from "../../components/Button";
import ServiceCard from "./serviceCard/ServiceCard";
import FreeTrial from "./freetrial_xplain/FreeTrial";
import Testimonials from "./testimonials/Testimonials";

const Services = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center bg-inherit py-10">
      <div className="px-5">
        <h2 className="text-white text-center text-2xl font-bold font-[Raleway]">
          Train You Way to Greatness
        </h2>
        <p className="text-sm text-gray-200 text-center text-wrap max-w-xl font-[Montserrat] mt-5">
          At <strong>XtremeFit</strong>, we offer a variety of training programs
          tailored for strength, endurance, and flexibility. No matter your
          fitness level, we have the perfect workout for you!
        </p>
      </div>
      <ServiceCard />
      <FreeTrial />
      <Button buttonText="Claim Your Free Trial" />
      <Testimonials />

      <h4 className="text-white text-xl text-center font-bold font-[Raleway] mt-10">
        Ready to Transform Your Fitness?
      </h4>
      <p className="text-gray-200 text-sm text-center italic font-[Montserrat] my-4">
        Find the right program for you and start your journey today!
      </p>
      <Button buttonText="See All Training Programs" navigation="membership" />
    </main>
  );
};

export default Services;
