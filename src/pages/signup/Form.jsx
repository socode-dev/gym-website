import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Form = ({
  handleSubmit,
  handleChange,
  fullName,
  email,
  password,
  confirmPassword,
  emailErr,
  passwordErr,
  selectedPlan,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const revealPass = () => setShowPassword((prev) => !prev);
  const revealConfirmPass = () => setShowConfirmPassword((prev) => !prev);

  return (
    <form
      className="mobile:w-4/5 tablet:w-3/4 h-auto font-montserrat mx-auto my-15"
      onSubmit={handleSubmit}
    >
      <div className="space-y-6">
        <input
          type="text"
          name="fullName"
          value={fullName}
          placeholder="Full Name"
          autoComplete="fullName"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 shadow-3xl rounded-3xl outline-none focus:ring-neutral-400"
        />
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            autoComplete="email"
            required
            onChange={handleChange}
            className="w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 shadow-3xl rounded-3xl outline-none focus:ring-neutral-400"
          />
          {emailErr && (
            <p className="text-red-500 -z-50 text-sm mt-1">{emailErr}</p>
          )}
        </div>
        <div className="w-full h-10 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Password"
            autoComplete="password"
            required
            onChange={handleChange}
            className="absolute w-full px-3 py-2 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 shadow-3xl rounded-3xl outline-none focus:ring-neutral-400"
          />
          <span
            onClick={revealPass}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            {showPassword ? (
              <VisibilityOutlinedIcon className="text-neutral-400 dark:text-neutral-600" />
            ) : (
              <VisibilityOffOutlinedIcon className="text-neutral-400 dark:text-neutral-600" />
            )}
          </span>
        </div>

        <div className="relative w-full h-10">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            autoComplete="confirmPassword"
            required
            onChange={handleChange}
            className="w-full absolute px-3 py-2 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 shadow-3xl rounded-3xl outline-none focus:ring-neutral-400"
          />
          <span
            onClick={revealConfirmPass}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          >
            {showConfirmPassword ? (
              <VisibilityOutlinedIcon className="text-neutral-400 dark:text-neutral-600" />
            ) : (
              <VisibilityOffOutlinedIcon className="text-neutral-400 dark:text-neutral-600" />
            )}
          </span>
        </div>
      </div>
      {passwordErr && (
        <p className="text-red-500 -z-50 text-sm mt-1">{passwordErr}</p>
      )}
      <button
        type="submit"
        className="w-full my-10 text-lg text-white font-bold bg-red-600 hover:bg-red-700
          active:bg-red-800 transition-all duration-200 py-2 rounded-3xl cursor-pointer"
      >
        {selectedPlan === "free-trial" ? "Start Free Trial" : "Sign Up"}
      </button>
    </form>
  );
};

export default Form;
