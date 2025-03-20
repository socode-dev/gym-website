import TrainersSwiper from "./TrainersSwiper";

const Trainers = () => {
  return (
    <section className="p-4 w-full flex flex-col items-center space-y-4">
      <div>
        <h2 className="text-2xl text-center font-bold font-raleway mb-6">
          Meet Our Expert Trainers
        </h2>
        <p className="text-center text-base font-montserrat mb-6">
          Our certified trainers are here to guide and support you on your
          fitness journey.
        </p>
      </div>

      <TrainersSwiper />
    </section>
  );
};

export default Trainers;
