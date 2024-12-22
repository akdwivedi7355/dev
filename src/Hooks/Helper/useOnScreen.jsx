import { useEffect, useState } from "react";

function useOnScreen(ref, options = { rootMargin: "0px", threshold: 1 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref?.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);

  return isVisible;
}

export default useOnScreen;
