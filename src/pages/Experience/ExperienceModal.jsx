import experienceData from '../../assets/data/experienceData.json';
import PropTypes from 'prop-types';
import { FaGithub, FaWifi } from "react-icons/fa";

const ExperienceModal = ({ activeID, setShowModal }) => {
    const experience = experienceData.find(exp => exp.id === activeID);

    // Check if experience is found
    if (!experience) {
        return (
            <div className="w-full h-full fixed top-0 left-0 z-20 bg-[#b4aaa3] bg-opacity-40">
                <div className="max-w-[1000px] w-full absolute top-1/2 left-1/2 z-60 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative bg-[#e7ddd8] p-3 shadow-3xl shadow-shadow-500 rounded-lg">
                        <p className="text-center">No experience found.</p>
                    </div>
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
                className="max-w-[90%] sm:max-w-[800px] w-full absolute top-1/2 left-1/2 z-60 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto p-4 sm:p-0"
                onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
            >
                <div className="relative bg-[#e7ddd8] p-3 shadow-3xl shadow-shadow-500 rounded-lg">
                    <div className="flex items-center justify-between p-3 border-b bg-[#d3c3b8] rounded-t">
                        <h1 className="text-xl sm:text-2xl font-bold text-center">
                            Related Projects
                        </h1>
                        <button
                            type='button'
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center'
                            onClick={() => setShowModal(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    <div className='p-4'>
                        <p className="mt-2 text-xs sm:text-sm">
                            Here you can find more details about the {experience.title} project.
                        </p>
                        <hr className='border-[2px] mt-2 border-[#d3c3b8]' />
                        <ul className="flex flex-col gap-4 mt-5">
                            {experience.relatedProjects.map((project, index) => (
                                <li key={index} className="flex flex-col sm:flex-row items-center gap-4">
                                    <img
                                        src={project.projectImage}
                                        alt={`Project ${index + 1}`}
                                        className="shadow-md rounded-lg bg-slate-50 w-24 h-24 object-cover"
                                    />
                                    <div className="flex flex-row justify-between items-center w-full xs:flex-row">
                                        <div className="flex-1">
                                            <h3 className="text-slate-900 font-semibold text-xs xs:text-sm sm:text-base">
                                                <span className="block text-xs sm:text-sm text-indigo-500">{project.projectTitle}</span>
                                                {project.description}
                                            </h3>
                                            <div className="prose prose-slate prose-sm text-slate-600 line-clamp-3">
                                                <p>{project.projectDescription}</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-4 ml-4">
                                            <a href={project.GitHub} target="_blank" rel="noopener noreferrer">
                                                <FaGithub size={22} />
                                            </a>
                                            <a href={project.siteURL} target="_blank" rel="noopener noreferrer">
                                                <FaWifi size={22} className="ml-1" />
                                            </a>
                                        </div>
                                    </div>


                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    );
};

ExperienceModal.propTypes = {
    activeID: PropTypes.string.isRequired,
    setShowModal: PropTypes.func.isRequired,
};

export default ExperienceModal;
