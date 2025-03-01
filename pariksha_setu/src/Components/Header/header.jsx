import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <div className="hidden md:flex fixed top-4 right-6 z-50 items-center gap-4">
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className={`relative rounded-full w-12 h-6 flex items-center transition-colors duration-300 ease-in-out focus:outline-none ${
          theme === 'dark' 
            ? 'bg-indigo-600' 
            : 'bg-gray-200'
        }`}
        whileTap={{ scale: 0.9 }}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.span 
          className={`absolute left-1 top-1 bg-white dark:bg-gray-800 w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
        >
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-indigo-200" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </motion.span>
      </motion.button>

      {/* Language Toggle */}
      <motion.button 
        onClick={toggleLanguage}
        className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
        whileTap={{ scale: 0.95 }}
        aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
      >
        {language === 'en' ? 'EN' : 'हिं'}
        <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
          → {language === 'en' ? 'हिं' : 'EN'}
        </span>
      </motion.button>
    </div>
  );
};

export default Header;