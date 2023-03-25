import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import LandingPage from "./components/LandingPage";
import Register from "./components/register";
import "./App.css";

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
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
