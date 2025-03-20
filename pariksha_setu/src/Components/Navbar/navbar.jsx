import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

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
      ? theme === "light"
        ? "bg-white/95 backdrop-blur-sm shadow-lg py-1"
        : "bg-gray-900/95 backdrop-blur-sm shadow-lg py-1"
      : theme === "light"
      ? "bg-white py-1"
      : "bg-gray-900 py-1"
  }`;

  // Adjusted link classes with smaller padding and font size for iPad
  const linkClasses = `relative px-2 py-1 transition-colors duration-300 text-sm md:text-xs lg:text-sm ${
    theme === "light"
      ? "text-gray-700 hover:text-indigo-600"
      : "text-gray-300 hover:text-indigo-400"
  }`;

  const activeLinkClasses =
    theme === "light"
      ? "text-indigo-600 font-medium"
      : "text-indigo-400 font-medium";

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Navigation links with language support
  const navLinks = [
    { path: "/", label: language === "en" ? "Home" : "होम" },
    {
      path: "/pariksha-yogya",
      label: language === "en" ? "Pariksha Yogya" : "परीक्षा योग",
    },
    {
      path: "/pariksha-marg",
      label: language === "en" ? "Pariksha Marg" : "परीक्षा मार्ग",
    },
    {
      path: "/pariksha-gyan",
      label: language === "en" ? "Pariksha Gyan" : "परीक्षा ज्ञान",
    },
    {
      path: "/about",
      label: language === "en" ? "About Us" : "हमारे बारे में",
    },
    { path: "/contact", label: language === "en" ? "Contact" : "संपर्क" },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo - reduced height */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src="/logos/ps.svg"
                alt="Pariksha Setu"
                className="h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x40/indigo/white?text=Pariksha+Setu";
                }}
              />
            </Link>
            <Link to="/" className=" ml-6 flex-shrink-0 group">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                src="/logos/ps_name.svg"
                alt="Pariksha Setu"
                className="h-6 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/100x40/indigo/white?text=Pariksha+Setu";
                }}
              />
            </Link>
          </div>

          {/* Desktop Menu with adjusted spacing */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-0.5 lg:space-x-1"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${linkClasses} ${
                    isActiveLink(link.path) ? activeLinkClasses : ""
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.path) && (
                    <motion.span
                      layoutId="navIndicator"
                      className={`absolute bottom-0 left-0 w-full h-0.5 ${
                        theme === "light" ? "bg-indigo-600" : "bg-indigo-400"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons - reduced size */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`relative rounded-full w-10 h-5 flex items-center shadow-md border transition-colors duration-300 ease-in-out focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600"
                  : "bg-indigo-100 border-indigo-200"
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <motion.span
                className={`absolute left-1 top-1 w-3 h-3 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
                  theme === "dark"
                    ? "bg-indigo-500 translate-x-5"
                    : "bg-white translate-x-0 border border-indigo-200"
                }`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30,
                }}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.span>
            </motion.button>

            {/* Language Toggle - smaller button
            <motion.button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm hover:bg-gray-50 transition-colors duration-300 focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label={
                language === "en" ? "Switch to Hindi" : "Switch to English"
              }
            >
              {language === "en" ? "EN" : "हिं"}
              <span
                className={`ml-1 text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                → {language === "en" ? "हिं" : "EN"}
              </span>
            </motion.button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`relative rounded-full w-8 h-4 flex items-center shadow-sm border transition-colors duration-300 ease-in-out focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600"
                  : "bg-indigo-100 border-indigo-200"
              }`}
              whileTap={{ scale: 0.9 }}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <motion.span
                className={`absolute left-0.5 top-0.5 w-3 h-3 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
                  theme === "dark"
                    ? "bg-indigo-500 translate-x-4"
                    : "bg-white translate-x-0 border border-indigo-200"
                }`}
                layout
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30,
                }}
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </motion.span>
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            className={`md:hidden bg-white dark:bg-gray-900 shadow-lg ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    isActiveLink(link.path)
                      ? theme === "light"
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-indigo-400 bg-gray-800"
                      : theme === "light"
                      ? "hover:text-indigo-600 hover:bg-indigo-50"
                      : "hover:text-indigo-400 hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
