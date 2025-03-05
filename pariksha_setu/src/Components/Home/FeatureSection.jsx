import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const FeatureSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeFeature, setActiveFeature] = useState("pariksha-yoga");

  const features = [
    {
      id: "pariksha-yoga",
      title: "Pariksha Yoga",
      description:
        "An eligibility calculator tool that helps you discover exams perfectly matched to your qualifications and aspirations.",
      details: [
        "Personalized exam recommendations based on your profile",
        "Filter exams by subject, difficulty, and career path",
        "Stay updated with the latest exam eligibility criteria",
        "Save your favorite exams for future reference",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
          />
        </svg>
      ),
      imageSrc: "/images/eligibility-calculator.svg",
      color: "indigo",
    },
    {
      id: "pariksha-marg",
      title: "Pariksha Marg",
      description:
        "A comprehensive roadmap and mindmap for your course preparation, guiding you through the entire learning journey.",
      details: [
        "Visual learning paths for different subjects and exams",
        "Interactive mindmaps to understand complex topics",
        "Customizable study plans based on your schedule",
        "Progress tracking and milestone achievements",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
          />
        </svg>
      ),
      imageSrc: "/images/course-roadmap.svg",
      color: "purple",
    },
    {
      id: "pariksha-gyan",
      title: "Pariksha Gyan",
      description:
        "An intelligent NCERT chatbot that assists in your preparation by answering questions, explaining concepts, and providing study materials.",
      details: [
        "24/7 access to NCERT-based knowledge assistance",
        "Instant answers to your academic questions",
        "Detailed explanations for complex concepts",
        "Study material recommendations for deeper learning",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      ),
      imageSrc: "/images/ncert-chatbot.svg",
      color: "emerald",
    },
  ];

  const getFeatureDetail = (id) =>
    features.find((feature) => feature.id === id);
  const activeFeatureData = getFeatureDetail(activeFeature);

  const getColorClasses = (feature, type) => {
    const colorMap = {
      indigo: {
        light: {
          bg: "bg-indigo-100",
          text: "text-indigo-600",
          ring: "ring-indigo-500",
          button: "bg-indigo-600 hover:bg-indigo-700",
        },
        dark: {
          bg: "bg-indigo-900",
          text: "text-indigo-300",
          ring: "ring-indigo-700",
          button: "bg-indigo-600 hover:bg-indigo-700",
        },
      },
      purple: {
        light: {
          bg: "bg-purple-100",
          text: "text-purple-600",
          ring: "ring-purple-500",
          button: "bg-purple-600 hover:bg-purple-700",
        },
        dark: {
          bg: "bg-purple-900",
          text: "text-purple-300",
          ring: "ring-purple-700",
          button: "bg-purple-600 hover:bg-purple-700",
        },
      },
      emerald: {
        light: {
          bg: "bg-emerald-100",
          text: "text-emerald-600",
          ring: "ring-emerald-500",
          button: "bg-emerald-600 hover:bg-emerald-700",
        },
        dark: {
          bg: "bg-emerald-900",
          text: "text-emerald-300",
          ring: "ring-emerald-700",
          button: "bg-emerald-600 hover:bg-emerald-700",
        },
      },
    };

    const color = feature.color;
    const mode = isDark ? "dark" : "light";
    return colorMap[color][mode][type];
  };

  return (
    <section
      id="features"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            } mb-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Empower Your Exam Preparation
          </motion.h2>
          <motion.p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our innovative tools work together to provide a complete solution
            for your competitive exam journey
          </motion.p>
        </div>

        {/* Feature Selector Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFeature === feature.id
                  ? `${getColorClasses(feature, "bg")} ${getColorClasses(
                      feature,
                      "text"
                    )} ring-2 ${getColorClasses(feature, "ring")}`
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className={getColorClasses(feature, "text")}>
                {feature.icon}
              </span>
              {feature.title}
            </button>
          ))}
        </motion.div>

        {/* Feature Detail */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Feature Description */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`inline-flex items-center justify-center p-3 rounded-lg ${getColorClasses(
                activeFeatureData,
                "bg"
              )} ${getColorClasses(activeFeatureData, "text")} mb-6`}
            >
              {activeFeatureData.icon}
            </div>
            <h3
              className={`text-2xl md:text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              {activeFeatureData.title}
            </h3>
            <p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-6`}
            >
              {activeFeatureData.description}
            </p>
            <ul className="space-y-3">
              {activeFeatureData.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                >
                  <span
                    className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${getColorClasses(
                      activeFeatureData,
                      "bg"
                    )} ${getColorClasses(
                      activeFeatureData,
                      "text"
                    )} flex items-center justify-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {detail}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={`#try-${activeFeatureData.id}`}
                className={`inline-flex items-center px-6 py-3 text-base font-medium text-white ${getColorClasses(
                  activeFeatureData,
                  "button"
                )} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 ${getColorClasses(
                  activeFeatureData,
                  "ring"
                )} focus:ring-offset-2`}
              >
                Try {activeFeatureData.title} Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Feature Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className={`relative rounded-xl overflow-hidden shadow-xl p-1 ${
                isDark
                  ? "bg-gradient-to-r from-gray-800 to-gray-700"
                  : "bg-gradient-to-r from-gray-200 to-white"
              } max-w-md`}
            >
              <img
                src={activeFeatureData.imageSrc}
                alt={activeFeatureData.title}
                className="rounded-lg w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/600x400/${
                    activeFeatureData.color
                  }/white?text=${encodeURIComponent(activeFeatureData.title)}`;
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
