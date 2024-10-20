import Data from "../../assets/data/portfolioData.json";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { FaGithub, FaWifi } from "react-icons/fa";

const Modal = ({ activeID, setShowModal }) => {
    const portfolio = Data.find(portfolio => portfolio.id === activeID);

    // Check if portfolio is undefined
    if (!portfolio) {
        return (
            <div
                className="w-full h-full fixed top-0 left-0 z-20 bg-[#b4aaa3] bg-opacity-40"
                onClick={() => setShowModal(false)} // Close modal when clicking outside
            >
                <div
                    className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-[#FDF8F0] rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-4"
                    onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
                >
                    <h2>Portfolio not found</h2>
                    <button
                        className="bg-[#DDD0C8] text-white py-2 px-4 mt-6 rounded-[8px] font-[500] hover:bg-[#FDF8F0] ease-in duration-300"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="w-full h-full fixed top-0 left-0 z-20 bg-[#b4aaa3] bg-opacity-40"
            onClick={() => setShowModal(false)} // Close modal when clicking outside
        >
            <div
                className="max-w-[500px] absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
            >
                <div className="relative grid grid-cols-1 bg-[#e7ddd8] p-3 shadow-3xl shadow-shadow-500 rounded-lg">
                    <div className="flex items-center justify-between p-3 border-b bg-[#d3c3b8] rounded-t">
                        <h1 className="text-xl font-bold text-center">
                        {portfolio.title}
                        </h1>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
                            onClick={() => setShowModal(false)}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only"></span>
                        </button>
                    </div>

                    <div className="p-3">
                        <p className="mt-2 text-xs">
                            Here you can find more details about {portfolio.title} project.
                        </p>

                        <hr className="border-[1px] mt-2 mb-2 border-[#d3c3b8]" />

                        <div>
                            <figure>
                                <img
                                    className="rounded-[8px]"
                                    src={portfolio.image}
                                    alt={portfolio.title}
                                />
                            </figure>
                        </div>

                        <div>
                            <h2 className="text-xl text-[#282828] font-bold mt-3 mb-4">
                                {portfolio.title}
                            </h2>

                            <p className="text-[14px] leading-6 text-[#282828]">
                                {portfolio.description}
                            </p>

                            <div className="mt-4 flex items-center gap-2 flex-wrap">
                                <h4 className="text-[#282828] text-[16px] font-semibold">
                                    Technologies:
                                </h4>

                                {portfolio.technologies.map((tech, index) =>
                                    tech.list.map((item, subIndex) => (
                                        <span
                                            key={`${index}-${subIndex}`}
                                            className="bg-[#DDD0C8] py-1 px-2 rounded-[5px] text-[13px]"
                                        >
                                            {item}
                                        </span>
                                    ))
                                )}
                            </div>

                            <div className="px-4 py-2 flex flex-row items-center justify-between bg-[#d3c3b8] mt-3">
                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                    <a href={portfolio.GitHub} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={22} />
                                    </a>
                                </span>

                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                    <a href={portfolio.siteURL} target="_blank" rel="noopener noreferrer">
                                        <FaWifi size={22} className="ml-1" />
                                    </a>
                                </span>
                            </div>

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
