import React from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import FeatureCard from "./featurecard"

const AttemptsCard = ({ feature, className }) => {
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

      {/* Attempts showcase */}
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
    </FeatureCard>
  );
};

export default AttemptsCard;