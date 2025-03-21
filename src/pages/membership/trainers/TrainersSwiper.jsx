import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import trainers from "./trainerData";

const TrainersSwiper = () => {
  return (
    <div
      className="max-w-fit h-80 md:w-4/6 relative
     space-y-15 flex justify-center items-center mt-5"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        loop={true}
        speed={600}
        scrollbar={{ hide: true }}
        className="max-w-[380px]"
      >
        {trainers.map((trainer) => (
          <SwiperSlide key={trainer.id} className="">
            <div className="px-2 py-4 bg-neutral-200 dark:bg-neutral-900 w-52 mx-auto my-2 space-y-2 rounded-3xl shadow-xl ring-4 ring-neutral-300 dark:ring-neutral-700">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-neutral-300 dark:ring-neutral-700"
              />
              <h3 className="text-xl font-bold font-raleway text-center">
                {trainer.name}
              </h3>
              <p className="`text-base text-center font-montserrat">
                {trainer.specialty}
              </p>
              <div className="w-fit mx-auto relative flex justify-center items-center group">
                <span className="text-s font-montserrat">
                  ⏳ {trainer.experience} years
                </span>

                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-neutral-300 dark:bg-neutral-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity font-montserrat">
                  Years of Experience
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination absolute bottom-0 transform space-x-2"></div>
    </div>
  );
};

export default TrainersSwiper;
