import React from "react";
import Navbar from "./componets/Navbar/navbar";
import Intro1 from "./componets/intro1/intro1";
import About from "./componets/about/about";
import Contact from "./componets/contact/contact"
import Resume from "./componets/resume/resume"

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />
     
      <Routes>
        <Route path='/about' element={<About/>}>
          
        </Route>
        <Route path='/' element={<Intro1/>}>
          
        </Route>
        <Route path='/contact' element={<Contact/>}>
          
        </Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
