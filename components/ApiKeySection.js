import React from 'react'
import { connect } from 'react-redux'

const ApiKeySection = ({ userData }) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Your API Key
                </div>
                <div className="card-body">
                    <h5 className="card-title">Your API key:</h5>
                    <p className="card-text" style={{color: "#CA254E", backgroundColor: "#F9F2F4"}}>{userData.key}</p>
                    <hr className="my-4" />
                    <h5>Test ScrapeThis.io right now</h5>
                        <div class="card bg-light mb-3">
                            <div class="card-body">
                                <p class="card-text">$ curl api.scrapethis.io?key=[KEY]&url=https://example.com
</p>
                            </div>
                        </div>
                    <p>Or go read full documentation <a href="#">here</a></p>
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

export default connect(mapStateToProps)(ApiKeySection)