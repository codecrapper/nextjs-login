import React from 'react'

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#303040", paddingTop: "1rem", paddingBottom: "1rem", marginTop: "2rem"}}>
            <div className="container">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" style={{color: "#948775"}}>&#169;ScrapeThis</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: "#948775"}}>Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: "#948775"}}>Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" style={{color: "#948775"}}>Terms of Service</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer