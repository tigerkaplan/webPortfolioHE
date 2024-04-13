import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#DDD0C8]">
      {/* ------------- Container ------------- */}
      <div className="max-w-[750px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#44195e] ">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#47294c]">
          Husniye Erparun
        </h1>
        <h2 className="text-1xl sm:text-3xl font-bold text-[#402b4c]">
          I'm a Web Developer
        </h2>
        <p className=" py-4 max-w-[700px]">
          I'm a front-end Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
          <div>
            {/* //FIXME - hover action when click the button same issue on social media buttons */}
            <button className=' text-[#282828] group border-2 border-[#282828] px-6 py-3 my-2 flex items-center justify-between hover:bg-[#b9a598] hover:border-[#b9a598] '>
              View Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home