import React from "react";
import Timeline from "./Features";

const TimelineDemo = () => {
  const data = [
    {
      title: "STRUCTURED SYLLABUS 📌",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>🔹 One-stop solution – get the full syllabus for every exam in a well-organized way.</li>
              <li>🔹 Visually mapped-out subjects so you never feel lost.</li>
              <li>🔹 Save hours of manual syllabus searching – we’ve done it for you!</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 No more guesswork—start with clarity and confidence!
            </p>
          </div>
          <img
            src="./images/Structured_sy.png"
            alt="Syllabus Mapping"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "🔍 Deep Breakdown of Topics & Sub-Topics",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>💡 Ever felt overwhelmed by vast subjects? We break each topic into bite-sized, easy-to-understand sections.</li>
              <li>✅ Step-by-step learning – go from basics to advanced effortlessly.</li>
              <li>✅ Visual hierarchy – understand the depth of each topic.</li>
              <li>✅ Linked sub-topics – making complex subjects simpler.</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 Master subjects with clarity and ease!
            </p>
          </div>
          <img
            src="./images/Detailed_topics_subtopics.png"
            alt="Topic Breakdown"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "🔥 Topic Importance – Study Smarter, Not Harder!",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>💯 Want to focus on high-scoring topics first? We got you!</li>
              <li>✅ Topics are categorized based on importance:</li>
              <li>⭐ Important – Must-study topics</li>
              <li>🔥 Most Important – High-weightage questions come from here</li>
              <li>💎 MM Important – Must-Master topics for rank improvement</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 Maximize your marks by prioritizing the right topics!
            </p>
          </div>
          <img
            src="./images/topic_importance.png"
            alt="Study Priorities"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "✅ Progress Tracker – Tick Off & Stay Motivated!",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>📅 Tracking progress = More Productivity!</li>
              <li>✅ Mark each topic as completed and watch your progress grow.</li>
              <li>✅ Stay on top of your study plan – never miss a topic.</li>
              <li>✅ Visual completion bar to keep you motivated and focused!</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 Your journey to success is now trackable!
            </p>
          </div>
          <img
            src="./images/tick_mark_progress.png"
            alt="Progress Tracker"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "📚 Free & Premium Study Resources – Learn from the Best!",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>👨‍🎓 Why waste time searching for the right materials? Get everything in one place!</li>
              <li>✅ Free resources – Notes, PDFs, video lectures, and question banks.</li>
              <li>✅ Premium resources – Exclusive high-quality paid courses for deeper learning.</li>
              <li>✅ Curated by experts – Study from the best, stress-free!</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 Smart resources = Faster preparation = Better results!
            </p>
          </div>
          <img
            src="./images/resources.png"
            alt="Study Resources"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "📝 Quick Topic Summaries – Revise in Minutes!",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              <li>⏳ No time for long books? We got you covered!</li>
              <li>✅ Short, crisp topic summaries – read, revise, and retain easily.</li>
              <li>✅ Important points highlighted – know what matters most.</li>
              <li>✅ Perfect for last-minute revision!</li>
            </ul>
            <p className="font-semibold text-purple-500">
              🎯 Boost your memory, revise faster, and ace your exams!
            </p>
          </div>
          <img
            src="./images/topic_summary.png"
            alt="Quick Revision"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
        </div>
      ),
    },
    {
      title: "🎯 Start Your Exam Journey with the Best Roadmap!",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              📌 No more confusion. No more wasted time. Just smart, structured, and strategic learning!
              👉 Join now & take your first step towards success! 🚀
            </p>
          </div>
          <img
            src="https://via.placeholder.com/300"
            alt="Exam Roadmap"
            className="rounded-lg object-cover w-full h-auto md:h-60"
          />
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
