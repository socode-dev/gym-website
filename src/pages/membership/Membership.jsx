import Plan from "./plan/Plan";
import Trainers from "./trainers/Trainers";
import Button from "../../components/Button";
import FAQs from "./FAQs/FAQs";

const Membership = () => {
  return (
    <main className="w-full h-auto flex flex-col items-center space-y-10 mb-16">
      <section className="w-full tablet:w-5/6 text-black dark:text-white text-center space-y-4 mt-8 px-2.5 border-b-2 border-b-neutral-300 pb-10">
        <h2 className="text-3xl  font-bold font-raleway">
          Membership Page &mdash; Join XtremeFit
        </h2>
        <p className=" text-base font-montserrat mt-10">
          At <strong>XtremeFit</strong>, we believe fitness should be
          accessible, flexible, and results-driven. Whether you’re a beginner or
          an elite athlete, we offer customized membership plans to match your
          fitness journey.
        </p>
        <p className="italic font-montserrat  text-base">
          Choose the plan that works best for you and start your transformation
          today!
        </p>
      </section>
      <Plan />

      <section className="w-full px-2.5 py-5 flex flex-col items-center space-y-5">
        <h3 className="text-2xl font-bold font-raleway">
          Try for Free – 7-Day Trial
        </h3>
        <p className="text-base font-montserrat text-center">
          Not sure which plan is right for you? Get full access for 7 days and
          experience XtremeFit firsthand!
        </p>

        <ul className="space-y-1.5">
          <li className="text-base font-montserrat">✅ Full gym access</li>
          <li className="text-base font-montserrat">
            ✅ Unlimited group classes
          </li>
          <li className="text-base font-montserrat">✅ No payment required</li>
        </ul>
        <Button
          buttonText="Claim Free Trial"
          navigation="signup?plan=free-trial"
        />
      </section>
      <Trainers />
      <FAQs />

      <section className="w-full text-center space-y-5 px-5">
        <h3 className="text-xl font-bold font-raleway">
          Ready to Get Started?
        </h3>
        <p className="text-base font-montserrat">
          Choose your plan and take the first step towards a stronger, healthier
          you!
        </p>
        <Button buttonText="Join Now" navigation="signup?plan=basic" />
      </section>
    </main>
  );
};

export default Membership;
