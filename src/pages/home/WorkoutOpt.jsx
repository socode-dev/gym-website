import Strength from "../../assets/home/strength.jpg";
import Cardio from "../../assets/home/cardio.jpg";
import Yoga from "../../assets/home/yoga.jpeg";

const WorkoutOptions = () => {
  return (
    <article className="w-full h-auto py-8 px-0 flex flex-col items-center gap-y-7 mt-6">
      <section className="text-white max-w-xl text-center px-2.5">
        <h2 className="text-3xl font-bold font-raleway mt-5">
          Diverse Workout Options
        </h2>
        <p className="text-wrap text-base text-gray-200 my-5 font-montserrat">
          At <strong>XtremeFit</strong>, we offer a wide range of workouts to
          suit every fitness level and goal. Whether you're building strength,
          improving flexibility, or boosting endurance, we have the perfect
          prgram for you!
        </p>
      </section>
      <section className="w-full grid grid-cols-[repeat(auto, minmax(w-1/2, 1fr))] gap-5 text-center font-montserrat md:w-4/5 ">
        <figure className="order-last col-span-2 hover:scale-105 transition-transform duration-300">
          <img
            src={Strength}
            alt="Strength Training Image"
            className="h-60 w-full md:rounded-b-sm"
          />
          <figcaption className="text-gray-200 text-base mt-1">
            Strength Training
          </figcaption>
        </figure>
        <figure className="hover:scale-105 transition-transform duration-300">
          <img
            src={Cardio}
            alt="Cardio Image"
            className="h-50 w-full rounded-br-sm"
          />
          <figcaption className="text-gray-200 text-base mt-1">
            HIIT & Cardio
          </figcaption>
        </figure>
        <figure className="hover:scale-105 transition-transform duration-300">
          <img
            src={Yoga}
            alt="Yoga Image"
            className="h-50 w-full rounded-bl-sm"
          />
          <figcaption className="text-white text-base mt-1">
            Yoga & Mobility
          </figcaption>
        </figure>
      </section>
      <p className="text-gray-200 text-base text-wrap font-montserrat text-center px-2.5">
        💡 No matter Yout fitness level, we have the perfecct workout for you!
      </p>
    </article>
  );
};
export default WorkoutOptions;
