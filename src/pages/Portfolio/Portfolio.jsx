import { useState } from 'react';

import Data from '../../assets/data/portfolioData.json'
import PortfolioCards from './PortfolioCards'
import PortfolioButtons from './PortfolioButtons'



const Portfolio = () => {
    const [item, setItems] = useState(Data)


    const menuItems = [...new Set(Data.map((val) => val.category))]

    // filter functions by category

    const filterItems = (cat) => {
        const newItems = Data.filter((newVal) => newVal.category === cat)
        setItems(newItems)
    }



    return (
        <div name="portfolio" className="w-full h-screen bg-[#DDD0C8] text-[#402b4c]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className="sm:text-right pb-8 pl-4">
                    <p className='  text-[#402b4c] text-3xl font-bold inline border-b-4 border-[#44195e] sm:text-right '>Portfolio</p>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    <PortfolioButtons
                        menuItems={menuItems}
                        filterItems={filterItems}
                        setItems={setItems}
                    />
                    <PortfolioCards item={item} />

                    </div>




                </div>
            </div>
        </div>
    )

}
export default Portfolio;
