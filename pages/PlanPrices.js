import React from 'react'

import NavBar from '../components/NavBar'
import PriceTable from '../components/PriceTable'

const PlanPrices = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <PriceTable />
            </div>
        </div>
    )
}

export default PlanPrices