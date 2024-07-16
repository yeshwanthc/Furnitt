import { useState, useEffect, useRef } from "react";
import useScrollDirection from "./UseScrollDirection";

const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDirection === "down") {
          setIsVisible(true);
          setHasBeenVisible(true);
        }
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, scrollDirection]);

  return [ref, isVisible];
};

export default useOnScreen;
