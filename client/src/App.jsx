import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import LandingPage from "./components/LandingPage";
import Register from "./components/signup";
import "./App.css";
import Signup from "./components/signup";
import Superchat from "./components/superchat"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Superchat />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
