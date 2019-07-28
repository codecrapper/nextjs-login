import React from 'react'
import { connect } from 'react-redux'
import { userLogOut } from '../store'
import Link from 'next/link'

const NavBar = ({ dispatch }) => {

    const logOutClick = () => {
        dispatch(userLogOut())
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#5F41F3", padding: "10px"}}>
            <div className="container">
                <Link href="/LoginPage"><img style={{ width: "6rem", overflow: "hidden"}} src="https://scrapethis.io/images/logo.png" /></Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/PlanPrices"><button className="btn btn-success my-2 my-sm-0" type="submit">Upgrade</button></Link>
                    </li>
                    <li className="nav-item" style={{paddingLeft: ".5rem"}}>
                        <Link href="/index"><button onClick={logOutClick} className="btn btn-light my-2 my-sm-0" type="submit">Logout</button></Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default connect()(NavBar)

// const NavBar = () => {
//     return (
//         <nav style={{backgroundColor: "teal", padding: "10px"}}>
//             {/* <ul className="nav justify-content-end"> */}
//             <ul className="nav">
//                 <li className="nav-item">
//                     <Link href="/index"><img style={{ width: "25%", overflow: "hidden"}} src="https://scrapethis.io/images/logo.png" /></Link>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//     <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//     <div className="dropdown-menu">
//       <a className="dropdown-item" href="#">Action</a>
//       <a className="dropdown-item" href="#">Another action</a>
//       <a className="dropdown-item" href="#">Something else here</a>
//       <div className="dropdown-divider"></div>
//       <a className="dropdown-item" href="#">Separated link</a>
//     </div>
//   </li>
//             </ul>
//         </nav>
//     )
// }

// export default NavBar