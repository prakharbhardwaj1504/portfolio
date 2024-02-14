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
        <div className="nav_link"><a target='_blank' href="https://drive.google.com/file/d/1e8xJKm5qTkFFpooDNJ_S4VJ_dPKK5jg0/view?usp=drive_link"> Resume</a> </div>
    </div>

    </nav>

    )
}

export default navbar