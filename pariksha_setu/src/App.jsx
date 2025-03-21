import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutUs from "./Pages/About/AboutUs.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/pariksha-yoga"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Pariksha Yoga Coming Soon
                  </div>
                </>
              }
            />
            <Route
              path="/pariksha-marg"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Pariksha Marg Coming Soon
                  </div>
                </>
              }
            />
            <Route
              path="/pariksha-gyan"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Pariksha Gyan Coming Soon
                  </div>
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Contact Us Coming Soon
                  </div>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Login Coming Soon
                  </div>
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <div className="pt-24 pb-16 text-center">
                    Register Coming Soon
                  </div>
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;