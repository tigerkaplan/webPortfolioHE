
import PropTypes from 'prop-types';

function PortfolioCards({ item }) {
    return (
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap justify-center">
                {/* display data */}
                {item.map((val) => (
                    <div key={val.id} className="md:w-1/3 pr-4 pl-4 sm:w-1/2 relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 my-3">

                        <div className="w-full rounded rounded-t text-center">
                            <img src={val.image} alt="" className="w-3/4" />
                        </div>
                        {/* card text */}
                        <div className="flex-auto p-6">
                            <div className="mb-3 fw-bold fs-4">
                                {val.title}
                            </div>
                            <div className="mb-0">
                                {val.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

PortfolioCards.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
};

export default PortfolioCards;
