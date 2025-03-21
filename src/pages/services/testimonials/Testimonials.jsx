import { useEffect, useRef } from "react";
import testimonials from "./testimonialsData";

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const animateSlider = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateSlider);
    };
    animationFrameId = requestAnimationFrame(animateSlider);
    return () => cancelAnimationFrame(animateSlider);
  }, []);

  return (
    <div
      className="w-full md:w-4/6 h-[550px] relative 
    bg-inherit py-10 my-10 space-y-7 overflow-hidden"
    >
      <h3 className="text-2xl text-center font-bold font-raleway ">
        Members Experiences at XtremeFit
      </h3>
      <div
        ref={sliderRef}
        className="absolute w-full flex space-x-6 animate-scroll py-5 mt-5"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index + 1}
            className="bg-neutral-200 dark:bg-neutral-800 w-72 py-2 px-3 rounded-3xl shadow-lg shadow-neutral-300"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mx-auto ring-2 ring-neutral-200"
            />
            <h3 className="text-xl font-bold font-raleway text-center mt-4">
              {testimonial.name}
            </h3>
            <p className=" text-base text-center italic font-montserrat mt-2">
              {testimonial.review}
            </p>
            <div className="flex justify-center mt-3 text-yellow-400">
              {"⭐".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
