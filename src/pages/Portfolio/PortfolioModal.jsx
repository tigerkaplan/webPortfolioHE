import Data from "../../assets/data/portfolioData.json";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { FaGithub, FaRegWindowClose } from "react-icons/fa";

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
        <div className="w-full h-full fixed top-0 left-0 z-40 bg-[#b4aaa3] bg-opacity-40">
            <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-[#FDF8F0] rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 ">
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

                        {portfolio.technologies && portfolio.technologies.map((tech, index) =>
                            tech.list && tech.list.map((item, subIndex) => (
                                <span
                                    key={`${index}-${subIndex}`}
                                    className="bg-[#DDD0C8] py-1 px-2 rounded-[5px] text-[14px] leading-0"
                                >
                                    {item}
                                </span>
                            ))
                        )}
                    </div>
                    <a className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] ">
                        <a className="flex justify-between items-center w-full " href="#">
                            Github <FaGithub size={30} />
                        </a>
                    </a>

                    <a href={portfolio.siteURL}>
                        <button>Live Site</button>
                    </a>

                    <a className="flex justify-between items-center w-full " href="#"
                        onClick={() => setShowModal(false)}
                    >
                        <FaRegWindowClose />
                    </a>
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
