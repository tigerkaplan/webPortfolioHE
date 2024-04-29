import { useState, useEffect } from 'react';
import experienceData from '../../assets/data/experienceData.json';
import ExperienceModal from './ExperienceModal';

const Experience = () => {
  const [experiences, setExperiences] = useState(experienceData);
  const [selectTab, setSelectTab] = useState('All');
  const [showModal, setShowModal] = useState(false); // Set initial state to false
  const [activeID, setActiveID] = useState(null);
  const [nextItems, setNextItems] = useState(3); // Initialize nextItems state

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 2);
  };

  const showModalHandler = id => {
    console.log("Clicked ID:", id);
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    let filteredData = experienceData;

    if (selectTab !== 'All') {
      filteredData = experienceData.filter(experience => experience.category === selectTab);
    }

    setExperiences(filteredData);
  }, [selectTab]);

  return (
    <div name="experience" className='w-full h-full min-h-screen bg-[#DDD0C8] text-[#282828]'>
      <div className='max-w-[850px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
        <div className='mt-[90px] max-w-[1000px]' style={{ width: "80%" }}>
          <div className='w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>Experience</p>
            </div>
          </div>
          {/* categories */}
          <div
            className='inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1  rounded text-sm'>
            <button
              type="button"
              onClick={() => setSelectTab('All')}
              className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group   hover:bg-[#9B928C] hover:border-[#9B928C] text-[#282828]'>All Technologies</button>
            <button
              type="button"
              onClick={() => setSelectTab('Languages')}
              className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group   hover:bg-[#9B928C] hover:border-[#9B928C] text-[#282828]'>
              Languages
            </button>
            <button
              type="button"
              onClick={() => setSelectTab('Libraries')}
              className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group   hover:bg-[#9B928C] hover:border-[#9B928C] text-[#282828]'>
              Libraries
            </button>
            <button
              type="button"
              onClick={() => setSelectTab('Frameworks')}
              className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group   hover:bg-[#9B928C] hover:border-[#9B928C] text-[#282828]'>
              Frameworks
            </button>
          </div>

          {/* filter categories */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {experiences?.slice(0, nextItems).map(experience => (
              <div key={experience.id} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group cursor-pointer relative flex items-center">
                {/* First box (1/5 width) */}
                <div className="w-1/5 bg-gray-100">
                  <div className="h-48 flex items-center justify-center transform -rotate-90 font-bold">
                    <div className='w-1/5'></div>
                    {experience.title}
                  </div>
                </div>

                {/* Second box (4/5 width) */}
                <div className="w-4/5">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-scale-down rounded-lg"
                    onClick={() => showModalHandler(experience.id)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity mr-10px ml-10px ">
                    <button
                      onClick={() => showModalHandler(experience.id)}
                      className="text-white hover:bg-#FDF8F0 text-[15px] py-2 px-4 rounded-[8px] font-[500] ease-in duration-20 mt-5 mr-10px ml-10px m-20px "
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-6'>
            {nextItems < experiences.length && experienceData.length > 2 && (
              <button
                onClick={loadMoreHandler}
                className='text-black hover:bg-#FDF8F0 py-2 px-4 rounded [8px] font-[500] ease duration-200'>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
      {showModal && <ExperienceModal setShowModal={setShowModal} activeID={activeID} />}
    </div>
  );
};

export default Experience;
