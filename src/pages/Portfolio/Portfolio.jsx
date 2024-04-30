import { useState, useEffect } from 'react';
import Data from '../../assets/data/portfolioData.json';
import Modal from './PortfolioModal';

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(5);
    const [portfolios, setPortfolios] = useState(Data);
    const [selectTab, setSelectTab] = useState('All');
    // modal window
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    };

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id);
    }


    // filteredData

    useEffect(() => {


        if (selectTab === 'All') {
            setPortfolios(Data)
        }

        if (selectTab === 'Web Applications') {
            const filteredData = Data.filter(portfolio => portfolio.category === 'Web Applications')
            setPortfolios(filteredData)
        }


        if (selectTab === 'Web Design') {
            const filteredData = Data.filter(portfolio => portfolio.category === 'Web Design')
            setPortfolios(filteredData)
        }


        if (selectTab === 'Web Development') {
            const filteredData = Data.filter(portfolio => portfolio.category === 'Web Development')
            setPortfolios(filteredData)
        }

    }, [selectTab])




    return (
        <div name='Portfolio' className='w-full h-full min-h-screen bg-[#DDD0C8] text-[#282828]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                
                <div className='mt-[90px] max-w-[1000px]' style={{ width: "80%" }}>
                    <div className='w-full px-4 grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>Portfolio</p>
                            <div>
                            </div>
                        </div>
                    </div>

                    {/* categories */}
                    <div className='inline-flex flex-wrap py-1 sm:px-1 sm:space-x-1  rounded text-sm'>
                        <button
                            onClick={() => setSelectTab('All')}
                            className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899]'>
                            All
                        </button>
                        <button
                            onClick={() => setSelectTab('Web Applications')}
                            className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899]'>
                            Web Applications
                        </button>
                        <button
                            onClick={() => setSelectTab('Web Design')}
                            className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899]'>
                            Web Design
                        </button>
                        <button
                            onClick={() => setSelectTab('Web Development')}
                            className='w-full sm:w-auto mb-1 sm:mb-0 mx-1 sm:mx-0 py-2 px-4 rounded hover:shadow font-bold focus:outline-none transition duration-200 group hover:bg-[#d3c3b8] hover:border-[#d3c3b8] text-[#282828] shadow-md shadow-[#c0a899] '>
                            Web Development
                        </button>
                    </div>


                    {/* <div className='max-w-[1000px] gap-8 px-4' > */}
                    {/* <div className='text-4xl font-bold text-right'> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                        {
                            portfolios?.slice(0, nextItems).map((portfolio, index) => (
                                <div
                                    key={index}
                                    className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 group cursor-pointer relative flex items-center'>
                                    {/* First box (1/5 width) */}
                                    <div className="w-1/5 bg-[#d3c3b8] ">
                                        <div className="h-48 flex items-center justify-center transform -rotate-90 font-bold object-cover ">
                                            <div className='w-1/5 '></div>
                                            {portfolio.title}
                                        </div>
                                    </div>

                                    {/* Second box (4/5 width) */}
                                    <figure className='ml-5px w-full h-full'>
                                        <img className='rounded-[8px] object-cover w-full h-full' src={portfolio.image} alt='' />
                                    </figure>

                                    <div className='w-full h-full bg-[#b4aaa3] bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                        <div className='w-full h-full flex items-center justify-center'>
                                            <button
                                                onClick={() => showModalHandler(portfolio.id)}
                                                className='text-white hover:bg-#FDF8F0 text-[15px] py-2 px-4 rounded [8px] font-[500] ease-in duration-200'>
                                                See Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* Load More Button */}
                <div className='text-center mt-6'>

                    {nextItems < portfolios.length && Data.length > 6 && (
                        <button
                            onClick={loadMoreHandler}
                            className='text-black hover:bg-#FDF8F0 py-2 px-4 rounded [8px] font-[500] ease duration-200'>
                            Load More
                        </button>
                    )}
                </div>
            </div>

            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
            }
        </div>
    );
}

export default Portfolio;
