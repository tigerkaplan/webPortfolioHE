import React, { useState } from 'react';
import Data from '../../assets/data/serviceData.json';

const Features = () => {
  const [features, setFeatures] = useState(Data);

  return (
    <div name='Portfolio' className='w-full h-full min-h-screen bg-[#DDD0C8] text-[#282828]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='mt-[90px] max-w-[1000px]' style={{ width: "80%" }}>
          <div className='w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>  </p>
              <div>
              </div>
            </div>
          </div>
          <div className="px-2 py-10 bg-[#DDD0C8] text-[#282828]">
            <div id="features" className="mx-auto max-w-6xl">
              {/* <p className="text-center text-base font-semibold leading-7 text-primary-500 ">Features</p> */}
              <h2 className="text-center font-display font-bold  md:text-4xl text-[#402b4c] text-3xl inline border-b-4 border-[#44195e] sm:text-right">
              What I do ?  
              </h2>
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3 ">
                {features.map((feature, index) => (
                  <li key={index} className="rounded-xl px-6 py-8 ms-center border border-[#c0a899] ">
                    <img src={feature.imageUrl} alt="" className="h-10 w-10 mb-5" />
                    <h3 className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0  mt-3 rounded hover:shadow font-bold focus:outline-none transition duration-200 group bg-[#d3c3b8] ">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500 border border-[#cab5a8]">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
