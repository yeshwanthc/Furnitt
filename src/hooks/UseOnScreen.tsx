"use client"
import { RefObject,useEffect, useRef, useState } from "react";

import useScrollDirection from "./UseScrollDirection";

const useOnScreen = (options): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && scrollDirection === "down") {
          setIsVisible(true);
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
