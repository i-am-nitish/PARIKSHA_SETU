import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-indigo-50 to-white"
      } py-20 sm:py-28`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 opacity-20">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4F46E5"
              d="M42.7,-62.9C54.9,-51.4,63.8,-37.1,67.7,-22.1C71.6,-7.1,70.5,8.5,64.4,21.7C58.2,34.8,47,45.5,34.5,53.7C22,61.9,8.3,67.6,-5.9,66.9C-20,66.1,-39.9,59,-55.1,45.8C-70.4,32.7,-81,13.5,-80.2,-5.2C-79.4,-23.9,-67.2,-42.2,-52,-55.8C-36.8,-69.5,-18.4,-78.5,-1.2,-76.9C16,-75.4,30.4,-74.4,42.7,-62.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-20">
          <svg
            width="300"
            height="300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4338CA"
              d="M48.2,-64.8C62.7,-55,74.5,-40.6,79.6,-24.4C84.7,-8.2,83.2,9.7,76.7,25.5C70.3,41.3,58.9,55,44.3,64.8C29.7,74.7,11.9,80.7,-3.9,77.7C-19.6,74.7,-33.3,62.6,-47.5,49.9C-61.7,37.2,-76.4,23.8,-79.8,7.8C-83.2,-8.2,-75.3,-26.7,-63.2,-38.6C-51.1,-50.5,-34.8,-55.7,-19.9,-58.1C-5,-60.5,8.6,-59.9,22.8,-61.5C37,-63.1,51.7,-67,62.7,-62.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Hero Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } leading-tight`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Path to{" "}
              <span className={isDark ? "text-indigo-400" : "text-indigo-600"}>
                Success
              </span>{" "}
              in Competitive Exams
            </motion.h1>

            <motion.p
              className={`mt-6 text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pariksha Setu brings advanced tools and personalized guidance to
              help you navigate your exam preparation journey with confidence.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#features"
                className="px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Explore Features
              </a>
              <a
                href="#contact"
                className={`px-8 py-3 text-base font-medium ${
                  isDark
                    ? "text-indigo-400 bg-gray-800 hover:bg-gray-700 border-gray-600"
                    : "text-indigo-600 bg-white hover:bg-gray-50 border-indigo-200"
                } border rounded-lg shadow-sm hover:shadow transition-all duration-300`}
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className={`absolute -top-6 -right-6 w-24 h-24 ${
                  isDark ? "bg-yellow-500" : "bg-yellow-300"
                } rounded-full opacity-50`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className={`absolute -bottom-4 -left-4 w-16 h-16 ${
                  isDark ? "bg-indigo-600" : "bg-indigo-300"
                } rounded-full opacity-50`}
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              <img
                src="/images/hero-students.svg"
                alt="Students preparing for exams"
                className="relative z-10 rounded-xl shadow-2xl w-full object-cover max-h-[500px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/indigo/white?text=Pariksha+Setu";
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-500"
            } mb-2`}
          >
            Scroll Down
          </span>
          <motion.div
            className={`w-6 h-10 border-2 ${
              isDark ? "border-gray-500" : "border-gray-400"
            } rounded-full flex justify-center pt-2`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className={`w-1.5 h-3 ${
                isDark ? "bg-gray-500" : "bg-gray-400"
              } rounded-full`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
