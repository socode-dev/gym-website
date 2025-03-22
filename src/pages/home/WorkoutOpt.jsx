import Strength from "../../assets/home/strength.jpg";
import Cardio from "../../assets/home/cardio.jpg";
import Yoga from "../../assets/home/yoga.jpeg";

const WorkoutOptions = () => {
  return (
    <article className="w-full h-auto text-black dark:text-white py-8 px-0 flex flex-col items-center gap-y-7 mt-6">
      <section className=" max-w-xl text-center px-2.5">
        <h2 className="text-3xl font-bold font-raleway mt-5">
          Diverse Workout Options
        </h2>
        <p className="text-wrap text-base  my-5 font-montserrat">
          At <strong>XtremeFit</strong>, we offer a wide range of workouts to
          suit every fitness level and goal. Whether you're building strength,
          improving flexibility, or boosting endurance, we have the perfect
          prgram for you!
        </p>
      </section>
      <section className=" w-full grid grid-cols-[repeat(auto, minmax(w-1/2, 1fr))] gap-5 text-center font-montserrat tablet:w-4/5 px-3">
        <figure className="order-last col-span-2 hover:scale-95 transition-transform duration-300 hover:animate-spin">
          <img
            src={Strength}
            alt="Strength Training Image"
            className="h-60 w-full shadow-3xl rounded-b-3xl"
          />
          <figcaption className=" text-base mt-1">Strength Training</figcaption>
        </figure>

        <figure className="hover:scale-95 transition-transform duration-300 hover:animate-spin">
          <img
            src={Cardio}
            alt="Cardio Image"
            className="h-52 w-full shadow-3xl rounded-br-3xl rounded-tl-3xl"
          />
          <figcaption className="text-base mt-1">HIIT & Cardio</figcaption>
        </figure>

        <figure className="hover:scale-95 transition-transform duration-300 hover:animate-spin">
          <img
            src={Yoga}
            alt="Yoga Image"
            className="h-52 w-full shadow-3xl rounded-bl-3xl rounded-tr-3xl"
          />
          <figcaption className=" text-base mt-1">Yoga & Mobility</figcaption>
        </figure>
      </section>
      <p className=" text-base text-wrap font-montserrat text-center px-2.5">
        💡 No matter Yout fitness level, we have the perfecct workout for you!
      </p>
    </article>
  );
};
export default WorkoutOptions;
