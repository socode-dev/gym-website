import { useEffect } from "react";

const ConfirmationModal = ({ plan, fullPlan, email, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-60">
      <div className="w-full h-screen flex flex-col justify-between md:h-2/3 md:max-w-1/2 bg-neutral-800 md:rounded-lg shadow-lg p-6 transform transition-allduration-300 opacity-100 scale-100 md:top-1/2 md:left-1/2 ">
        <div>
          <h2 className="text-3xl text-center font-bold font-raleway text-green-500">
            🎉 Signup Successful
          </h2>
          <p className="text-neutral-300 text-base text-center font-montserrat mt-5">
            You have successfully signed up for the{" "}
            <strong className="text-white">{fullPlan}</strong> plan.
          </p>
          <p className="text-neutral-300 text-base text-center font-montserrat mt-4">
            We've sent an emil to{" "}
            <strong className="text-white">{email}</strong> with your{" "}
            {`${
              plan === "free-trial" ? "membership" : "payment and membership"
            }`}{" "}
            details.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full p-2 bg-red-600 hover:bg-red-700 rounded-3xl text-white text-lg font-bold"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
