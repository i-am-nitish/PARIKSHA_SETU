import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Header from "./Components/Header/header.jsx";
import InfinityImgScroll from "./Components/InfinityImgScroll/InfinityImgScroll.jsx"; // Add this import
import TimelineDemo from "./Components/Feature/Featuresdata.jsx";
import AboutUs from "./Pages/AboutUs";
import ExplorePage from "./Pages/ExplorePage"; // Ensure path is correct
import Footer from "./Components/Footer/footer.jsx";
import FAQS from "./Components/FAQS/faqs.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<><Header /><InfinityImgScroll /><TimelineDemo /> </>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
      <div>
        <FAQS />
      </div>
      <Footer />
    </Router>
  );
}

export default App;