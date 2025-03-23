import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = ({ LocationOnIcon, PhoneIcon, EmailIcon }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [emailErr, setEmailErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const gymLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9132406839575!2d-74.00601568459346!3d40.71277617933064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3167d42d35%3A0x8fbd305b2ac1946e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1641511362017!5m2!1sen!2sus";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setEmailErr("Please enter a valid email address.");
      } else {
        setEmailErr("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("✅ Your messsage has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  return (
    <section className="w-full mx-auto p-6 text-black dark:text-white">
      <h2 className="text-4xl font-bold font-raleway text-center my-4">
        Contact Us
      </h2>

      <div className="w-full  mobile:w-4/5 tablet:w-3/4 laptop:w-4/6 text-base mt-15 font-montserrat space-y-3 mx-auto">
        <p>
          <strong>
            <LocationOnIcon className="text-red-600 text-xl mr-2" /> Location:
          </strong>{" "}
          123 Fitness, New York City, New York, United States.
        </p>
        <p>
          <strong>
            <PhoneIcon className="text-red-600 text-xl mr-2" /> Phone:
          </strong>{" "}
          +123 456 7890
        </p>
        <p>
          <strong>
            <EmailIcon className="text-red-600 text-xl mr-2" /> Email:
          </strong>{" "}
          contact@xtremefit.com
        </p>
      </div>

      <div className=" flex justify-center gap-6 my-7">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full hover:rotate-180 hover:scale-50 transition-transform duration-300"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white  bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full hover:rotate-180 hover:scale-50 transition-transform duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferral"
          className="text-white  bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full hover:rotate-180 hover:scale-50 transition-transform duration-300"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferral"
          className="text-white  bg-neutral-900 dark:bg-neutral-500 p-2 rounded-full hover:rotate-180 hover:scale-50 transition-transform duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mobile:w-4/5 tablet:w-3/4 laptop:w-4/6 mx-auto mt-7"
      >
        <div className="w-full space-y-7">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 font-montserrat rounded-3xl shadow-3xl focus:outline-none focus:ring-neutral-300 transition duration-200"
          />

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 font-montserrat rounded-3xl shadow-3xl focus:outline-none focus:ring-neutral-300 transition duration-200"
            />
            {emailErr && (
              <p className="text-red-500 -z-50 text-sm mt-1">{emailErr}</p>
            )}
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full py-2 px-3 bg-neutral-100 dark:bg-neutral-800 ring-4 ring-neutral-200 dark:ring-neutral-600 font-montserrat rounded-3xl shadow-3xl focus:outline-none focus:ring-neutral-300 transition duration-200 resize-none "
          />
        </div>

        <button
          type="submit"
          className="mt-10 w-full bg-red-600 text-white hover:bg-red-700 active:bg-red-800 transition duration-300 py-2.5 text-center text-lg cursor-pointer font-bold font-montserrat rounded-3xl"
        >
          Send Message
        </button>
      </form>

      {successMessage && (
        <p className="text-green-500 text-base text-center mt-5 font-montserrat">
          {successMessage}
        </p>
      )}

      <div className="my-16 pb-10 w-full">
        <iframe
          title="Gym Location"
          src={gymLocation}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-72 rounded-3xl shadow-3xl "
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
