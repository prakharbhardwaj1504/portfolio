import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom"

function navbar(){
    return(
    <nav className="navbar">
    <div className="heading"><Link to="/">Prakhar Bhardwaj</Link></div>
    <div className="linklist">
        <div className="nav_link"><Link to='/'> Home</Link> </div>
        <div className="nav_link"><Link to="/about"> About</Link> </div>
        <div className="nav_link"><Link to="/Contact"> Contact</Link> </div>
        <div className="nav_link"><a href="window.location.href"> Resume</a> </div>
    </div>

    </nav>

    )
}

export default navbar