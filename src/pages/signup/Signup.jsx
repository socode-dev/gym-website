import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "basic";
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const navigate = useNavigate();
  const plans = {
    "free-trial": {
      name: "Free Trial",
      price: "7-Day Free Access",
      features: [
        "Full gym access",
        "Unlimited group classes",
        "No payment required",
      ],
    },
    basic: {
      name: "Basic Plan",
      price: "$29/month",
      features: [
        "Full access to gym facilities",
        "Strength & Cardio Equipment",
        "Locker room & shower access",
        "Free introductory training session",
      ],
    },
    pro: {
      name: "Pro Plan",
      price: "$49/month",
      features: [
        "Everything in Basic Plan",
        "Unlimited group classes (HIIT, Yoga, Functional Training)",
        "Personalized workout plan",
        "Monthly progress check-ins with trainers",
      ],
    },
    elite: {
      name: "Elite Plan",
      price: "$79/month",
      features: [
        "Everything in Pro Plan",
        "1-on-1 personal training",
        "Custom nutrition consultation & meal plan",
        "Priority booking for group classes",
        "24/7 Gym Access",
      ],
    },
  };

  const plan = plans[selectedPlan] || plans.basic;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handlePlanChange = (e) => {
    const newPlan = e.target.value;
    setSelectedPlan(newPlan);
    setSearchParams(newPlan);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleNavigation = () => {
    navigate("/");
    setShowModal(false);
  };

  return (
    <section className="w-full md:w-4/6 p-6 text-dark dark:text-white mx-auto my-10">
      <h2 className="text-3xl font-bold text-center font-raleway">
        {plan.name}
      </h2>
      <p className="text-center text-xl my-4">{plan.price}</p>

      <div className="w-full my-4">
        <div className="lg:w-3/4 mx-auto">
          <label
            htmlFor="changePlan"
            className=" block text-lg mb-2 font-bold font-raleway"
          >
            Change Plan:
          </label>
          <select
            id="changePlan"
            value={selectedPlan}
            onChange={handlePlanChange}
            className="w-full py-2 px-4 text-base font-montserrat font-semibold bg-neutral-200 dark:bg-neutral-800 ring-4 ring-neutral-300 dark:ring-neutral-600 rounded-3xl cursor-pointer"
          >
            {Object.keys(plans).map((key) => (
              <option key={key} value={key}>
                {plans[key].name}
              </option>
            ))}
          </select>
        </div>

        <ul className="my-5 space-y-3  mx-auto lg:w-3/4">
          {plan.features.map((feature, index) => (
            <li key={index + 1} className="text-base font-montserrat">
              ✅ {feature}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm italic w-fit mx-auto font-montserrat bg-neutral-200 dark:bg-neutral-800 rounded my-8 p-2">
        {selectedPlan === "free-trial"
          ? "📝 Membership"
          : "📩 Payment and Membership"}{" "}
        details will be sent to your email after signup.
      </p>

      <form
        className="lg:w-3/4 h-auto space-y-6 font-montserrat mx-auto my-15"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          autoComplete="fullName"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-800 ring-4 ring-neutral-300 dark:ring-neutral-600 rounded-3xl outline-none focus:ring-neutral-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          autoComplete="email"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-800 ring-4 ring-neutral-300 dark:ring-neutral-600 rounded-3xl outline-none focus:ring-neutral-400"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          autoComplete="password"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-800 ring-4 ring-neutral-300 dark:ring-neutral-600 rounded-3xl outline-none focus:ring-neutral-400"
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          autoComplete="confirmPassword"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 bg-neutral-200 dark:bg-neutral-800 ring-4 ring-neutral-300 dark:ring-neutral-600 rounded-3xl outline-none focus:ring-neutral-400"
        />
        <button
          type="submit"
          className="w-full text-lg text-white font-bold bg-red-600 hover:bg-red-700
          active:bg-red-800 transition-all duration-200 py-2 rounded-3xl cursor-pointer"
        >
          {selectedPlan === "free-trial" ? "Start Free Trial" : "Sign Up"}
        </button>
      </form>

      {showModal && (
        <ConfirmationModal
          email={formData.email}
          fullPlan={plan.name}
          plan={selectedPlan}
          onClose={handleNavigation}
        />
      )}
    </section>
  );
};

export default SignUp;
