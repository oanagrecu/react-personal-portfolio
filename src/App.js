import "./Styles.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Resume from "./Pages/Home/Resume";
import MySkills from "./Pages/Home/MySkills";
import AboutMe from "./Pages/Home/AboutMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/MySkills" element={<MySkills />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/MyPortfolio" element={<MyPortfolio />} />
            <Route path="/Contact" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
// console.log(("100" + "1") - 1 == 100);
export default App;
