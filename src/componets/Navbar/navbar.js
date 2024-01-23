import React from "react";
import "./navbar.css"

function navbar(){
    return(
    <nav className="navbar">
    <div className="heading">Prakhar Bhardwaj</div>
    <div className="linklist">
        <div className="nav_link"><a href="window.location.href"> About</a> </div>
        <div className="nav_link"><a href="window.location.href"> Home</a> </div>
        <div className="nav_link"><a href="window.location.href"> Contact</a> </div>
        <div className="nav_link"><a href="window.location.href"> Resume</a> </div>
    </div>

    </nav>

    )
}

export default navbar