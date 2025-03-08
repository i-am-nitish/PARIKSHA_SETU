"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";

export function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate"]}
    />
  );
}

const WordRotate = ({
    words,
    duration = 2500,
    motionProps = {
      initial: { opacity: 0, y: -15 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 15 },
      transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-flex overflow-hidden align-baseline" style={{ height: "1.2em", verticalAlign: "baseline" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={className}
          {...motionProps}
          style={{ 
            display: "inline-block", 
            verticalAlign: "baseline",
            ...motionProps.style 
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default WordRotate;