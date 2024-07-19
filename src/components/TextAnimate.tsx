import React from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  delayPerWord = 0.1,
  delayPerChar = 0.05,
  duration = 0.5,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const words = text.split(" ").map((word, index) => (
    <span key={index} className="word">
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          className="char"
          initial={{ opacity: 0, x: "1em" }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{
            delay: index * delayPerWord + i * delayPerChar,
            duration,
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
      &nbsp;
    </span>
  ));

  return (
    <div className="" ref={ref}>
      
        <h1 className="animated-text">{words}</h1>
    </div>
  );
};

export default AnimatedText;
