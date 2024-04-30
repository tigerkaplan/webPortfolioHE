
import Data from "../../assets/data/portfolioData.json";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { FaGithub, FaWifi } from "react-icons/fa";


const Modal = ({ activeID, setShowModal }) => {
    const portfolio = Data.find(portfolio => portfolio.id === activeID);

    // Check if portfolio is undefined
    if (!portfolio) {
        return (
            <div className="w-full h-full fixed top-0 left-0 z-40 bg-[#b4aaa3] bg-opacity-40">
                <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-[#FDF8F0] rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 ">
                    <h2>Portfolio not found</h2>
                    <button
                        className="bg-[#DDD0C8] text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:#FDF8F0 ease-in duration-300"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 ]">
            <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20  transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto">
                <div className="!z-5 relative grid grid-col  bg-[#e7ddd8] bg-clip-border p-4 shadow-3xl shadow-shadow-500 ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  bg-[#d3c3b8]  ">
                        <h1 className="text-2xl font-bold-2 text-center">
                            Related Projects
                        </h1>

                        <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center ' onClick={() => setShowModal(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className='sr-only'></span>
                        </button>

                    </div>
                    <div className='p-4 md:p-5'>
                        <p className="mt-2 text-xs ">
                            Here you can find more details about {portfolio.title} project.
                        </p>

                        <hr className='border-[1px] mt-2 mb-2 border-[#d3c3b8] ' />

                        <div>
                            <figure>
                                <img className="rounded-[8px]" src={portfolio.image} alt="" />
                            </figure>
                        </div>

                        <div>
                            <h2 className="text-2xl text-[#282828] font-[700] my-5">
                                {portfolio.title}
                            </h2>

                            <p className="text-[15px] leading-7 2xl text-[#282828] ">
                                {portfolio.description}
                            </p>
                            <div className="mt-5 flex items-center gap-3 flex-wrap">
                                <h4 className="text-[#282828] text-[18px] text-[700]">
                                    Technologies:
                                </h4>

                                {portfolio.technologies.map((tech, index) =>
                                    tech.list.map((item, subIndex) => (

                                        <span
                                            key={`${index}-${subIndex}`}
                                            className="bg-[#DDD0C8] py-1 px-2 rounded-[5px] text-[14px] leading-0"
                                        >
                                            {item}
                                        </span>
                                    ))
                                )}
                            </div>
                            <div className="px-6 py-3 flex flex-row items-center justify-between bg-[#d3c3b8] mt-4">
                                <span href="#"
                                    className='py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center'>
                                    <span className="ml-1"><a href={portfolio.GitHub}> <FaGithub size={25} /> </a></span>
                                </span>


                                <span href="#"
                                    className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                    <span className="ml-1"><a href={portfolio.siteURL}>  <FaWifi size={25} className="ml-1" /> </a></span>
                                </span>
                            </div>


                            {/* 
                            <a className="flex justify-between items-center w-full " href="#"
                                onClick={() => setShowModal(false)}
                            >
                                <FaRegWindowClose />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

Modal.propTypes = {
    activeID: PropTypes.number.isRequired, // Ensure activeID is required and of type number
    setShowModal: PropTypes.func.isRequired // Ensure setShowModal is required and of type function
};

export default Modal;
