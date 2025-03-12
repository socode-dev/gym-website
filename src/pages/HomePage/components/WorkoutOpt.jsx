const WorkoutOptions = ({ Strength, Cardio, Yoga }) => {
  return (
    <section className="w-full h-auto py-8 px-0 flex flex-col items-center gap-y-7 mt-6">
      <article className="text-white max-w-xl text-center">
        <h2 className="text-3xl font-bold font-[Raleway] mt-5">
          Diverse Workout Options
        </h2>
        <p className="text-wrap text-sm text-gray-200 my-5 font-[Montserrat]">
          At <span className="font-extrabold">XtremeFit</span>, we offer a wide
          range of workouts to suit every fitness level and goal. Whether you're
          building strength, improving flexibility, or boosting endurance, we
          have the perfect prgram for you!
        </p>
      </article>
      <section className="w-full  grid grid-cols-[repeat(auto, minmax(w-1/2, 1fr))] gap-5 text-center font-[Montserrat] md:w-4/5 md:border-2 md:border-gray-200 md:border-solid md:rounded-sm overflow-hidden">
        <figure className="order-last col-span-2 hover:scale-105 transition-transform duration-300">
          <img
            src={Strength}
            alt="Strength Training Image"
            className="h-60 w-full md:rounded-b-sm"
          />
          <figcaption className="text-gray-200 text-sm">
            Strength Training
          </figcaption>
        </figure>
        <figure className="hover:scale-105 transition-transform duration-300">
          <img
            src={Cardio}
            alt="Cardio Image"
            className="h-50 w-full rounded-br-sm"
          />
          <figcaption className="text-gray-200 text-sm">
            HIIT & Cardio
          </figcaption>
        </figure>
        <figure className="hover:scale-105 transition-transform duration-300">
          <img
            src={Yoga}
            alt="Yoga Image"
            className="h-50 w-full rounded-bl-sm"
          />
          <figcaption className="text-gray-200 text-sm">
            Yoga & Mobility
          </figcaption>
        </figure>
      </section>
      <p className="text-gray-200 text-xl text-wrap font-[Montserrat]">
        💡 No matter Yout fitness level, we have the perfecct workout for you!
      </p>
    </section>
  );
};
export default WorkoutOptions;
