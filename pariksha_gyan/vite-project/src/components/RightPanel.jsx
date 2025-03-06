import React, { useState } from "react";
import { PYQ_CATEGORIES, PYQS } from "@/store/constants";

function RightPanel({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState("UPSC");
  const [revealedAnswers, setRevealedAnswers] = useState({});

  if (!isOpen) return null;

  return (
    <aside className="w-1/4 p-4 border-l overflow-y-auto relative">
      <button 
        className="absolute top-2 right-2 px-2 py-1"
        onClick={onClose}
      >
        &gt;
      </button>
      <h2 className="text-lg font-semibold mb-4">Exam PYQs</h2>
      
      <div>
        <div className="flex mb-4 border rounded p-1">
          {PYQ_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-3 py-1.5 text-sm font-medium ${
                selectedCategory === category 
                  ? 'bg-gray-200 rounded-sm' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div>
          {PYQS[selectedCategory].map((item, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <p className="font-bold">Q: {item.question}</p>
              <button 
                onClick={() => setRevealedAnswers((prev) => ({ 
                  ...prev, 
                  [selectedCategory + index]: !prev[selectedCategory + index] 
                }))} 
                className="mt-2 px-3 py-1 bg-gray-200 rounded text-sm"
              >
                {revealedAnswers[selectedCategory + index] ? "Hide Answer" : "Reveal Answer"}
              </button>
              {revealedAnswers[selectedCategory + index] && <p className="mt-2">A: {item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default RightPanel;
