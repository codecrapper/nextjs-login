import React from 'react'
import { connect } from 'react-redux'

const Stats = ({ userData }) => {
    return (
        <div className="row">
        <div className="col-md-3">
            <div className="card border-success text-dark mb-5" style={{height: '120px'}}>
                <div className="card-body">
                    <p className="card-title">Current API usage</p>
                    <h5 className="card-text">{userData.usage_this_month}</h5>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card border-success text-dark mb-5" style={{height: '120px'}}>
                <div className="card-body">
                    <p className="card-title">API limit</p>
                    <h5 className="card-text">{userData.current_subscription_limit}</h5>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card border-success text-dark mb-5" style={{height: '120px'}}>
                <div className="card-body">
                    <p className="card-title">End current subscription</p>
                    <h5 className="card-text">{userData.billing_end_date}</h5>
                </div>
            </div>
        </div>
        
        <div className="col-md-3">
            <div className="card border-success text-dark mb-5" style={{height: '120px'}}>
                <div className="card-body">
                    <p className="card-title">Concurrent call allowed</p>
                    <h5 className="card-text">0/1</h5>
                </div>
            </div>
        </div>

    </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Stats)