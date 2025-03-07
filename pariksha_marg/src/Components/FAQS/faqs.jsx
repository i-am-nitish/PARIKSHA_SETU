import React, { useState } from 'react';

const FAQS = () => {
  // FAQ data with questions and answers
  const faqData = [
    {
      question: "What is ParikshaMarg?",
      answer: "ParikshaMarg is a syllabus roadmap tool that helps students navigate their exam syllabus in an interactive flowchart format."
    },
    {
      question: "How does the syllabus roadmap work?",
      answer: "It provides a structured visual representation of exam topics, ensuring comprehensive coverage and efficient study planning."
    },
    {
      question: "Which exams does ParikshaMarg support?",
      answer: "It supports multiple competitive exams like UPSC, SSC, NDA, CDS, and other government exams."
    },
    {
      question: "Can I customize my syllabus roadmap?",
      answer: "Yes, students can personalize their syllabus track based on their learning preferences."
    },
    {
      question: "Does ParikshaMarg provide study materials?",
      answer: "Yes, it includes access to free and paid content, along with direct links to relevant study materials."
    },
    {
      question: "Is there a progress tracker available?",
      answer: "Yes, students can track their progress and ensure they cover all necessary topics before their exams."
    },
    {
      question: "Are reminders available for study deadlines?",
      answer: "Yes, the platform includes a reminder system to help students stay on track with their study schedule."
    },
    {
      question: "Does ParikshaMarg provide video explanations?",
      answer: "A future feature includes short, topic-wise video explanations for better understanding."
    },
    {
      question: "Is ParikshaMarg free to use?",
      answer: "There is a basic free version, but premium features like exclusive paid courses are available for a subscription."
    },
    {
      question: "How is it different from other syllabus platforms?",
      answer: "Unlike other platforms, ParikshaMarg offers a visually structured syllabus, personalized study plans, and integration with other exam prep tools."
    }
  ];

  // State to track which FAQ item is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close FAQs
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          ParikshaMarg <span className="text-gray-600">(Syllabus Flowchart & Roadmap)</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 ${
                activeIndex === index ? 'shadow-lg' : ''
              }`}
            >
              <div 
                className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-gray-800 text-lg">{faq.question}</h3>
                <span className="text-2xl text-gray-500 transition-transform duration-300 transform">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-5 pt-0 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;