import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Header from "./Components/Header/header.jsx";
import TimelineDemo from "./Components/Feature/Featuresdata.jsx";
import AboutUs from "./Pages/AboutUs"; // Import the AboutUs page

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<>
            <Header />
            <TimelineDemo />
          </>} />
          <Route path="/about" element={<AboutUs />} /> {/* Add AboutUs Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
