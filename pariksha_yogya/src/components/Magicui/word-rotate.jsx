"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function WordRotate({
  words,
  duration = 1500,
  className,
  element = "span",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  const MotionComponent = motion[element] || motion.span;

  return (
    <div className="overflow-hidden h-10 flex items-center">
      <AnimatePresence mode="wait">
        <MotionComponent
          key={words[index]}
          className={cn(className)}
          initial={{ opacity: 0, y: 50 }} // Start below
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          exit={{ opacity: 0, y: -50 }} // Move upward on exit
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {words[index]}
        </MotionComponent>
      </AnimatePresence>
    </div>
  );
}
