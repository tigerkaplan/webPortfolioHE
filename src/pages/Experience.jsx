
import React from "react";
import Javascript from '../assets/images/experience/javascript.png';
import ReactImg from "../assets/images/experience/react.png";
import Node from "../assets/images/experience/node.png";
import Github from "../assets/images/experience/github.png";
// import Tailwind from "../assets/images/experience/tailwind.png";
import Html from "../assets/images/experience/html.png";
import Css from "../assets/images/experience/css.png";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-[#DDD0C8]  text-[#402b4c]">
      {/* ------------- Container ------------- */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e]"> Experience</p>
          <p className="py-4">//These are the technologies I've worked with </p>
        </div>
        {/* boxes */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{Html}" alt="Html Icon" />
            <p className="my-4">HTML5</p>
          </div>
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{Css}" alt="Css Icon" />
            <p className="my-4">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{Javascript}" alt="Js Icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{ReactImg}" alt="React Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{Github}" alt="GitHub Icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#C4B0AE] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="{Node}" alt="NodeJs Icon" />
            <p className="my-4">NodeJS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;


// <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
// <div className='sm:text-right pb-8 pl-4'>
// <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>About</p>
// </div>
// <div>     </div>
// </div>