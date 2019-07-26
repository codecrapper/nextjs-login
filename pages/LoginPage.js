import React from 'react'
import { fetchUserData } from '../store'

import ConfirmAlert from '../components/ConfirmAlert'
import NavBar from '../components/NavBar'
import Stats from '../components/Stats'
import ApiKeySection from '../components/ApiKeySection'
import GraphApiUse from '../components/GraphApiUse'
import PriceTable from '../components/PriceTable'
import Footer from '../components/Footer'

const LoginPage = ({ userData }) => {

const renderUserData = () => {
    return (
        <>
            <ConfirmAlert />
            <NavBar />
            <div className="container">
                <br /><br />
                <Stats />
                <ApiKeySection />
                <GraphApiUse />
                <PriceTable />
                {console.log(userData)}
            </div>
            <Footer />
        </>
    )

}

    return (
        <div style={{backgroundColor: "#F1F0FC"}}>
            {renderUserData()}
        </div>
    )
}

LoginPage.getInitialProps = async({ reduxStore }) => {
    await reduxStore.dispatch(fetchUserData())

    return {
        userData: reduxStore.getState().userData
    }
}

export default LoginPage