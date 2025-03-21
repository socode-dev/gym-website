import { useState } from "react";
import { Link } from "react-router-dom";
import faqData from "./faqData";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="p-4 w-full text-black dark:text-white flex flex-col items-center space-y-5">
      <h3 className="text-3xl text-center font-bold font-raleway">
        ❓ Frequently Asked Questions
      </h3>

      <div className="w-full md:w-4/6 rounded-3xl overflow-hidden my-10">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b-2 w-full border-b-neutral-400 dark:border-b-neutral-700  last-of-type:border-none"
          >
            <div
              onClick={() => toggleFaq(faq.id)}
              className="bg-neutral-200 dark:bg-neutral-900 flex cursor-pointer justify-between items-center gap-7 p-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-9500 transition duration-300"
            >
              <span className="w-20 grow text-wrap text-base  font-montserrat">
                {faq.question}
              </span>
              <span className="text-lg ">
                {openFaq === faq.id ? (
                  <RemoveCircleOutlineTwoToneIcon />
                ) : (
                  <AddCircleOutlineTwoToneIcon />
                )}
              </span>
            </div>
            {openFaq === faq.id && (
              <div
                className={` overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-3 ${
                  openFaq === faq.id
                    ? "max-h-fit opacity-100 "
                    : "h-0 opacity-0 "
                }`}
              >
                <p className="text-base  font-montserrat">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full md:w-4/6 text-base inline-flex items-center gap-2 font-montserrat mb-4">
        <p>Still Have Questions?</p>
        <Link
          to="/contact"
          className="text-red-600 text-lg font-bold underline cursor-pointer hover:text-red-700 active:text-red-800 transition duration-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default FAQs;
