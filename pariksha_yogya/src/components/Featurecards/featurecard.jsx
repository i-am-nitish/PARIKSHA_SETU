import React from "react";

const FeatureCard = ({ className, children }) => {
  return (
    <div 
      className={`
        bg-[#ffffff] p-4 rounded-lg 
        h-90 min-h-[190px] relative border-[2px] overflow-hidden
        w-full transition-all duration-500 ease-in-out
        hover:shadow-xl hover:border-blue-500
        ${className}
        group
      `}
    >
      {children}
    </div>
  );
};

export default FeatureCard;