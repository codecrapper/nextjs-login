import React from 'react'

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#303040", paddingTop: "1rem", paddingBottom: "1rem", marginTop: "2rem"}}>
            <div className="container">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" style={{color: "#948775"}}>&#169;ScrapeThis</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#948775"}}>Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#948775"}}>Privacy Policy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{color: "#948775"}}>Terms of Service</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer