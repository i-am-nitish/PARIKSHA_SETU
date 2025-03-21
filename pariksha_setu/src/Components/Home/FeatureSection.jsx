import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const FeatureSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeFeature, setActiveFeature] = useState("pariksha-yogya");

  const features = [
    {
      id: "pariksha-yogya",
      title: "Pariksha Yogya",
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
          width="30"
          height="30"
          viewBox="0 0 250 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 9.12014C0 5.17224 4.36059 2.7816 7.68897 4.90475L122.311 78.0216C123.951 79.0677 126.049 79.0677 127.689 78.0216L242.311 4.90475C245.639 2.78159 250 5.17223 250 9.12014V66.747C250 68.4466 249.137 70.0299 247.708 70.9503L127.708 148.256C126.059 149.318 123.941 149.318 122.292 148.256L2.29219 70.9503C0.86339 70.0299 0 68.4467 0 66.747V9.12014Z"
            fill="#578EE0"
          />
          <path
            d="M0 175C0 172.239 2.23858 170 5 170H245C247.761 170 250 172.239 250 175V224.538C250 227.3 247.761 229.538 245 229.538H74.8069C73.0472 229.538 71.4171 230.463 70.5146 231.974L9.29228 334.447C6.68885 338.804 0 336.958 0 331.882V175Z"
            fill="#F47200"
          />
        </svg>
      ),
      imageSrc: "/images/eligibility-calculator.jpeg",
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
          width="30"
          height="30"
          viewBox="0 0 335 382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M265.038 32.3345C265.814 30.6414 267.434 29.5836 269.241 29.5894L325.746 29.7706C329.4 29.7823 331.89 33.9029 330.309 37.3195L184.42 352.436C182.632 356.298 177.303 355.997 175.609 351.938L150.229 291.108C149.062 288.311 149.094 285.163 150.317 282.496L265.038 32.3345Z"
            fill="#F47200"
          />
          <path
            d="M145.566 29.6576C149.53 29.6576 151.917 34.0501 149.762 37.3768L118.242 86.0152C117.321 87.4366 115.743 88.295 114.05 88.2961L10.5148 88.3629C6.82822 88.3653 4.40683 84.5131 6.00746 81.1921L28.1181 35.3159C29.7854 31.8566 33.2863 29.6576 37.1265 29.6576L145.566 29.6576Z"
            fill="#578EE0"
          />
          <path
            d="M26.6023 166.614C22.5329 166.614 20.1679 171.216 22.537 174.525L57.374 223.18C58.3129 224.491 59.8266 225.269 61.4394 225.269L150.085 225.269C154.189 225.269 156.546 220.596 154.105 217.296L119.628 170.669C117.742 168.118 114.759 166.614 111.587 166.614L26.6023 166.614Z"
            fill="#578EE0"
          />
          <path
            d="M176.056 214.981C176.056 219.77 169.972 221.819 167.074 218.005L123.268 160.349C122.608 159.479 122.25 158.417 122.25 157.324V97.4995C122.25 96.5466 122.522 95.6135 123.035 94.8101L157.625 40.5963C163.003 32.1675 176.056 35.9768 176.056 45.9751L176.056 214.981Z"
            fill="#578EE0"
          />
          <path
            d="M1.40444e-06 178.73C9.51359e-07 173.941 6.08386 171.892 8.98125 175.705L52.7871 233.362C53.448 234.232 53.8058 235.294 53.8058 236.387V296.211C53.8058 297.164 53.5335 298.097 53.0209 298.901L18.4302 353.114C13.0523 361.543 1.83385e-05 357.734 1.73926e-05 347.736L1.40444e-06 178.73Z"
            fill="#578EE0"
          />
        </svg>
      ),
      imageSrc: "/images/course-roadmap.jpeg",
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
          width="30"
          height="30"
          viewBox="0 0 313 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.6645 120.74C72.6645 118.913 73.6608 117.231 75.2633 116.354L124.551 89.3688C127.883 87.5445 131.952 89.9557 131.952 93.7545V335.745C131.952 339.721 127.537 342.106 124.211 339.927L77.1832 309.107C74.3633 307.259 72.6645 304.115 72.6645 300.743V120.74Z"
            fill="#F47200"
          />
          <path
            d="M1.33398 89.0077C1.33398 85.037 5.73957 82.6506 9.06541 84.8197L58.353 116.965C59.7683 117.888 60.6216 119.464 60.6216 121.153V287.716C60.6216 291.692 56.2062 294.077 52.881 291.898L5.85268 261.078C3.03282 259.23 1.33398 256.085 1.33398 252.714V89.0077Z"
            fill="#578EE0"
          />
          <path
            d="M134.126 70.9202C135.619 70.1004 136.527 68.5648 136.527 66.8607L136.527 9.1823C136.527 5.2543 132.019 2.67543 128.649 4.67553L19.0209 69.7386C15.9324 71.5716 16.0215 76.008 19.1879 78.0469L60.8017 104.843C64.0656 106.944 68.1718 107.144 71.4222 105.359L134.126 70.9202Z"
            fill="#F47200"
          />
          <path
            d="M149.27 70.9202C147.777 70.1004 146.869 68.5648 146.869 66.8607L146.869 9.1823C146.869 5.2543 151.377 2.67543 154.747 4.67553L264.375 69.7386C267.464 71.5716 267.375 76.008 264.208 78.0469L222.595 104.843C219.331 106.944 215.224 107.144 211.974 105.359L149.27 70.9202Z"
            fill="#F47200"
          />
          <path
            d="M149.044 278.679C147.682 279.528 146.869 280.995 146.869 282.606L146.869 335.233C146.869 339.161 151.377 341.74 154.747 339.74L264.375 274.677C267.464 272.844 267.375 268.407 264.208 266.368L222.918 239.781C219.487 237.572 215.144 237.473 211.845 239.53L149.044 278.679Z"
            fill="#F47200"
          />
          <path
            d="M219.42 224.036C219.42 225.475 220.095 226.8 221.262 227.652L263.936 258.809C267.277 261.248 272.356 258.695 272.356 254.576L272.356 157.86C272.356 155.298 270.252 153.303 267.55 153.303L222.475 153.303C216.564 153.303 211.563 158.045 211.563 163.651L211.563 180.658C211.563 182.753 213.282 184.383 215.491 184.383V184.383C217.7 184.383 219.42 186.014 219.42 188.108L219.42 224.036Z"
            fill="#F47200"
          />
          <path
            d="M206.988 184.454C206.988 185.955 206.314 187.376 205.151 188.326L155.864 228.592C152.598 231.26 147.7 228.937 147.7 224.72V94.0311C147.7 90.3002 151.639 87.8836 154.965 89.5734L201.517 113.223C204.874 114.929 206.988 118.374 206.988 122.139V184.454Z"
            fill="#578EE0"
          />
        </svg>
      ),
      imageSrc: "/images/ncert-chatbot.webp",
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
          className="flex flex-row justify-center gap-2 lg:gap-4 mb-6 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`px-2 md:px-6 py-2 md:py-3 rounded-2xl text-xs md:text-base font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 ${
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
              <span className="whitespace-nowrap">{feature.title}</span>
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
            {" "}
            <div className="flex flex-row justify-left">
              <div
                className={`justify-center p-3 rounded-lg ${getColorClasses(
                  activeFeatureData,
                  "bg"
                )} ${getColorClasses(activeFeatureData, "text")} mb-6`}
              >
                {activeFeatureData.icon}
              </div>
              <div className={"basis-2/3 ml-6 flex flex-col justify-center"}>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-4`}
                >
                  {activeFeatureData.title}
                </h3>
              </div>
            </div>
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
