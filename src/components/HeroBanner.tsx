import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <main className="mt-[70px] lg:mt-[212px] sm:ml-[50px] relative p-5">
      <h1 className="text-custom-red font-semibold text-2xl">SudGym</h1>
      <h2 className="font-bold text-[40px] lg:text-[44px] mb-6 mt-7">
        Sweat, Smile
        <br /> And Repeat
      </h2>
      <h3 className="text-[22px] leading-[35px] mb-6">
        Check out the most effective exercises
      </h3>
      <a href="#exercises">
        <button className="bg-custom-red hover:brightness-95 text-white py-1 px-4 rounded">
          Explore Exercises
        </button>
      </a>
      <p className="font-semibold text-[200px] text-custom-red opacity-10 hidden lg:block -z-[2] relative">
        Exercises
      </p>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hidden lg:block absolute -z-[1] top-0 right-10 w-[700px] h-[900px] -mt-[330px]"
      />
    </main>
  );
};
export default HeroBanner;
