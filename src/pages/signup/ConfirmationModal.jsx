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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
    bg-white dark:bg-neutral-950 text-black dark:text-white opacity-100"
    >
      <div className="w-full h-screen flex flex-col justify-around items-center dark:bg-neutral-800 shadow-lg p-6 transform transition-allduration-300 opacity-100 scale-100">
        <div>
          <h2 className="text-3xl text-center font-bold font-raleway text-green-500">
            🎉 Signup Successful
          </h2>
          <p className="text-base text-center font-montserrat mt-5">
            You have successfully signed up for the <strong>{fullPlan}</strong>{" "}
            plan.
          </p>
          <p className="text-base text-center font-montserrat mt-4">
            We've sent an emil to <strong>{email}</strong> with your{" "}
            {`${
              plan === "free-trial" ? "membership" : "payment and membership"
            }`}{" "}
            details.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full tablet:w-6/12 p-2 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-3xl text-white text-lg font-bold"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
