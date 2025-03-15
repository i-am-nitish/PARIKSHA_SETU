import React from "react";
import VerticalTabs from "../Components/VerticalTabs";

function ExplorePage() {
  return (
    <div className="w-full min-h-screen p-4 mt-18">
      <h1 className="text-3xl font-bold mb-3">
        Explore Exams
      </h1>
      
      <VerticalTabs />
    </div>
  );
}

export default ExplorePage;