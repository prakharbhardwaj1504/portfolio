import React  from "react";
import "./footer.css";

function Footer(){

    const d=new Date();
    let year =d.getFullYear();
    return( 
    <div className="mainfooter">
    <div className="footer">Prakhar Bhardwaj &copy; {year} </div> 
    </div>
    )
}

export default Footer;