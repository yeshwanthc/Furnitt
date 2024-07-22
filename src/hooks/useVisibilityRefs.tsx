"use client"
import useOnScreen from './UseOnScreen';

const useVisibilityRefs = (numOfSections: number) => {
  const refs = Array.from({ length: numOfSections }, () => useOnScreen({ threshold: 0.1 }));
  return refs;
};

export default useVisibilityRefs;



