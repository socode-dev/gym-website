import Button from "../../components/Button";

const WelcomeSec = ({ customBG }) => {
  return (
    <section className=" relative w-full min-h-100 flex justify-center items-center px-5">
      <div
        className="absolute inset-0 bg-inherit bg-cover bg-center bg-no-repeat brightness-40"
        style={customBG}
      ></div>
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center space-y-5  p-4 border-none">
        <h2 className="text-white max-w-xl text-2xl text-wrap font-bold font-raleway">
          Welcome to{" "}
          <span className="text-3xl text-red-600 font-bold">XtremeFit.</span>{" "}
          Your Fitness Transformation Begins Here!
        </h2>
        <p className="text-base text-gray-300 font-bold font-montserrat mt-5">
          At <span className="text-xl text-red-600">XtremeFit</span>, we believe
          that fitness is more than just lifting weights or running on a
          treadmill &mdash; it’s about pushing your limits, discovering inner
          strength, and building a healthier version of yourself. Whether you’re
          a beginner or a seasoned athlete, we provide the best training
          environment to help you achieve your fitness goals.
        </p>
        <Button
          buttonText="Join Us Now"
          buttonWidth="w-1/2"
          navigation="membership"
        />
      </div>
    </section>
  );
};

export default WelcomeSec;
