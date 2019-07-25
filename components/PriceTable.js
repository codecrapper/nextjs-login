import React from 'react'

const PriceTable = () => {
    return (
        <div className="row" style={{paddingTop: "2rem"}}>

            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header">Basic</h5>
                    <div className="card-body">
                        <h5 className="card-title">Free</h5>
                        <p>- 1,000 calls / month</p>
                        <p>- 1 max concurrent requests</p>
                        <p>- Javascript rendering</p>
                        <p>- Rotating proxies</p>
                        <a href="#" className="btn btn-primary">Upgrade</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header">Starter</h5>
                    <div className="card-body">
                        <h5 className="card-title">$9.99 / month</h5>
                        <p>- 10,000 calls / month</p>
                        <p>- 2 max concurrent requests</p>
                        <p>- Javascript rendering</p>
                        <p>- Rotating proxies</p>
                        <a href="#" className="btn btn-primary">Upgrade</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header">Pro</h5>
                    <div className="card-body">
                        <h5 className="card-title">$29.99 / month</h5>
                        <p>- 50,000 calls / month</p>
                        <p>- 5 max concurrent requests</p>
                        <p>- Javascript rendering</p>
                        <p>- Rotating proxies</p>
                        <a href="#" className="btn btn-primary">Upgrade</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PriceTable