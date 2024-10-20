import experienceData from '../../assets/data/experienceData.json';
import { FaGithub, FaWifi } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ExperienceModal = ({ activeID, setShowModal }) => {
    const experience = experienceData.find(experience => experience.id === activeID);

    // Function to handle clicks outside the modal
    const handleOverlayClick = (e) => {
        // Check if the click is on the overlay
        if (e.target.classList.contains('modal-overlay')) {
            setShowModal(false);
        }
    };

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
            <div className="max-w-[600px] z-20 overflow-y-auto">
                <div className="relative grid grid-col bg-[#e7ddd8] bg-clip-border p-4 shadow-3xl shadow-shadow-500">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-[#d3c3b8]">
                        <h1 className="text-2xl font-bold text-center">Related Projects</h1>
                        <button
                            type='button'
                            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center'
                            onClick={() => setShowModal(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className='sr-only'></span>
                        </button>
                    </div>
                    <div className='p-4 md:p-5'>
                        <p className="mt-2 text-xs">Here you can find more details about {experience.title} project.</p>
                        <hr className='border-[2px] mt-2 border-[#d3c3b8]' />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5">
                            {experience.relatedProjects.map((project, index) => (
                                <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
                                    <a href="#">
                                        <div className="relative">
                                            <img src={project.projectImage} alt={`Project ${index + 1}`} />
                                            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                        </div>
                                    </a>
                                    <div className="px-6 py-4 mb-auto">
                                        <a href="#" className="font-bold text-lg inline-block text-[#2f2f2f] transition duration-500 ease-in-out mb-2">
                                            {project.projectTitle}
                                        </a>
                                        <p className="text-[#323232] text-xs">{project.description}</p>
                                    </div>
                                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-[#d3c3b8]">
                                        <span className='py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center'>
                                            <span className="ml-1"><a href={project.GitHub}> <FaGithub size={25} /> </a></span>
                                        </span>
                                        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                            <span className="ml-1"><a href={project.siteURL}> <FaWifi size={25} className="ml-1" /> </a></span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ExperienceModal.propTypes = {
    activeID: PropTypes.string.isRequired,
    setShowModal: PropTypes.func.isRequired
};

export default ExperienceModal;
