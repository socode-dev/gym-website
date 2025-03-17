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
    <div className="w-full md:w-4/6 h-80 overflow-hidden relative bg-inherit py-10">
      <div
        ref={sliderRef}
        className="w-full absolute flex space-x-6 animate-scroll"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index + 1}
            className="bg-neutral-900 w-3xs p-3 rounded-lg shadow-lg shrink-0"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mx-auto"
            />
            <h3 className="text-xl text-white font-bold font-[Raleway] text-center mt-4">
              {testimonial.name}
            </h3>
            <p className="text-gray-400 text-sm text-center font-[Montserrat] mt-2">
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
