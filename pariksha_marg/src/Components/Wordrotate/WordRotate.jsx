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
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
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
    <div className="overflow-hidden inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={className}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default WordRotate;
