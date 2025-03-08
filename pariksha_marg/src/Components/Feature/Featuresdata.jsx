import React from "react";
import Timeline from "./Features";

const TimelineDemo = () => {
  const data = [
    {
      title: "STRUCTURED SYLLABUS 📌",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Finding the right syllabus can be time-consuming and confusing. Our roadmap provides a one-stop solution where you can access the entire syllabus for every exam in a well-organized way. Subjects and topics are visually mapped out, ensuring that you never feel lost while studying. Save hours of manual syllabus searching—we’ve done the work for you so you can focus on learning.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> No guesswork - start with clarity & confidence!
            </p>
          </div>
          <img src="./featuresimages/Structured_sy.png" alt="Syllabus Mapping" className="rounded-lg object-contain w-full h-auto md:h-72 mx-auto" />
        </div>
      ),
    },
    {
      title: "Deep Breakdown of Topics & Sub-Topics 🔍",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Competitive exams cover vast subjects, which can feel overwhelming. To make learning easier, we break down each topic into bite-sized, easy-to-understand sections. Our step-by-step approach ensures you progress from basics to advanced concepts effortlessly. The visual hierarchy of topics helps you grasp the depth of each subject, while linked sub-topics provide a clear flow of concepts.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> Master subjects with clarity and ease!
            </p>
          </div>
          <img src="./featuresimages/Detailed_topics_subtopics.png" alt="Topic Breakdown" className="rounded-lg object-cover w-full h-auto md:h-72 mx-auto" />
        </div>
      ),
    },
    {
      title: "Topic Importance – Study Smarter, Not Harder! 🔥",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Not all topics carry the same weight in exams. Our roadmap categorizes topics based on their importance, helping you prioritize your study plan efficiently. Topics are labeled as Important, Most Important, and MM Important (Must-Master) based on previous exam trends and weightage. This ensures you focus on high-scoring areas first, maximizing your marks with smart study planning.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> Maximize your marks by prioritizing the right topics!
            </p>
          </div>
          <img src="./featuresimages/topic_importance.png" alt="Study Priorities" className="rounded-lg object-cover w-full h-auto md:h-72 mx-auto" />
        </div>
      ),
    },
    {
      title: "Progress Tracker – Tick Off & Stay Motivated! 📅",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Tracking your progress keeps you productive and motivated. Our roadmap allows you to mark each topic as completed, giving you a clear view of your progress. This feature ensures you stay on top of your study plan and never miss a topic. With a visual completion bar, you can see how far you’ve come and what’s left, making your preparation more goal-oriented and effective.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> Your journey to success is now trackable!
            </p>
          </div>
          <img src="./featuresimages/tick_mark_progress.png" alt="Progress Tracker" className="rounded-lg object-cover w-full h-auto md:h-72 mx-auto" />
        </div>
      ),
    },
    {
      title: "Free & Premium Study Resources – Learn from the Best! 📚",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Finding the right study material is crucial, and we make it effortless. Our roadmap provides access to free and premium resources, including notes, PDFs, video lectures, and question banks. Need more depth? Explore high-quality paid courses curated by top educators and subject experts. Whether you’re looking for quick references or in-depth learning, everything you need is available in one place.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> Smart resources = Faster preparation = Better results!
            </p>
          </div>
          <img src="./featuresimages/resources.png" alt="Study Resources" className="rounded-lg object-cover w-full h-auto md:h-72 mx-auto" />
        </div>
      ),
    },
    {
      title: "Quick Topic Summaries – Revise in Minutes! 🚀",
      content: (
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
            Long textbooks can be overwhelming, especially during revision. Our short, crisp topic summaries ensure you can read, revise, and retain key points easily. Important points are highlighted, so you instantly know what matters most. Whether you need a quick refresher or last-minute revision, these summaries help you boost retention and improve recall.
            </p>
            <p className="flex items-center px-3 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-xs font-medium text-blue-800 sm:text-sm max-w-fit">
              <span className="mr-1.5">🎯</span> Boost your memory, revise faster, and ace your exams!
            </p>
          </div>
          <img src="./featuresimages/topic summary.png" alt="Quick Revision" className="rounded-lg object-cover w-full h-auto md:h-72 mx-auto" />
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
