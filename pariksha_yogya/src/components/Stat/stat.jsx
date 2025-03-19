import React from 'react';

const StatsAnalytics = () => {
  return (
    <div className="relative z-10 max-w-full mx-auto px-2 py-3 md:px-4 md:py-6 lg:px-6 lg:py-8">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
        
        {/* Stats grid for mobile, row for desktop */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center items-stretch gap-2 md:gap-4 lg:gap-6">
          {/* GitHub Stars */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-blue-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-blue-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">7th</span>
              <span className="text-blue-700 ml-1.5 font-medium">of 28M</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-blue-800">312K</div>
            <div className="text-blue-600 text-[10px] md:text-xs lg:text-base font-medium">GitHub Stars</div>
          </div>

          {/* Registered Users */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-indigo-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-indigo-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-indigo-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">+90k</span>
              <span className="text-indigo-700 ml-1.5 font-medium">monthly</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-indigo-800">1.5M</div>
            <div className="text-indigo-600 text-[10px] md:text-xs lg:text-base font-medium">Registered Users</div>
          </div>

          {/* Total Users */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-green-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-green-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-green-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">+120k</span>
              <span className="text-green-700 ml-1.5 font-medium">yearly</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-green-800">2.7M</div>
            <div className="text-green-600 text-[10px] md:text-xs lg:text-base font-medium">Total Users</div>
          </div>

          {/* Visitors */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-purple-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-purple-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">+500k</span>
              <span className="text-purple-700 ml-1.5 font-medium">monthly</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-purple-800">12.5M</div>
            <div className="text-purple-600 text-[10px] md:text-xs lg:text-base font-medium">Visitors</div>
          </div>

          {/* Eligible Aspirants */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-amber-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-12 h-12 bg-amber-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-amber-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">+35k</span>
              <span className="text-amber-700 ml-1.5 font-medium">weekly</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-amber-800">895K</div>
            <div className="text-amber-600 text-[10px] md:text-xs lg:text-base font-medium">Eligible Aspirants</div>
          </div>

          {/* Exams Covered */}
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 flex flex-col items-center p-2 md:p-3 lg:p-5 border border-rose-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[90px] md:min-w-[130px] lg:min-w-[160px] overflow-hidden relative">
            <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-rose-200 rounded-full opacity-30"></div>
            <div className="text-[10px] md:text-xs lg:text-sm mb-1 md:mb-2">
              <span className="bg-rose-600 text-white px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-lg font-medium">+25</span>
              <span className="text-rose-700 ml-1.5 font-medium">quarterly</span>
            </div>
            <div className="text-sm md:text-2xl lg:text-4xl xl:text-5xl font-bold my-1 md:my-2 lg:my-3 text-rose-800">178</div>
            <div className="text-rose-600 text-[10px] md:text-xs lg:text-base font-medium">Exams Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAnalytics;