import { FaCheckCircle, FaSyncAlt, FaChartBar, FaClipboardList, FaBookOpen, FaLightbulb } from "react-icons/fa";
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
];

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-6 px-4 py-8 mx-auto max-w-7xl">
      {Array.from({ length: Math.ceil(features.length / 2) }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-col sm:flex-row gap-6 w-full">
          {features.slice(rowIndex * 2, rowIndex * 2 + 2).map((feature, colIndex) => {
            const isFirst = colIndex === 0;
            const isEvenRow = rowIndex % 2 === 0;
            const isNarrow = (isEvenRow && isFirst) || (!isEvenRow && !isFirst);
            const isFirstCard = rowIndex === 0 && colIndex === 0;
            
            return (
              <div 
                key={rowIndex * 2 + colIndex} 
                className={`
                  bg-[#040000] p-4 rounded-lg 
                  h-90 min-h-[190px] relative border-[2px] overflow-hidden
                  w-full transition-all duration-500 ease-in-out
                  hover:shadow-xl hover:border-blue-500
                  ${isNarrow ? 'sm:w-[30%]' : 'sm:w-[70%]'}
                  group
                `}
              >
                {/* 3D PNG image for the first card */}
                {isFirstCard && (
                  <div className="absolute top-10 left-0 right-0 mx-auto flex justify-center z-10 transition-all duration-300 ease-out transform group-hover:scale-125">
                    <img src='./3d.png' alt="3D Illustration" className="w-44 h-44 object-contain" />
                  </div>
                )}

                {/* Content container positioned at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 transition-all duration-500 transform group-hover:translate-y-[-20px]">
                  <div className="flex flex-col items-start text-left space-y-2">
                    <span className="text-blue-500 self-start transform transition-all duration-300 ease-out 
                      group-hover:scale-125">
                      {feature.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-white text-left transition-all duration-400 ease-out 
                      group-hover:text-blue-400 group-hover:scale-105">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-300 text-left transition-all duration-500 ease-in-out 
                      sm:opacity-0 sm:max-h-0 opacity-100 max-h-96 overflow-hidden
                      group-hover:opacity-100 group-hover:max-h-24">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;