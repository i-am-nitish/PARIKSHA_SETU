import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, language } = useTheme();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    scrolled 
      ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-2" 
      : "bg-white dark:bg-gray-900 py-2"
  }`;

  const linkClasses = "relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300";
  const activeLinkClasses = "text-indigo-600 dark:text-indigo-400 font-medium";

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Navigation links with language support
  const navLinks = [
    { path: "/", label: language === 'en' ? "Home" : "होम" },
    { path: "/pariksha-yoga", label: language === 'en' ? "Pariksha Yoga" : "परीक्षा योग" },
    { path: "/pariksha-marg", label: language === 'en' ? "Pariksha Marg" : "परीक्षा मार्ग" },
    { path: "/pariksha-gyan", label: language === 'en' ? "Pariksha Gyan" : "परीक्षा ज्ञान" },
    { path: "/about", label: language === 'en' ? "About Us" : "हमारे बारे में" },
    { path: "/contact", label: language === 'en' ? "Contact" : "संपर्क" }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src="/images/logo.svg"
                alt="Pariksha Setu"
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x40/indigo/white?text=Pariksha+Setu";
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-1"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`${linkClasses} ${isActiveLink(link.path) ? activeLinkClasses : ""}`}
                >
                  {link.label}
                  {isActiveLink(link.path) && (
                    <motion.span 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400"
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-transparent border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {language === 'en' ? "Login" : "लॉगिन"}
            </Link>
            <Link 
              to="/register" 
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg shadow-sm hover:shadow transition-all duration-300"
            >
              {language === 'en' ? "Register" : "रजिस्टर"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActiveLink(link.path) 
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800" 
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col space-y-2 px-3">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-transparent border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800"
                >
                  {language === 'en' ? "Login" : "लॉगिन"}
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 text-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg"
                >
                  {language === 'en' ? "Register" : "रजिस्टर"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;