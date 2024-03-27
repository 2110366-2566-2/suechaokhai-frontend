import { useEffect, useState } from "react";

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  threshold: number,
  callback: (isIntersecting: boolean) => void
) => {
  useEffect(() => {
    let observer;
    if (ref.current) {
      let option: IntersectionObserverInit = { threshold };

      observer = new IntersectionObserver(([entry]) => {
        callback(entry.isIntersecting);
      }, option);

      observer.observe(ref.current);
    }
  }, [ref, threshold, callback]);
};
