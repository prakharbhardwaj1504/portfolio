import React from "react";
import "./resume.css";

function Resume() {

    // const imagePath = process.env.PUBLIC_URL + "/favicon/RA2111003030420_PRAKHAR_BHARDWAJ CV";
    const imagePath="https://drive.google.com/file/d/1ln_LVkDSKyfdNW40c9QnwRm8WKRT8Q99/view?usp=drive_link"
  
  return ( <div className="resume">Resume
  
  
  <div>
 <iframe src={imagePath} width='100%' height='500px' />
 </div></div> );
}

export default Resume;
