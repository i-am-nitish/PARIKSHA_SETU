import { FaCheckCircle, FaSyncAlt, FaChartBar, FaClipboardList, FaBookOpen, FaLightbulb, FaTimes } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
// Import your 3D PNG image with the provided path

const features = [
  {
    title: "Checks Eligibility",
    description: "Easily determine your eligibility for various government exams based on age, education, category, and other criteria.",
    icon: <FaCheckCircle size={24} />,
  },
  {
    title: "Number of Attempts",
    description: "Track your remaining attempts for exams with attempt limits like UPSC, SSC, and others.",
    icon: <FaSyncAlt size={24} />,
  },
  {
    title: "Detailed Exam Eligibility Chart",
    description: "Get a full, downloadable chart of all upcoming exams you're eligible for, ensuring you never miss an opportunity.",
    icon: <FaChartBar size={24} />,
  },
  {
    title: "Related Exam Suggestions",
    description: "Receive smart recommendations for similar exams based on your main exam, helping you explore more career opportunities.",
    icon: <FaLightbulb size={24} />,
  },
  {
    title: "Access Full Exam Syllabus",
    description: "View and download the complete, structured syllabus for your main exam to streamline your preparation.",
    icon: <FaBookOpen size={24} />,
  },
  {
    title: "Dynamically Updated Eligibility Tracker",
    description: "Automatically adjusts eligibility based on official exam guidelines, ensuring up-to-date information.",
    icon: <FaClipboardList size={24} />,
  },
  {
    title: "Dynamically Updated Eligibility Tracker",
    description: "Automatically adjusts eligibility based on official exam guidelines, ensuring up-to-date information.",
    icon: <FaClipboardList size={24} />,
  },
];

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-8 mx-auto max-w-7xl border-2 border-gray-400 rounded-lg">
      {Array.from({ length: Math.ceil(features.length / 2) }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-col sm:flex-row gap-6 w-full">
          {features.slice(rowIndex * 2, rowIndex * 2 + 2).map((feature, colIndex) => {
            const isFirst = colIndex === 0;
            const isEvenRow = rowIndex % 2 === 0;
            const isNarrow = (isEvenRow && isFirst) || (!isEvenRow && !isFirst);
            const isFirstCard = rowIndex === 0 && colIndex === 0;
            const isNumberOfAttemptsCard = rowIndex === 0 && colIndex === 1;
            
            return (
              <div 
                key={rowIndex * 2 + colIndex} 
                className={`
                  bg-[#ffffff] p-4 rounded-lg 
                  h-90 min-h-[190px] relative border-[2px] overflow-hidden
                  w-full transition-all duration-500 ease-in-out
                  hover:shadow-xl hover:border-blue-500
                  ${isNarrow ? 'sm:w-[30%]' : 'sm:w-[70%]'}
                  group
                `}
              >
                {/* Content container positioned at the top for first card (Check Eligibility) */}
                {isFirstCard && (
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="flex flex-col items-start text-left space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-500 transform transition-all duration-300 ease-out 
                          group-hover:scale-125">
                          {feature.icon}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 transition-all duration-400 ease-out 
                          group-hover:text-blue-600 group-hover:scale-105">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 text-left transition-all duration-500 ease-in-out 
                        opacity-100 max-h-12 overflow-hidden
                        group-hover:max-h-24">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mini form showcase for the first card - moved below the text */}
                {isFirstCard && (
                  <div className="absolute top-32 right-4 left-4 opacity-90 pointer-events-none ">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-xl shadow-lg border border-blue-100">
                      <h3 className="text-center text-sm font-medium text-indigo-700 mb-2">Check Your Eligibility</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {/* Date of Birth Field */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg border border-blue-300 shadow-sm transform transition hover:scale-105">
                          <div className="flex items-center text-white text-xs mb-1 font-medium">
                            <BsCalendarDate className="mr-1 text-yellow-300" />
                            <span>Date of Birth</span>
                          </div>
                          <div className="bg-white backdrop-blur-sm bg-opacity-90 border border-indigo-200 rounded-md p-1.5 text-xs text-gray-600">
                            <span className="text-indigo-500 font-medium">DD/MM/YYYY</span>
                          </div>
                        </div>

                        {/* Qualification Field */}
                        <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg border border-green-300 shadow-sm transform transition hover:scale-105">
                          <div className="flex items-center text-white text-xs mb-1 font-medium">
                            <FaBookOpen className="mr-1 text-yellow-300" />
                            <span>Qualification</span>
                          </div>
                          <div className="bg-white backdrop-blur-sm bg-opacity-90 border border-teal-200 rounded-md p-1.5 text-xs text-gray-600">
                            <span className="text-teal-500 font-medium">Select degree</span>
                          </div>
                        </div>
                        
                        {/* Category Field */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg border border-purple-300 shadow-sm transform transition hover:scale-105">
                          <div className="flex items-center text-white text-xs mb-1 font-medium">
                            <FaClipboardList className="mr-1 text-yellow-300" />
                            <span>Category</span>
                          </div>
                          <div className="bg-white backdrop-blur-sm bg-opacity-90 border border-pink-200 rounded-md p-1.5 text-xs text-gray-600">
                            <span className="text-purple-500 font-medium">General/OBC/SC/ST</span>
                          </div>
                        </div>
                        
                        {/* Target Exam Field */}
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg border border-orange-300 shadow-sm transform transition hover:scale-105">
                          <div className="flex items-center text-white text-xs mb-1 font-medium">
                            <FaChartBar className="mr-1 text-yellow-300" />
                            <span>Target Exam</span>
                          </div>
                          <div className="bg-white backdrop-blur-sm bg-opacity-90 border border-amber-200 rounded-md p-1.5 text-xs text-gray-600">
                            <span className="text-orange-500 font-medium">Select exam</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <button className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white text-xs py-2 px-4 rounded-md font-medium shadow-md transform transition hover:scale-105 flex items-center justify-center">
                        <span>Check Eligibility</span>
                        <FaCheckCircle className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content container positioned at the top for Number of Attempts card */}
                {isNumberOfAttemptsCard && (
                  <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="flex flex-col items-start text-left space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-500 transform transition-all duration-300 ease-out 
                          group-hover:scale-125">
                          {feature.icon}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 transition-all duration-400 ease-out 
                          group-hover:text-blue-600 group-hover:scale-105">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 text-left transition-all duration-500 ease-in-out 
                        opacity-100 max-h-12 overflow-hidden
                        group-hover:max-h-24">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Attempts showcase for the Number of Attempts card */}
                {isNumberOfAttemptsCard && (
                  <div className="absolute top-32 right-4 left-4 opacity-90 pointer-events-none ">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-3 rounded-xl shadow-lg border border-blue-100">
                      <h3 className="text-center text-sm font-medium text-indigo-700 mb-2">Exam Eligibility Status</h3>
                      
                      <div className="space-y-3">
                        {/* UPSC Civil Services - Eligible */}
                        <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-gray-800 font-medium text-xs">UPSC Civil Services</h4>
                              <div className="flex items-center mt-1">
                                <div className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded-full mr-2">
                                  Attempts: <span className="font-bold">3/6</span>
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full">
                                  Age: <span className="font-bold">Eligible</span>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                              <FaCheckCircle className="text-green-500 text-lg" />
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        
                        {/* SSC CGL - Not Eligible */}
                        <div className="bg-gradient-to-r from-slate-100 to-gray-100 p-2 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-gray-800 font-medium text-xs">SSC CGL</h4>
                              <div className="flex items-center mt-1">
                                <div className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded-full mr-2">
                                  Attempts: <span className="font-bold">4/4</span>
                                </div>
                                <div className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full">
                                  Age: <span className="font-bold">Eligible</span>
                                </div>
                              </div>
                            </div>
                            <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                              <FaTimes className="text-red-500 text-lg" />
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content container positioned at the bottom for all other cards */}
                {(!isFirstCard && !isNumberOfAttemptsCard) && (
                  <div className="absolute bottom-4 left-4 right-4 transition-all duration-500 transform group-hover:translate-y-[-20px]">
                    <div className="flex flex-col items-start text-left space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-500 transform transition-all duration-300 ease-out 
                          group-hover:scale-125">
                          {feature.icon}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 transition-all duration-400 ease-out 
                          group-hover:text-blue-400 group-hover:scale-105">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 text-left transition-all duration-500 ease-in-out 
                        sm:opacity-0 sm:max-h-0 opacity-100 max-h-96 overflow-hidden
                        group-hover:opacity-100 group-hover:max-h-24">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;