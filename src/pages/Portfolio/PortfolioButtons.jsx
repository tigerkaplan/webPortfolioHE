import Data from '../../assets/data/portfolioData.json'
import PropTypes from 'prop-types';



function PortfolioButtons({ menuItems, filterItems, setItems }) {
    return (
        <div className="flex justify-center">
            {/* Button to filter all items */}
            <button
                className='bg-gray-900 text-white hover:bg-gray-900 p-1 mx-5 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline fw-bold'
                onClick={() => setItems(Data)}// Filter all items
            >
                All
            </button>

            {/* Map over menuItems and create a button for each */}
            {
                menuItems.map((val, index) => (
                    <button key={index} className='btn-dark text-white p-1 mx-5 btn fw-bold'
                        onClick={() => filterItems(val)}>
                        {val}
                    </button>
                ))
            }

        </div>
    );
}

PortfolioButtons.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    filterItems: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired
};

export default PortfolioButtons;
