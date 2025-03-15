import React from "react";
import { FaCheckCircle, FaBookOpen, FaClipboardList, FaChartBar } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import FeatureCard from "./featurecard";

const EligibilityCard = ({ feature, className }) => {
  return (
    <FeatureCard className={className}>
      {/* Content container positioned at the top */}
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

      {/* Mini form showcase */}
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
    </FeatureCard>
  );
};

export default EligibilityCard;