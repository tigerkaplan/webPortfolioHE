// import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#DDD0C8]">
      <div className="max-w-[750px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#44195e]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#47294c]">
          Husniye Erparun
        </h1>
        <h2 className="text-1xl sm:text-3xl font-bold text-[#402b4c] mt-6">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I\'m a softwareDeveloper',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I\'m a digitalMarketer',
              1000,
              'I\'m a graphicDesigner',
              1000,
              'I\'m a marblingArtist',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{  display: 'inline-block' }}
            repeat={Infinity}
          />
        </h2>
        <p className="py-4 max-w-[700px]">
          I'm a front-end Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
          <div>
            {/* Use NavLink with the 'to' prop */}
            <NavLink to="/portfolio">
              <button className='text-[#282828] group border-2 border-[#282828] hover:bg-[#9B928C] hover:border-[#9B928C] px-6 py-3 my-2 flex items-center justify-between w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0  mt-3 rounded hover:shadow font-bold focus:outline-none transition duration-200 group bg-[#d3c3b8] '>
                View Portfolio
                {/* <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-4" />
                </span> */}
              </button>
            </NavLink>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
