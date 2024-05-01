import React from 'react';

const Features = () => {
  return (
    <div name='Feature' className='w-full h-full min-h-screen bg-[#DDD0C8] text-[#282828]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='mt-[90px] max-w-[1000px]' style={{ width: "80%" }}>
          <div className='w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right'>What I Do? </p>
              <div>
                {/* Add your portfolio content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
