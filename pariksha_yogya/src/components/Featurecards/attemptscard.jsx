import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import FeatureCard from "./featurecard"

const AttemptsCard = ({ feature, className }) => {
  return (
    <FeatureCard className={className}>
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
    </FeatureCard>
  );
};

export default AttemptsCard;