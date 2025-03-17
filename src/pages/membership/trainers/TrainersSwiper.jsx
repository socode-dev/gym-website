import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import trainers from "./trainerData";

const TrainersSwiper = () => {
  return (
    <div
      className="max-w-fit h-auto md:w-4/6 relative
     space-y-15 flex justify-center items-center mt-5"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={600}
        scrollbar={{ hide: true }}
        className="max-w-[350px]"
      >
        {trainers.map((trainer) => (
          <SwiperSlide key={trainer.id}>
            <div className="p-4 bg-neutral-900 w-50 mx-auto space-y-2 rounded-lg shadow-md border-2 border-neutral-800 transition-all duration-300 transform hover:scale-90 hover:shadow-lg">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-neutral-500"
              />
              <h3 className="text-lg text-white font-bold font-[Raleway] text-center">
                {trainer.name}
              </h3>
              <p className="`text-sm text-center text-neutral-300 font-[Montserrat]">
                {trainer.specialty}
              </p>
              <div className="w-fit mx-auto relative flex justify-center items-center group">
                <span className="text-sm text-neutral-300 font-[Montserrat]">
                  ⏳ {trainer.experience} years
                </span>

                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-neutral-300 bg-neutral-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity font-[Montserrat]">
                  Years of Experience
                </span>
              </div>
              <p></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination absolute bottom-0 transform space-x-2"></div>
    </div>
  );
};

export default TrainersSwiper;
