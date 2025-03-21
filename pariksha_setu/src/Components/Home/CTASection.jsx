import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const CTASection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 md:py-20 ${
        isDark
          ? "bg-gradient-to-br from-indigo-900 to-purple-900"
          : "bg-gradient-to-br from-indigo-600 to-purple-700"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`max-w-5xl mx-auto bg-${
            isDark ? "gray-800" : "white"
          } rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className={`p-5 sm:p-6 md:p-8 lg:p-12`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className={`text-2xl sm:text-2xl md:text-3xl font-bold text-${
                    isDark ? "white" : "gray-900"
                  } mb-3 md:mb-4`}
                >
                  Ready to Elevate Your Exam Preparation?
                </h2>
                <p
                  className={`text-base sm:text-lg text-${
                    isDark ? "gray-300" : "gray-600"
                  } mb-5 sm:mb-6 md:mb-8`}
                >
                  Join thousands of students who've transformed their study
                  approach with Pariksha Setu's innovative tools.
                </p>

              </motion.div>
            </div>

            {/* Form */}
            <div
              className={`bg-${
                isDark ? "gray-900" : "indigo-50"
              } p-5 sm:p-6 md:p-8 lg:p-12`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3
                  className={`text-xl sm:text-xl md:text-2xl font-bold text-${
                    isDark ? "white" : "gray-900"
                  } mb-4 md:mb-6`}
                >
                  Get Early Access
                </h3>
                <form className="space-y-3 md:space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs sm:text-sm font-medium text-${
                        isDark ? "gray-300" : "gray-700"
                      } mb-1`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-${
                        isDark ? "gray-600" : "gray-300"
                      } bg-${isDark ? "gray-800" : "white"} text-${
                        isDark ? "white" : "gray-900"
                      } text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-${
                        isDark ? "indigo-400" : "indigo-500"
                      }`}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs sm:text-sm font-medium text-${
                        isDark ? "gray-300" : "gray-700"
                      } mb-1`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-${
                        isDark ? "gray-600" : "gray-300"
                      } bg-${isDark ? "gray-800" : "white"} text-${
                        isDark ? "white" : "gray-900"
                      } text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-${
                        isDark ? "indigo-400" : "indigo-500"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="educational-level"
                      className={`block text-xs sm:text-sm font-medium text-${
                        isDark ? "gray-300" : "gray-700"
                      } mb-1`}
                    >
                      Educational Level
                    </label>
                    <select
                      id="educational-level"
                      name="educational-level"
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-${
                        isDark ? "gray-600" : "gray-300"
                      } bg-${isDark ? "gray-800" : "white"} text-${
                        isDark ? "white" : "gray-900"
                      } text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-${
                        isDark ? "indigo-400" : "indigo-500"
                      }`}
                    >
                      <option value="">Select your level</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs sm:text-sm font-medium text-${
                        isDark ? "gray-300" : "gray-700"
                      } mb-1`}
                    >
                      Your Goal
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-${
                        isDark ? "gray-600" : "gray-300"
                      } bg-${isDark ? "gray-800" : "white"} text-${
                        isDark ? "white" : "gray-900"
                      } text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-${
                        isDark ? "indigo-400" : "indigo-500"
                      }`}
                      placeholder="Tell us which exams you're preparing for..."
                    ></textarea>
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <button
                      type="submit"
                      className={`w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-${
                        isDark ? "indigo-600" : "indigo-600"
                      } hover:bg-${
                        isDark ? "indigo-700" : "indigo-700"
                      } text-white text-sm md:text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                    >
                      <span>Get Started for Free</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-5 md:w-5 ml-1.5 md:ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <p
                    className={`text-center text-xs text-${
                      isDark ? "gray-400" : "gray-500"
                    } mt-3 md:mt-4`}
                  >
                    By signing up, you agree to our{" "}
                    <a
                      href="#"
                      className={`underline hover:text-${
                        isDark ? "indigo-400" : "indigo-600"
                      }`}
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className={`underline hover:text-${
                        isDark ? "indigo-400" : "indigo-600"
                      }`}
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
