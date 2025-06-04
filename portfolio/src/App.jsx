import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Services from "./Components/Services/Services.jsx";
import Latestwork from "./Components/Latestwork/Latestwork.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Hero/>
      <About/>
      <Services/>
      <Latestwork/>
      <Contact/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Latestwork" element={<Latestwork/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
    </Router>
  );
};

export default App;
