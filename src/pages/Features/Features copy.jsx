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
              <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>What I do ?    </p>
              <div>
              </div>
            </div>
          </div>
          {features.map((feature, index) => (
            <ul key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              <li className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group cursor-pointer relative flex items-center">
                <img src="placeholder.jpg" alt="placeholder" className="mx-auto h-10 w-10" />
                <h3 className="my-3 font-display font-medium">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">{feature.description}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Features;



// div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
//                         {
//                             portfolios?.slice(0, nextItems).map((portfolio, index) => (
//                                 <div
//                                     key={index}
//                                     className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 group cursor-pointer relative flex items-center'></div>

// export default Features;
