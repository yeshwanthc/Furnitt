"use client"
import { useRef } from "react";
import useOnScreen from "@/hooks/UseOnScreen";

const useVisibilityRefs = (sectionsLength) => {
  const visibilityRefs = useRef([]);
  if (visibilityRefs.current.length !== sectionsLength) {
    visibilityRefs.current = Array(sectionsLength)
      .fill()
      .map(() => useOnScreen({ threshold: 0.1 }));
  }
  return visibilityRefs.current;
};

export default useVisibilityRefs;
