import { useState } from 'react';
import Data from '../../assets/data/serviceData.json';

const Features = () => {
  const [features] = useState(Data);

  return (
    <div name='Features' className='w-full h-full min-h-screen bg-[#DDD0C8] text-[#282828]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='mt-[90px] max-w-[1000px]' style={{ width: "80%" }}>
          {/* Header Section */}
          <div className='w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <h2 className='text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right'>
                What I Do
              </h2>
            </div>
          </div>

          {/* Features Section */}
          <div className="px-2 py-10 bg-[#DDD0C8] text-[#282828]">
            <div id="features" className="mx-auto max-w-6xl">
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                {features.map((feature, index) => (
                  <li key={index} className="rounded-xl px-6 py-8 border border-[#c0a899] flex flex-col items-center">
                    <img src={feature.imageUrl} alt={feature.title} className="h-10 w-10 mb-5" />
                    <h3 className="w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 mt-3 rounded bg-[#d3c3b8] hover:shadow font-bold focus:outline-none transition duration-200">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500 border border-[#cab5a8] p-2 rounded">
                      {feature.description}
                    </p>
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
