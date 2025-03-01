import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Header from "./Components/Header/header.jsx";
import Footer from "./Components/Footer/footer.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";

// Theme wrapper to apply classes to html element
const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Apply dark mode class to html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Router>
          <div className="bg-white dark:bg-gray-900 min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<><Header /><HomePage /></>} />
              <Route path="/pariksha-yoga" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Pariksha Yoga Coming Soon</div></>} />
              <Route path="/pariksha-marg" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Pariksha Marg Coming Soon</div></>} />
              <Route path="/pariksha-gyan" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Pariksha Gyan Coming Soon</div></>} />
              <Route path="/about" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">About Us Coming Soon</div></>} />
              <Route path="/contact" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Contact Us Coming Soon</div></>} />
              <Route path="/login" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Login Coming Soon</div></>} />
              <Route path="/register" element={<><Header /><div className="pt-24 pb-16 text-center text-gray-800 dark:text-gray-200">Register Coming Soon</div></>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
