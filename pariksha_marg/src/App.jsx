import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Header from "./Components/Header/header.jsx";
import InfinityImgScroll from "./Components/InfinityImgScroll/InfinityImgScroll.jsx"; // Add this import
import TimelineDemo from "./Components/Feature/Featuresdata.jsx";
import AboutUs from "./Pages/AboutUs";
import ExplorePage from "./Pages/explorepage.jsx"; // Ensure path is correct
import Footer from "./Components/Footer/footer.jsx";
import FAQS from "./Components/FAQS/faqs.jsx";
import InfinityExams from "./Components/Infinityexams/infinityexams.jsx"; // Add thi import
import ContactPage from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="w-full ">
                <InfinityImgScroll />
                </div>
                
                <TimelineDemo /> <InfinityExams />{" "}
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/contact" element={<ContactPage />} />
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
