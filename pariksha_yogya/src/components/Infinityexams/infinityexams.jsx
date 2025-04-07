import React from 'react';

// Custom animation styles with adjusted keyframes for true infinite scrolling
const customStyles = `
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 8px)); }
  }
  
  @keyframes scrollRight {
    0% { transform: translateX(calc(-50% - 8px)); }
    100% { transform: translateX(0); }
  }
  
  .animate-scroll-left {
    animation: scrollLeft 30s linear infinite;
    display: flex;
    width: max-content;
  }
  
  .animate-scroll-right {
    animation: scrollRight 30s linear infinite;
    display: flex;
    width: max-content;
  }
  
  .scroll-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .inner-container {
    display: flex;
    flex-shrink: 0;
  }
`;

const InfinityExams = () => {
  // Arrays of exam names for each line
  const line1Exams = ["JEE Main", "NEET", "GATE", "UGC NET", "CAT", "UPSC", "SSC CGL", "IBPS PO", "NDA", "CDS", "CLAT", "JEE Advanced", "NEET", "GATE"];
  const line2Exams = ["IIT JEE Advanced", "AIIMS", "BITSAT", "XAT", "GMAT", "GRE", "TOEFL", "IELTS", "CTET", "MPSC", "IIT JEE", "AIIMS", "BITSAT"];
  const line3Exams = ["CA Foundation", "CS Executive", "NEET PG", "JEST", "CSIR NET", "JIPMER", "AILET", "MAT", "SNAP", "CA Foundation", "CS Executive"];
  
  // Light mode colors
  const colors1 = [
    "bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300",
    "bg-red-100 border-red-300 text-red-800 dark:bg-red-900/40 dark:border-red-700 dark:text-red-300",
    "bg-green-100 border-green-300 text-green-800 dark:bg-green-900/40 dark:border-green-700 dark:text-green-300",
    "bg-purple-100 border-purple-300 text-purple-800 dark:bg-purple-900/40 dark:border-purple-700 dark:text-purple-300",
    "bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-300"
  ];
  
  const colors2 = [
    "bg-pink-100 border-pink-300 text-pink-800 dark:bg-pink-900/40 dark:border-pink-700 dark:text-pink-300",
    "bg-indigo-100 border-indigo-300 text-indigo-800 dark:bg-indigo-900/40 dark:border-indigo-700 dark:text-indigo-300",
    "bg-teal-100 border-teal-300 text-teal-800 dark:bg-teal-900/40 dark:border-teal-700 dark:text-teal-300",
    "bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/40 dark:border-orange-700 dark:text-orange-300",
    "bg-cyan-100 border-cyan-300 text-cyan-800 dark:bg-cyan-900/40 dark:border-cyan-700 dark:text-cyan-300"
  ];
  
  const colors3 = [
    "bg-emerald-100 border-emerald-300 text-emerald-800 dark:bg-emerald-900/40 dark:border-emerald-700 dark:text-emerald-300",
    "bg-sky-100 border-sky-300 text-sky-800 dark:bg-sky-900/40 dark:border-sky-700 dark:text-sky-300",
    "bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-900/40 dark:border-amber-700 dark:text-amber-300",
    "bg-violet-100 border-violet-300 text-violet-800 dark:bg-violet-900/40 dark:border-violet-700 dark:text-violet-300",
    "bg-rose-100 border-rose-300 text-rose-800 dark:bg-rose-900/40 dark:border-rose-700 dark:text-rose-300"
  ];

  // Function to assign a color to an exam
  const getColor = (index, colors) => {
    return colors[index % colors.length];
  };

  const renderExam = (exam, index, lineNumber, colors) => (
    <div 
      key={`line${lineNumber}-${index}`} 
      className={`flex items-center px-3 py-1.5 rounded-[10px] border text-xs font-medium sm:text-sm max-w-fit mx-1 ${getColor(index, colors)}`}
    >
      {exam}
    </div>
  );

  return (
    <div className="w-full overflow-hidden py-6 bg-slate-100 dark:bg-gray-900">
      {/* Inject custom animation styles */}
      <style>{customStyles}</style>
      
      {/* First line - left to right */}
      <div className="scroll-container my-4">
        <div className="animate-scroll-left">
          {/* First set of exams */}
          <div className="inner-container">
            {line1Exams.map((exam, index) => renderExam(exam, index, 1, colors1))}
          </div>
          {/* Second set for seamless loop */}
          <div className="inner-container">
            {line1Exams.map((exam, index) => renderExam(exam, index, "1-dup", colors1))}
          </div>
        </div>
      </div>
      
      {/* Second line - right to left */}
      <div className="scroll-container my-4">
        <div className="animate-scroll-right">
          {/* First set of exams */}
          <div className="inner-container">
            {line2Exams.map((exam, index) => renderExam(exam, index, 2, colors2))}
          </div>
          {/* Second set for seamless loop */}
          <div className="inner-container">
            {line2Exams.map((exam, index) => renderExam(exam, index, "2-dup", colors2))}
          </div>
        </div>
      </div>
      
      {/* Third line - left to right */}
      <div className="scroll-container my-4">
        <div className="animate-scroll-left">
          {/* First set of exams */}
          <div className="inner-container">
            {line3Exams.map((exam, index) => renderExam(exam, index, 3, colors3))}
          </div>
          {/* Second set for seamless loop */}
          <div className="inner-container">
            {line3Exams.map((exam, index) => renderExam(exam, index, "3-dup", colors3))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinityExams;