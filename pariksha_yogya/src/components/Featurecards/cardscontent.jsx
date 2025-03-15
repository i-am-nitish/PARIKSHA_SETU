import React from "react";
import { FaCheckCircle, FaSyncAlt, FaChartBar, FaClipboardList, FaBookOpen, FaLightbulb } from "react-icons/fa";
import EligibilityCard from "./eligibilitycard"
import AttemptsCard from "./attemptscard"
import StandardFeatureCard from "./standardfeaturecard"

import Highlighter from "@/components/ui/highlighter"

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
  // Note: You have a duplicated entry in your original code, I'm removing it here
];

const FeatureSection = () => {
  return (

    <div>



    <div className="w-full mx-0 px-0">
        <div className="relative z-10 w-full mx-0 px-0 py-4 md:py-12 text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 md:mb-10 text-gray-900 dark:text-white">
            Features
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl md:max-w-4xl lg:max-w-4xl mx-auto mt-3 md:mt-6">
            Finding out your <Highlighter color="#FF9800">exam eligibility </Highlighter> doesn't have to be complicated. Stop struggling with confusing eligibility criteria and age
            calculations. Our platform helps you instantly determine which
            exams you're eligible for and how many attempts you have left.<Highlighter color="#FFC107" action="circle">Try it out now!</Highlighter>
          </p>
        </div>
      </div>

    


    <div className="flex flex-col gap-6 px-4 py-8 mx-auto max-w-7xl border-2 border-gray-400 rounded-lg bg-gray-00">

      
      
      {Array.from({ length: Math.ceil(features.length / 2) }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-col sm:flex-row gap-6 w-full">
          {features.slice(rowIndex * 2, rowIndex * 2 + 2).map((feature, colIndex) => {
            const isFirst = colIndex === 0;
            const isEvenRow = rowIndex % 2 === 0;
            const isNarrow = (isEvenRow && isFirst) || (!isEvenRow && !isFirst);
            const isFirstCard = rowIndex === 0 && colIndex === 0;
            const isNumberOfAttemptsCard = rowIndex === 0 && colIndex === 1;
            
            const cardClassName = isNarrow ? 'sm:w-[30%]' : 'sm:w-[70%]';
            
            if (isFirstCard) {
              return <EligibilityCard 
                key={rowIndex * 2 + colIndex} 
                feature={feature} 
                className={cardClassName} 
              />;
            } else if (isNumberOfAttemptsCard) {
              return <AttemptsCard 
                key={rowIndex * 2 + colIndex} 
                feature={feature} 
                className={cardClassName} 
              />;
            } else {
              return <StandardFeatureCard 
                key={rowIndex * 2 + colIndex} 
                feature={feature} 
                className={cardClassName} 
              />;
            }
          })}
        </div>
      ))}
    </div>
    </div> 
  );
};

export default FeatureSection;