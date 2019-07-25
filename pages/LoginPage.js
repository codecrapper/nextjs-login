import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../store'

import ConfirmAlert from '../components/ConfirmAlert'
import NavBar from '../components/NavBar'
import Stats from '../components/Stats'
import ApiKeySection from '../components/ApiKeySection'
import GraphApiUse from '../components/GraphApiUse'
import PriceTable from '../components/PriceTable'
import Footer from '../components/Footer'

class LoginPage extends React.Component {
    static getInitialProps({ reduxStore }) {
        reduxStore.dispatch(fetchUserData())

        return {}
    }

    renderUserData = () => {
        if(this.props.userData) {
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
                        {console.log(this.props.userData)}
                    </div>
                    <Footer />
                </>
            )
        }
        return <h1>Hol' up punk</h1>
    }

    render() {
        return (
            <div style={{backgroundColor: "#F1F0FC"}}>
                {this.renderUserData()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        userData: state.userData,
        loading: state.loading 
    }
}

export default connect(mapStateToProps)(LoginPage)