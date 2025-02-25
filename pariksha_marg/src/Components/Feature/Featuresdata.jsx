import React from "react";
import Timeline from "./Features";

const TimelineDemo = () => {
  const data = [
    {
      title: "📌 Structured Syllabus – Know What to Study!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🔹 One-stop solution – get the full syllabus for every exam in a well-organized way.  
            🔹 Visually mapped-out subjects so you never feel lost.  
            🔹 Save hours of manual syllabus searching – we’ve done it for you!  
          </p>
          <p className="font-semibold text-purple-500">🎯 No more guesswork—start with clarity and confidence!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="./images/Structured_sy.png" alt="Syllabus Mapping" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "🔍 Deep Breakdown of Topics & Sub-Topics",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            💡 Ever felt overwhelmed by vast subjects? We break each topic into bite-sized, easy-to-understand sections.  
            ✅ Step-by-step learning – go from basics to advanced effortlessly.  
            ✅ Visual hierarchy – understand the depth of each topic.  
            ✅ Linked sub-topics – making complex subjects simpler.  
          </p>
          <p className="font-semibold text-purple-500">🎯 Master subjects with clarity and ease!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Topic Breakdown" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "🔥 Topic Importance – Study Smarter, Not Harder!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            💯 Want to focus on high-scoring topics first? We got you!  
            ✅ Topics are categorized based on importance:  
            ⭐ Important – Must-study topics  
            🔥 Most Important – High-weightage questions come from here  
            💎 MM Important – Must-Master topics for rank improvement  
          </p>
          <p className="font-semibold text-purple-500">🎯 Maximize your marks by prioritizing the right topics!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Study Priorities" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "✅ Progress Tracker – Tick Off & Stay Motivated!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            📅 Tracking progress = More Productivity!  
            ✅ Mark each topic as completed and watch your progress grow.  
            ✅ Stay on top of your study plan – never miss a topic.  
            ✅ Visual completion bar to keep you motivated and focused!  
          </p>
          <p className="font-semibold text-purple-500">🎯 Your journey to success is now trackable!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Progress Tracker" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "📚 Free & Premium Study Resources – Learn from the Best!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            👨‍🎓 Why waste time searching for the right materials? Get everything in one place!  
            ✅ Free resources – Notes, PDFs, video lectures, and question banks.  
            ✅ Premium resources – Exclusive high-quality paid courses for deeper learning.  
            ✅ Curated by experts – Study from the best, stress-free!  
          </p>
          <p className="font-semibold text-purple-500">🎯 Smart resources = Faster preparation = Better results!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Study Resources" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "📝 Quick Topic Summaries – Revise in Minutes!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ⏳ No time for long books? We got you covered!  
            ✅ Short, crisp topic summaries – read, revise, and retain easily.  
            ✅ Important points highlighted – know what matters most.  
            ✅ Perfect for last-minute revision!  
          </p>
          <p className="font-semibold text-purple-500">🎯 Boost your memory, revise faster, and ace your exams!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Quick Revision" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "🎯 Start Your Exam Journey with the Best Roadmap!",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            📌 No more confusion. No more wasted time. Just smart, structured, and strategic learning!  
            👉 Join now & take your first step towards success! 🚀  
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/300" alt="Exam Roadmap" className="rounded-lg object-cover w-full h-40 md:h-60" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
};

export default TimelineDemo;
