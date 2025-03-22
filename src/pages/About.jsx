import Timeline from "../assets/about/timeline.jpg";
import GroupClass from "../assets/about/group_class.jpg";
import Button from "../components/Button";

const About = () => {
  return (
    <article className="w-full h-auto bg-inherit text-black dark:text-white mt-10 mb-28 flex flex-col">
      <div className="w-full tablet:w-3/5 text-center self-center">
        <h2 className="text-3xl font-bold font-raleway">Our Story</h2>
        <p className="text-base font-montserrat px-3 mt-7 tracking-wide">
          Founded in 2024, XtremeFit was born from a passion for fitness,
          stregth, and community. What started as a vision to empower people to
          take control of their health & push their limits and also to create a
          high-performance training space has evolved into a premier fitness
          destination for all levels from beginners to elite athletes. Today, we
          have grown into a leading fitness center that welcomes beginners and
          professionals alike.
        </p>
      </div>
      <div className="w-full max-h-110 mt-10 flex">
        <img src={Timeline} alt="History Timeline Image" className="w-full" />
      </div>

      <div className="w-full tablet:h-[480px] flex flex-col gap-y-5 tablet:flex-row mt-14">
        <div className="w-full tablet:w-1/2 flex flex-col  justify-center p-5">
          <h3 className="text-2xl text-center font-extrabold font-raleway">
            Our Mission and Vision
          </h3>
          <ul className="my-5 flex flex-col gap-y-3">
            <li className="text-base font-montserrat">
              ✅<strong>Mission:</strong> To empower individuals to unlock their
              full potential throut fitness, dedication, and expert guidance.
            </li>
            <li className="text-base font-montserrat">
              ✅<strong>Vision:</strong> To be the ultimate training hub for
              those who strive for greatness.
            </li>
          </ul>
          <p className="text-base font-montserrat text-center mb-5">
            Results-driven. Innovative. Inclusive. This is Xtremefit.
          </p>
          <Button
            buttonText="Explore Memberships"
            buttonWidth="w-fit"
            navigation="/membership"
          />
        </div>

        <div className="w-full tablet:w-1/2 tablet:rounded-l-3xl overflow-hidden h-full shadow-3xl">
          <img
            src={GroupClass}
            alt="Group Fitness Class Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </article>
  );
};

export default About;
