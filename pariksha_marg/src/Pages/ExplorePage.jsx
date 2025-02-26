import React from "react";
import VerticalTabs from "../Components/VerticalTabs";
import { motion } from "framer-motion"; // Animation library

function ExplorePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="w-full min-h-screen px-6 py-22 md:px-16 lg:px-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-6"
      >
        Explore Exams
      </motion.h1>
      
      <VerticalTabs />
    </motion.div>
  );
}

export default ExplorePage;
